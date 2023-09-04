//interfaces (type x interface).  Type e utilizado para tipar um conjunto ou objeto, a interface trabalha mais com classes.
type robot = {
  id: number | string;
  name: string;
};

interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}

const bot: robot = {
  id: "1",
  name: "robo",
};
const bot2: robot2 = {
  id: 1,
  name: "robo",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  },
};

console.log(bot);
console.log(bot2);

//interfaces funcionam como contratos para as classes
class Robo implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return "Hello";
  }
}

const p = new Robo(1, "ZeroBot");
console.log(p.sayHello());
