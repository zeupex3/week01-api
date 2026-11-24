import { Controller, Get, Query } from '@nestjs/common';
import { FineService } from './fine.service.js';

@Controller('fine')
export class FineController {
  constructor(private readonly fineService: FineService) {}

  @Get()
  getFine(@Query('days') days: string, @Query('type') type: string) {
    const parsedDays = days?.trim() ? Number(days) : NaN;
    return this.fineService.calculate(parsedDays, type);
  }
}
