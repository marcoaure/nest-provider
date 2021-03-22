import { Injectable } from "@nestjs/common";
export interface RegisterUserInterface {
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  private user = [];

  getHello(): string {
    return "Hello World!";
  }

  registerUser(payload: RegisterUserInterface): RegisterUserInterface {
    this.user.push(payload.name);
    if (payload.age >= 13) {
      this.addToHighSchool(payload);
      return payload;
    }
    this.addToKindergarten(payload);
    return payload;
  }

  getUser() {
    return this.user;
  }

  private addToHighSchool(payload) {
    console.log("adding user to high school " + payload.name);
  }

  private addToKindergarten(payload) {
    console.log("adding to kindergarten " + payload.name);
  }
}
