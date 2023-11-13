import { GreetService } from "./greet.service";
import { Observable } from "rxjs";
export declare class GreetController {
    private readonly greetService;
    constructor(greetService: GreetService);
    getHello(): Promise<Observable<string>>;
    getMessage(): Promise<Observable<string>>;
}
