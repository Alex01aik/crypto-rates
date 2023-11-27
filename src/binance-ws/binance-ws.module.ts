import { Module } from '@nestjs/common';
import { BinanceWebSocketService } from './binance-ws.service';
import { RateModule } from 'src/rate/rate.module';

@Module({
  imports: [RateModule],
  providers: [BinanceWebSocketService],
})
export class BinanceWsModule {}
