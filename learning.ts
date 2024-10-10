//SETUP THE PROJECT
$ npm i -g @nestjs/cli
$ nest new project-name

The project-name directory will be created, node modules and a few other boilerplate files will be installed, and a src/ directory will be created and populated with several core files.
src
  app.controller.spec.ts
  app.controller.ts
  app.module.ts
  app.service.ts
  main.ts


//main.tsJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

//running the file
$ npm run start
http://localhost:3000/

//Controllers
Controllers are responsible for handling incoming requests and returning responses to the client.
