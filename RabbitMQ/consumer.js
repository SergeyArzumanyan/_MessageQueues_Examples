/**
 * @desc RabbitMQ consumer example that receives messages from a queue.
 * Connects to RabbitMQ and listens for incoming messages from a specified queue.
 */


import amqplib from "amqplib";

const queue = "tasks";

const receiveMessages = async () => {
  try {
    const connection = await amqplib.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: false });
    console.log("Waiting...");

    channel.consume(queue, (msg) => {
      console.log(`Received: ${msg.content.toString()}`);
      channel.ack(msg);
    });
  } catch (error) {
    console.error("Error while receiving the message:", error);
  }
};

receiveMessages();
