import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name);
  
  @Get()
  applicationGreeting(): string {
    this.logger.log('Recebendo requisicao de status');
    return this.appService.application();
  }
}
