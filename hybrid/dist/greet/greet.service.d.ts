import { Observable } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";
export declare class GreetService {
    private readonly client;
    constructor(client: ClientProxy);
    getHello(): Promise<Observable<string>>;
    getMessage(): string;
}
