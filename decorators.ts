//os decorators servem para guardar uma ação na memória de uma classe

function ExibirNome(target: any) {
  console.log(target);
}

@ExibirNome
class funcionario {}
