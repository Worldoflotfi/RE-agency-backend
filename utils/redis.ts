import { Redis } from 'ioredis';
require('dotenv').config();

const redisClient = () => {
    const redisUrl = process.env.REDIS_URL;
    if (!redisUrl) {
        throw new Error('Redis connection URL is missing in environment variables');
    }

    console.log('Connecting to Redis...');
    return new Redis(redisUrl);
};

export const redis = redisClient();

redis.on('error', (err) => {
    console.error('Redis error:', err);
});
