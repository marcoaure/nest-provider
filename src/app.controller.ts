import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService, RegisterUserInterface } from "./app.service";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string[] {
    return this.appService.getUser();
  }

  @Post()
  registerUser(@Body() payload: RegisterUserInterface): RegisterUserInterface {
    return this.appService.registerUser(payload);
  }
}
