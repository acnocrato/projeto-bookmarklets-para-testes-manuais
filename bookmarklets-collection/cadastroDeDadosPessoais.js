/*  -------------------------------------------------------
 *  Bookmarklets as tools for manual tests
 *  By Cesar Nocrato (github.com/acnocrato)  
 *  -------------------------------------------------------
 *  Bookmarklet: cadastroDeDadosPessoais.
 *  Usuário: Vendedor
 *  Usuário: Comprador
 *  -------------------------------------------------------
 *  Função: Preencher dados pessoais do usuário vendedor
 *  e comprador, pois os elementos de cadastro são os 
 *  mesmos para ambos.
 *  -------------------------------------------------------
 */

javascript: (function () {

    var documento = '1234567890';
    var nascimento = '17/06/1995';
    var nomeDaLoja = 'Loja de Testes';
    var sobreMim = 'Usuário para investigações e testes manuais do plano de Suporte';
    var endereco = 'Rua, número, bairro, cidade - estado, cep';
    var telefone = '77999999999';
    var informacaoAdicional = 'n/a';

    $('#NumeroDeDocumento').val(documento);
    $('#DataDeNascimento').val(nascimento);
    $('#NomeComercial').val(nomeDaLoja);
    $('#SobreMim').val(sobreMim);
    $('#InformacoesAdicionais1').val(informacaoAdicional);
    $('#InformacoesAdicionais2').val(informacaoAdicional);
    $('#Endereco').val(endereco);
    $('#NumeroWhatsApp').val(telefone);
    
})()

/*  -------------------------------------------------------
 *  Acesse a planilha de suporte no repositório 
 *  para personalizar as variáveis sem a necessidade de 
 *  um editor de código.
 *  -------------------------------------------------------
 */
