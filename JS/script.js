alert("Esse é um alerta")

//Declaração de Variáveis

        // var nome = "Eduardo";
        // nome = "Porto"
        // console.log(nome);
//a variável VAR, pode ser modificada sempre que necessário e tem escopo global e local.


//a variável LET, pode ser modificada sempre que necessário e tem escopo local.
        // let idade = 18;
        // idade = 19;
        // console.log(idade);

//A variável CONST, não pode ser modificada após sua criação, é somente para leitura e é obrigatório ter um valor inicial, escopo local de bloco
        // const constante = "letícia"
        // constante = "Ramos"
        // console.log(constante)

//ESCOPO trata da visibilidade da variável, se ela for declarada fora de um bloco (if,for etc) e for de escopo global ela pode ser chamada em qualquer lugar do código, se for escopo local ela será chamada apenas dentro do bloco que ela for declarada.
        // var escopoGlobal = "global";
        // console.log(escopoGlobal);

        // function escopoLocal() {
        //     let escopoLocalInterno = "local";
        //     console.log(escopoLocalInterno)
        // }

        // console.log(escopoLocalInterno);
        // escopoLocal();

        // let array = ["Leticia", "Eduardo"];
        // console.log(array[0])

//Formas de manipular o array

        //forEach() -> itera o array;
        //push() -> adiciona um item ao final do array;
        //pop() -> remove item no final do array;
        //shift() -> remove item no início do array;
        //unshift() -> adiciona um item no início do array;
        //indexOf() -> retorna o índice de um objeto/valor;
        //splice() -> remove ou substitui um item pelo índice;
        //slice() -> retorna uma parte de um array;


//Objetos são variáveis que possuem valores e propriedades declaradas com {}.
        // let eduardo = {
        //     nome:"Eduardo",
        //     idade:18,
        //     tamanho:1.65
        // }

        // var nome = eduardo.nome;
        // console.log(nome)

        // var age = eduardo.idade
        // console.log(age)


//Estruturas condicionais (if, else, try)
        var jogador1 = 1;
        var jogador2 = 0;
        var placar;

        // if (jogador1 > 0) {
        //     console.log("Jogador 1 marcou ponto!")
        // } else if (Jogador2 > 0) {
        //     console.log("Jogador 2 marcou ponto!")
        // } else {
        //     console.log("Ninguém marcou ponto")
        // }

//if ternário 
        // jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") :
        // console.log("Jogadores Inválidos");
        // if (jogador1 > 0) {
        //     console.log("Jogador 1 marcou ponto!")
        // } else if (jogador2 > 0) {
        //     console.log("Jogador 2 marcou ponto!")
        // } else {
        //     console.log("Ninguém marcou ponto")
        // }

//switch/case 
        // switch (placar) {
        //     case placar = jogador1 > jogador2:
        //         console.log("Jogador 1 Ganhou!");
        //         break;
        //     case placar = jogador2 > jogador1:
        //         console.log("Jogador 2 ganhou!");
        //         break;
        //     default:
        //         console.log("Ninguém ganhou!")
        // }

