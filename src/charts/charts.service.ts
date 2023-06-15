import { RedisService } from 'src/redis/redis.service';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChartsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async getUsers() {
    const users = await this.redis.get('users');
    if (!users) {
      const users = await this.prisma.user.findMany();
      const stringValue = JSON.stringify(users);
      await this.redis.set('users', stringValue, 'EX', 30);
      console.log('from DB storing in redis !');
      return users;
    }
    console.log('from Redis Cache!');
    return users;
  }
}
