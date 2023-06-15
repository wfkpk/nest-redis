import { Module } from '@nestjs/common';
import { ChartsController } from './charts.controller';
import { ChartsService } from './charts.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [PrismaModule, RedisModule],
  controllers: [ChartsController],
  providers: [ChartsService],
})
export class ChartsModule {}
