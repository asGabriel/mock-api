import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe(),
  );

  const logger = new Logger("mock-api");

  const config = new DocumentBuilder()
    .setTitle('Documentation - mock-api')
    .setVersion('1.0')
    .addTag('client')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = process.env.PORT
  await app.listen(PORT, () => {
    logger.verbose(`[BACK-END] IS RUNNING AT {http://localhost:${PORT}}`)
    logger.verbose(`[DOCUMENTATION] AT {http://localhost:${PORT}/docs}`)
  });
}
bootstrap();
