function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Gabriel";
    var numeroPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario,numeroPalavras);
    linha.find(".botao-remover").click(removeLinha)

    corpoTabela.append(linha);
}

function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemove = $("<td>");
    
    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("remove_circle");

    link.append(icone);

    colunaRemove.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemove);

    return linha;
}

function removeLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();
}
