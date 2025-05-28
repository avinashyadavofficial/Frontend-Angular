class User {
  private id: number;
  private name: string;
  private email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName(): string {
    return this.name;
  }
  setName(newName: string): void {
    this.name = newName;
  }
  getEmail(): string {
    return this.email;
  }
  setEmail(newEmail: string): void {
    this.email = newEmail;
  }
  displayInfo(): string {
    return `User [ID: ${this.id}, Name: ${this.name}, Email: ${this.email}]`;
  }
}
const user = new User(1, "Avi", "avi@ge.com");
console.log(user.displayInfo());
user.setName("Avinash");
console.log(user.getName());
