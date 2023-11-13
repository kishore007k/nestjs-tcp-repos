import { GreetService } from "./greet.service";
export declare class GreetController {
    private readonly greetService;
    constructor(greetService: GreetService);
    getHello(): string;
    greetHybrid(): string;
}
