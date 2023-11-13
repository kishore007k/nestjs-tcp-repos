import { Injectable } from "@nestjs/common";

@Injectable()
export class GreetService {
	getHello(): string {
		return "Hello World!";
	}

	greetHybrid(): string {
		return "Welcome to Hybrid Microservice🤗";
	}
}
