import { Controller, Get } from "@nestjs/common";
import { GreetService } from "./greet.service";
import { Observable } from "rxjs";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class GreetController {
	constructor(private readonly greetService: GreetService) {}

	@Get()
	getHello(): Promise<Observable<string>> {
		return this.greetService.getHello();
	}

	@MessagePattern({ cmd: "send_message" })
	getMessage(): string {
		return this.greetService.getMessage();
	}
}
