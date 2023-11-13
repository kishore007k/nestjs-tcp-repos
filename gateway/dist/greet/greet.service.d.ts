import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";
export declare class GreetService {
    private readonly client;
    private readonly hybridClient;
    constructor(client: ClientProxy, hybridClient: ClientProxy);
    getHello(): Promise<Observable<string>>;
    getMessage(): Promise<Observable<string>>;
}
