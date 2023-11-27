import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { RateService } from 'src/rate/rate.service';
import * as WebSocket from 'ws';

@Injectable()
export class BinanceWebSocketService implements OnModuleInit, OnModuleDestroy {
  private ws: WebSocket;

  constructor(private readonly rateService: RateService) {
    this.ws = new WebSocket(
      `${process.env.BINANCE_WS_URL}${process.env.BASE_CURRENCY ?? 'btc'}${
        process.env.QUOTE_CURRENCY ?? 'usdt'
      }@trade`,
    );
  }

  async onModuleInit() {
    await this.rateService.upsertOne('test', Number('9.999'));
    // this.ws.on('open', () => {
    //   console.log('Binance WebSocket connection opened');
    // });
    // this.ws.on('message', async (data) => {
    //   const jsonData = JSON.parse(data.toString());
    //   console.log('jsonData', jsonData);
    //   await this.rateService.upsertOne(jsonData.s, Number(jsonData.p));
    // });
  }

  onModuleDestroy() {
    // this.ws.on('error', (error) => {
    //   console.error('Binance WebSocket error:', error);
    // });
  }
}
