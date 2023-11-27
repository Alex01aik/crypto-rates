import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RateService],
  exports: [RateService],
})
export class RateModule {}
