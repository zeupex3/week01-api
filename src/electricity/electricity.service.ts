import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ElectricityService {
  calculate(units: number, type: string) {
    if (!Number.isInteger(units) || units < 0) {
      throw new BadRequestException('จำนวนหน่วยต้องเป็นจำนวนเต็มตั้งแต่ 0 ขึ้นไป');
    }

    const serviceFees: Record<string, number> = {
      residential: 40,
      business: 90,
    };

    const serviceFee = serviceFees[type?.toLowerCase()];
    if (serviceFee === undefined) {
      throw new BadRequestException('ไม่พบประเภทผู้ใช้ไฟฟ้าที่ระบุ');
    }

    const energyFee = Math.min(units, 150) * 3 + Math.max(0, units - 150) * 4;
    const total = energyFee + serviceFee;

    return { units, type, energyFee, serviceFee, total };
  }
}
