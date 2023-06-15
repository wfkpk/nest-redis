import { Controller, Get } from '@nestjs/common';
import { ChartsService } from './charts.service';

@Controller('charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Get()
  async getAllUser() {
    return await this.chartsService.getUsers();
  }
}
