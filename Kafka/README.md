# Kafka Examples

Examples demonstrating Apache Kafka producer and consumer implementations using KafkaJS library.

## Files

- **producer.js** - Sends messages to a Kafka topic
- **consumer.js** - Consumes messages from a Kafka topic
- **docker-compose.yml** - Docker setup for running Kafka locally

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start Kafka using Docker Compose:
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

- kafkajs: 2.2.4

## Resources

- [KafkaJS Documentation](https://kafka.js.org/)
- [Apache Kafka](https://kafka.apache.org/)
