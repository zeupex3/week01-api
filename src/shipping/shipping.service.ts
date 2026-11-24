import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ShippingService {
  calculate(weight: number, zone: string) {
    if (!weight || weight <= 0) {
      throw new BadRequestException('น้ำหนักต้องมากกว่า 0');
    }

    const zoneRates: Record<string, number> = {
      bangkok: 0,
      north: 10,
      south: 25,
    };

    const zoneFee = zoneRates[zone?.toLowerCase()];
    if (zoneFee === undefined) {
      throw new BadRequestException('ไม่พบเขตพื้นที่ที่ระบุ');
    }

    const baseFee = 50 + Math.max(0, Math.ceil(weight - 1)) * 18;
    const total = baseFee + zoneFee;

    return { weight, zone, baseFee, zoneFee, total };
  }
}
