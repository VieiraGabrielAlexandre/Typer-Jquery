var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro(); 
    $("#botao-reiniciar").click(reiniciaJogo);
    }
);

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroPalavras);
}

function inicializaContadores(){
    campo.on("input", function(){
    var conteudo = campo.val();
    var quantidadePalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(quantidadePalavras);
    var quantidadeCaracteres = conteudo.length;
    $("#contador-caracteres").text(quantidadeCaracteres);   
    });
}

function inicializaCronometro(){
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        $("#botao-reiniciar").attr("disabled",true);
        var cronometroId = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante <= 0){
                clearInterval(cronometroId);
                $("#botao-reiniciar").attr("disabled",false);
            }
        },1000);
    });
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
};