import { Controller, Get, Query } from '@nestjs/common';
import { ShippingService } from './shipping.service.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get()
  getShipping(@Query('weight') weight: string, @Query('zone') zone: string) {
    return this.shippingService.calculate(Number(weight), zone);
  }
}
