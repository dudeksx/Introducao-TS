//Funcionam como formas para reaproveitar a estrutura.

//Modificadores de acesso, quem pode acessar um determinado dado de uma classe.
//Public, Private, Protected

//superclass, ou classe principal
class Character {
  private name: string;
  public strength: number;
  protected skill: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  public attack(): void {
    console.log(`Attack with ${this.strength} points`);
  }
}

//essa é uma subclasse da classe Character
class Magician extends Character {
  magicPoints: number;
  constructor(
    name: string,
    strength: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, strength, skill);
    this.magicPoints = magicPoints;
  }
}

const p1 = new Character("Naruto", 10, 98);
const p2 = new Magician("Alanzoka", 8, 30, 100);
console.log(p1);
//p1.name (incorreto pois a propriedade name esta como private)
//p1.
p1.attack();

console.log(p2);
