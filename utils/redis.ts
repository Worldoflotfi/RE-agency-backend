require('dotenv').config();

import { Redis } from 'ioredis';


const redisClient = () => {
    const redisUrl = process.env.REDIS_URL;
    if (!redisUrl) {
        throw new Error('Redis connection URL is missing in environment variables');
    }

    console.log('Connected to Redis...');
    return new Redis(redisUrl);
}; 

export const redis = redisClient();

redis.on('error', (err) => {
    console.error('Redis error:', err);
});

