import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  types: { [key: string]: string[] };

  constructor() {
    this.types = {
      black: ['jerry', 'john'],
      yellow: ['alicia', 'megan'],
      tuxedo: ['tom', 'lester'],
    };
  }

  @Get('black')
  findBlackCats(): string[] {
    // Logic to find all black cats
    return this.types['black'];
  }

  @Get('yellow')
  findWhiteCats(): string[] {
    // Logic to find all white cats
    return this.types['yellow'];
  }

  @Get('tuxedo')
  findTuxedoCats(): string[] {
    // Logic to find all tuxedo cats
    return this.types['tuxedo'];
  }
}
