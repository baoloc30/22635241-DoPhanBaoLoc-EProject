require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://mongo/orders',
    rabbitMQURI: 'amqp://rabbitmq',
    rabbitMQQueue: 'orders',
    port: 3002
};
  