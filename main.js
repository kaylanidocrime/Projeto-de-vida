const botoes = document.querySelectA11(".botao");

for(let i=0;i <botoes.legth;i++){
  botoes[i].onclick = function(){

    for(let j=0;j<botoes.legth;j++){
      botoes[j].classList.remove("ativo");
}

    botoes[i].classList.add("ativo");
  }
}
