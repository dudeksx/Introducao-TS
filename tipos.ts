//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Eduardo";
let idade: number = 18;
let altura: number = 1.75;

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = "Edu";

//objeto - sem previsbibilidade
let produto: object = {
  name: "eduardo",
  Country: "brazil",
  age: 18,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "tenis",
  preco: 89.99,
  unidades: 5,
};

//** ARRAYS */

let dados: string[] = ["Eduardo", "Leticia", "Mauro"];
let dados2: Array<string> = ["Eduardo", "Leticia", "Mauro"];

let infos: (string | number)[] = [18, "Eduardo"];

//tuplas são arrays que exigem que a ordem das informações seja seguida

let boleto: [string, number, number] = ["agua conta", 199.9, 3195751351];

//métodos de arrays do TypeScript são os mesmos do JS.
dados.pop();

//datas
let aniversario: Date = new Date("2023-04-09 10:30");
console.log(aniversario.toString);
