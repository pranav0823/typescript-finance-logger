// classes
export class Payments {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} owes £${this.amount} for ${this.details}`;
    }
}
