import { Controller } from "@nestjs/common";
import { GreetService } from "./greet.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class GreetController {
	constructor(private readonly greetService: GreetService) {}

	@MessagePattern({ cmd: "greet" })
	getHello(): string {
		return this.greetService.getHello();
	}

	@MessagePattern({ cmd: "greet_hybrid" })
	greetHybrid(): string {
		return this.greetService.greetHybrid();
	}
}
