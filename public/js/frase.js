$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $("#spiner").show
    $.get("http://localhost:3000/frases", trocaFraseAleatoria) //URL errada para simular um problema
    .fail( function(){
        $("#erro").toggle(); //ao falhar mostra a mensagem de erro
    setTimeout(function(){
        $("#erro").toggle()
    }, 3000)
    })
    .always(function(){
        $("#spiner").toggle                    ();
    })
}


    function trocaFraseAleatoria(data){   
       let frase=$(".frase");
       let numeroAleatorio=Math.floor (Math.random() * data.length);
      frase.text(data[numeroAleatorio].texto)
      atualizaTamanhoFrase()
      atualizaTempoInicial(data[numeroAleatorio].tempo)
    }
   