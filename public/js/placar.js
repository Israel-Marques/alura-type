$("#botao-placar").click(function mostraPlacar(){
    $(".placar").stop().slideToggle()   
});

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remo ver").click(removeLinha);

    corpoTabela.append(linha);
    $(".placar").stop().slideToggle()
    scrollPlacar()  

}
function scrollPlacar(){
 let posicaoPlacar=(".placar").offset().top ;  
 $("body").animate({scrollTop: posicaoPlacar + "100px"}, 800)
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    let linha =$(this).parent().parent()
    linha.fadeOut(600);

    setTimeout(()=>{linha.remove()},600)
    
}

function mostraPlacar(){

}