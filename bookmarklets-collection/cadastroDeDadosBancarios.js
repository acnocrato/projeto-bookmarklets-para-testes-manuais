/*  -------------------------------------------------------
 *  Bookmarklets as tools for manual tests
 *  By Cesar Nocrato (github.com/acnocrato)  
 *  -------------------------------------------------------
 *  Bookmarklet: cadastroDeDadosBancarios.
 *  Usuário: Vendedor.
 *  -------------------------------------------------------
 *  Função: Preencher dados bancários do vendedor para
 *  receber o valor das vendas.
 *  -------------------------------------------------------
 */

javascript:(function(){
    var nomeDoTitular = 'Jonh Doe';
    var documentoDoTitular = '99999999999';
    var instituicaoBancaria = '1';
    var tipoDeConta = '0';
    var agencia = '0001';
    var digitoAgencia = '';
    var conta = '12345678';
    var digitoConta = '9';
    
    $('#NomeDoTitular').val(nomeDoTitular);
    $('#DocmentoDoTitular').val(documentoDoTitular);
    $('#InstituicaoBancaria').val(instituicaoBancaria);
    $('#TipoDeConta').val(tipoDeConta);
    $('#Agencia').val(agencia);
    $('#DigitoDaAgencia').val(digitoAgencia);
    $('#Conta').val(conta);
    $('#DigitoDaConta').val(digitoConta);   
    $('#TermosDoGateway1').prop('checked', true);
    $('#TermosDoGateway2').prop('checked', true);     
    $('#BotaoSalvar').click();
})()

/*  -------------------------------------------------------
 *  Acesse a planilha de suporte no repositório 
 *  para personalizar as variáveis sem a necessidade de 
 *  um editor de código.
 *  -------------------------------------------------------
 */



