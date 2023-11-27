import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RateService {
  constructor(private readonly prisma: PrismaService) {}

  async upsertOne(pair: string, value: number) {
    console.log('test', pair, value);
    const test = await this.prisma.rate.findMany();
    console.log('test', test);
    // await this.prisma.rate.upsert({
    //   where: {
    //     pair: 'test',
    //   },
    //   update: {
    //     value: 2.2,
    //   },
    //   create: {
    //     pair: 'test',
    //     value: 2.2,
    //   },
    // });
  }
}
