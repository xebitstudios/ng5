export class Employee {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    salary: number;
    fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
