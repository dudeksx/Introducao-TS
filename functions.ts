function addNumber(x: number, y: number): number {
  return x + y;
}

function addToHello(name: string): string {
  return `Hello, ${name}`;
}

function CallToPhone(phone: number | string): number | string {
  return phone;
}

async function getDatabase(id: number): Promise<number | string> {
  return "Eduardo";
}

let soma: number = addNumber(4, 7);

console.log(soma);
console.log(addToHello("Eduardo"));
console.log(CallToPhone("111313311"));
