/**
 * @desc Kafka consumer example that subscribes to a topic and processes messages.
 * Connects to a Kafka broker and listens for incoming messages from a specified topic.
 */


import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'demo-consumer',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  try {
    await consumer.connect();
    console.log('Kafka connected.');

    await consumer.subscribe({
      topic: 'demo-topic',
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`\n Received message: ${message.value.toString()}`);
      },
    });
  } catch (err) {
    console.error('Error in consumer:', err);
  }
};

run();
