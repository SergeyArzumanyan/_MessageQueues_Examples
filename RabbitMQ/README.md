# RabbitMQ Examples

Examples demonstrating RabbitMQ producer and consumer implementations using amqplib library.

## Files

- **producer.js** - Sends messages to a RabbitMQ queue
- **consumer.js** - Consumes messages from a RabbitMQ queue
- **docker-compose.yml** - Docker setup for running RabbitMQ locally

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start RabbitMQ using Docker Compose:
   ```bash
   docker-compose up -d
   ```

3. Run the consumer:
   ```bash
   node consumer.js
   ```

4. Run the producer (in a separate terminal):
   ```bash
   node producer.js
   ```

## Dependencies

- amqplib: 0.10.3

## Resources

- [amqplib Documentation](https://amqp-node.github.io/amqplib/)
- [RabbitMQ Tutorials](https://www.rabbitmq.com/tutorials)
