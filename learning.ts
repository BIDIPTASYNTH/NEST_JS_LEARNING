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
  Controller are building blocks of Nest js
//to generate controller 
nest g controller dog

//Basic controller file
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('true')
  getStart(@Body body, @Params('id') id): string {
    //can be used to access body and params from the methos itself, just a demo
    return 'Starting...';
  }
}
//here getStart() and getHello() is a method
//It provides access to the full Request object (from Express), allowing you to inspect headers, query parameters, body data, cookies, and more.
//request objecte
  @Get('true')
  getStart(@Req() request: Request): string {
    console.log(request);
    return 'Starting...';
  }


//Route wildcards#
Pattern based routes are supported as well. For instance, the asterisk is used as a wildcard, and will match any combination of characters.
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
The route path 'ab*cd' can match different URLs like abcd, ab_cd, abecd, and more. Characters like ?, +, *, and () in a route path work 
similarly to how they do in regular expressions. The hyphen (-) and the dot (.) are treated as normal characters and 
are not special symbols in this case.

//Status code
As mentioned, the response status code is always 200 by default, except for POST requests which are 201. We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level.

@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}



//Providers
It contains shared logic through the application using injector
In a class having injectable decorator can be injected in a constructor of another class
