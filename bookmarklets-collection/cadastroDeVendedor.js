/*  -------------------------------------------------------
 *  Bookmarklets as tools for manual tests
 *  By Cesar Nocrato (github.com/acnocrato)  
 *  -------------------------------------------------------
 *  Bookmarklet: cadastroDeVendedor.
 *  Usuário: Vendedor.
 *  -------------------------------------------------------
 *  Função: Preencher dados de Login para cadastrar usuário
 *  vendedor.
 *  -------------------------------------------------------
 */

javascript:	(function() {

    var nome = "Joao";
    var telefone = "77999999999";
    var emailVendedor = "joao_vendedor@email.com";
    var senha = "P@lm3irAs";

    $('#Termos').prop('checked', true);
    $('#PolicitaDePrivacidade').prop('checked', true);
    $('#Nome').val(nome);
    $('#Telefone').val(telefone);
    $('#Email').val(emailVendedor);
    $('#Senha').val(senha);
    $('#ConfirmarSenha').val(senha);
    $('button[data-label="SAVE_CHANGES_BUTTON"]').click();

}) ()

/*  -------------------------------------------------------
 *  Acesse a planilha de suporte no repositório 
 *  para personalizar as variáveis sem a necessidade de 
 *  um editor de código.
 *  -------------------------------------------------------
 */





