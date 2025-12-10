/**
 * @desc RabbitMQ producer example that sends messages to a queue.
 * Establishes a connection to RabbitMQ and publishes messages to a specified queue.
 */


import amqplib from "amqplib";

const queue = "tasks";
const message = "Hello";

const sendMessage = async () => {
  try {
    const connection = await amqplib.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(message));

    console.log(`Message sent: "${message}"`);
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error("Error while sending:", error);
  }
};

sendMessage();
