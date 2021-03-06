import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function start() {
    const server = await NestFactory.create(AppModule);
    server.enableCors();
    await server.listen(3000);
}

start();