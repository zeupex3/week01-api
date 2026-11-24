import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConverterModule } from './converter/converter.module.js';
import { ShippingModule } from './shipping/shipping.module.js';
import { ElectricityModule } from './electricity/electricity.module.js';
import { FineModule } from './fine/fine.module.js';

@Module({
  imports: [ConverterModule, ShippingModule, ElectricityModule, FineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
