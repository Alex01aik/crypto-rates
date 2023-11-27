import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  test(): string {
    return `test${process.env.BASE_CURRENCY}`;
  }
}
