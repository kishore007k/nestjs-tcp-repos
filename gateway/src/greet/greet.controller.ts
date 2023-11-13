import { Controller, Get } from "@nestjs/common";
import { GreetService } from "./greet.service";
import { Observable } from "rxjs";

@Controller()
export class GreetController {
	constructor(private readonly greetService: GreetService) {}

	@Get()
	getHello(): Promise<Observable<string>> {
		return this.greetService.getHello();
	}

	@Get("/hybrid")
	getMessage(): Promise<Observable<string>> {
		return this.greetService.getMessage();
	}
}
