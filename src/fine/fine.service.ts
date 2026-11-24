import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FineService {
  calculate(days: number, type: string) {
    if (!Number.isInteger(days) || days < 0) {
      throw new BadRequestException('จำนวนวันต้องเป็นจำนวนเต็มตั้งแต่ 0 ขึ้นไป');
    }

    const rates: Record<string, number> = {
      general: 5,
      reserve: 20,
      reference: 50,
    };

    const rate = rates[type?.toLowerCase()];
    if (rate === undefined) {
      throw new BadRequestException('ไม่พบประเภทหนังสือที่ระบุ');
    }

    const chargeableDays = Math.max(0, days - 3);
    const total = Math.min(500, chargeableDays * rate);

    return { days, type, chargeableDays, rate, total };
  }
}
