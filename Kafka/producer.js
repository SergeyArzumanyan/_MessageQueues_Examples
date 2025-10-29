import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'demo-producer',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const run = async () => {
  try {
    await producer.connect();
    console.log('Kafka connected.');

    const message = {
      value: 'Hello!',
    };

    await producer.send({
      topic: 'demo-topic',
      messages: [message],
    });

    console.log('\n Message sent:', message.value);
  } catch (err) {
    console.error('Error in producer:', err);
  } finally {
    await producer.disconnect();
  }
};

run();
