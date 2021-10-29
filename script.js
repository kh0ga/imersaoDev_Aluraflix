
var listaImagens = [];

function adicionarImagem(){

  var inputImagem = document.getElementById('imagem').value;
  var inputTitulo = document.getElementById('inputTituloImagem').value;
  var imagem = {};

  imagem.url = inputImagem;
  imagem.titulo = inputTitulo;

  listaImagens.push(imagem)

  exibirNaTela();

  limparCampos();


}

function excluirImagem(){
  
  var indiceExcluido = document.getElementById('inputExcluir').value;
  

  listaImagens.splice(indiceExcluido,1);
  
  exibirNaTela();
  limparCampos();

}

function exibirNaTela(){

  var listaImagem= document.getElementById('listaImagem');
  var blocoDeCodigo = '';

  for(var i = 0; i < listaImagens.length; i++){
 
    blocoDeCodigo += '<div class="imagem"><a href="' + listaImagens[i].url + '"target="_blank"> <img src=' + listaImagens[i].url + '></a>';
    blocoDeCodigo += '<div class="indice">' + i + '</div>';
    blocoDeCodigo += '<p class="titulo-imagem">' + listaImagens[i].titulo + '</p></div>';

   }
 
   listaImagem.innerHTML = blocoDeCodigo;

}

function mostrarBotao(){

  let sectionExcluir = document.getElementById('sectionExcluir');

  if (sectionExcluir.style.display == 'flex') {

    sectionExcluir.style.display = "none";
    
  } else{

    sectionExcluir.style.display = "flex";

  }

  console.log('apertou');
}

function limparCampos(){

  document.getElementById('imagem').value = "";
  document.getElementById('inputTituloImagem').value = "";
  document.getElementById('inputExcluir').value = "";


}
