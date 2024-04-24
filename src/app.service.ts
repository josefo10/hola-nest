import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Hola Mundo');
    return 'Hello World!';
  }
}
