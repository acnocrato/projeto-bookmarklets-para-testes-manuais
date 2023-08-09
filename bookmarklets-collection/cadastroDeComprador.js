/*  -------------------------------------------------------
 *  Bookmarklets as tools for manual tests
 *  By Cesar Nocrato (github.com/acnocrato)  
 *  -------------------------------------------------------
 *  Bookmarklet: cadastroDeComprador.
 *  Usuário: Comprador.  
 *  -------------------------------------------------------
 *  Função: Preencher dados de Login para cadastrar usuário
 *  comprador.
 *  -------------------------------------------------------
 */

javascript: (function () {

    var nome = 'João Avelar';
    var identificador = 'Comprador'
    var telefone = '85999999999';
    var emailComprador = 'joao_comprador@email.com';
    var senha = 'P@lm3irAs';

    $('#Termos').prop('checked', true);
    $('#PoliticaDePrivacidade').prop('checked', true);
    $('#Nome').val(nome);
    $('#Sobrenome').val(identificador);
    $('#Telefone').val(telefone);
    $('#Email').val(emailComprador);
    $('#Senha').val(senha);
    $('#ConfirmarSenha').val(senha);
    $('button[data-label="SAVE_CHANGES_BUTTON"]').click();

})()

/*  -------------------------------------------------------
 *  Acesse a planilha de suporte no repositório 
 *  para personalizar as variáveis sem a necessidade de 
 *  um editor de código.
 *  -------------------------------------------------------
 */


