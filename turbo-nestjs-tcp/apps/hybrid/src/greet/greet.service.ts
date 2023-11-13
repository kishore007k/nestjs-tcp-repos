import { Inject, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class GreetService {
	constructor(@Inject("HYBRID_HELLO") private readonly client: ClientProxy) {}

	async getHello(): Promise<Observable<string>> {
		return await new Promise((resolve, reject) => {
			this.client.send({ cmd: "greet_hybrid" }, {}).subscribe({
				next: (data) => resolve(data),
				error: (err) => reject(err),
				complete: () => resolve(null),
			});
		});
	}

	getMessage(): string {
		return "This is a message sent by the hybrid microservice!";
	}
}
