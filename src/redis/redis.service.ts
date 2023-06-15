import { Injectable, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService extends Redis implements OnModuleInit {
  async onModuleInit() {
    super.on('connect', () => {
      console.log('Redis connected!');
    });
    super.on('error', (err) => {
      console.log('Error on Redis');
      console.log(err);
      process.exit(1);
    });
  }
  constructor() {
    const redisOptions = {
      host: '127.0.0.1',
      port: 6379,
    };

    super(redisOptions);
  }
}
