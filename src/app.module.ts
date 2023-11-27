import { Module } from '@nestjs/common';
import { BinanceWsModule } from './binance-ws/binance-ws.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot(), BinanceWsModule],
  controllers: [AppController],
})
export class AppModule {}
