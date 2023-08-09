/*  -------------------------------------------------------
 *  Bookmarklets as tools for manual tests
 *  By Cesar Nocrato (github.com/acnocrato)  
 *  -------------------------------------------------------
 *  Bookmarklet: cadastroDeProdutos.
 *  Usuário: Vendedor.
 *  -------------------------------------------------------
 *  Função: Preencher campos com dados de um produto ou 
 *  portfolio para completar cadastro do vendedor.
 *  -------------------------------------------------------
 */

javascript: (function(){
    var nomeProduto = 'Produto Teste';
    var idProduto = 'COD123';
    var descricao = 'Produto criado para investigações e testes manuais do Plano de Suporte';
    var especificacao = 'Produto criado para investigações e testes manuais do Plano de Suporte';
    var preco = '15,00';
    var qtdeMinima = '1';
    var qtdeMaxima = '10';
    var comprimento = '15';
    var largura = '15';
    var altura = '15';
    var peso = '0,500';
    var estoqueInicial = '10';

    $("#Titulo").val(nomeProduto);
    $("#IdProduto").val(idProduto);
    $("#Descricao").val(descricao);
    $("#Especificacoes").val(especificacao);
    $("#Preco").val(preco);
    $("#QuantidadeMinima").val(qtdeMinima);
    $("#QuantidadeMaxima").val(qtdeMaxima);
    $("#Comprimento").val(comprimento);
    $("#Largura").val(largura);
    $("#Altura").val(altura);
    $("#Peso").val(peso);
    $("#EstoqueInicial").val(estoqueInicial);
    $("#AtivarEntregaPropria").prop('checked', true);
    $("#AtivarMelhorEnvio").prop('checked', true);
    $("#AtivarRetiradaNoLocal").prop('checked', true);
})()

/*  -------------------------------------------------------
 *  Acesse a planilha de suporte no repositório 
 *  para personalizar as variáveis sem a necessidade de 
 *  um editor de código.
 *  -------------------------------------------------------
 */

