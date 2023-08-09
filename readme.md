# Bookmarklets para auxiliar testes manuais

Este projeto consiste em uma coleção de bookmarklets que preenchem automaticamente campos pré-definidos em várias etapas do cadastro de usuários. Foram desenvolvidos para otimizar a criação de usuários de teste, permitindo dedicar mais tempo aos testes manuais, investigação de chamados e report de bugs que envolvem as ações do usuário em uma base de clientes de Plataformas de Marketplace White Label.


## O que são Bookmarklets?

Bookmarklets são pequenos códigos JavaScript salvos como favoritos no navegador. No cenário de preencher campos de formulários, ao clicar no bookmarklet, campos são preenchidos automaticamente com dados pré-definidos.

#### Demonstração de Bookmarklet de cadastro de produtos:

![image](/imagens-readme/gif-pratica02.gif)

O script automatizou o preenchimento dos campos escritos, me permitindo ganhar tempo e fazer apenas o upload da imagem do produto e seleção da categoria na lista suspensa.
###### Observação: O código fonte dos Bookmarklets presentes neste repositório foram adaptados por fictícios para segurança das plataformas.


## Planejamento do Projeto

### 1. Definição de User Story
**FUNCIONALIDADE**: Bookmarklets de preenchimento automático de campo do cadastro\
<p>

**COMO** Analista de Suporte estou cadastrando um usuário de testes que dependo para validar um cenário de erro relatado por um cliente\
**QUERO** completar rapidamente o cadastro de usuário  
**PARA** otimizar meu tempo e ser mais eficiente na investigação do chamado.

### 2. Escrita em Gherkin dos cenários de preenchimento automático
#### 2.1.1. Cenário: Cadastro de vendedor 
**DADO** que estou na página de cadastro de vendedor\
**QUANDO** clico no Bookmarklet de Cadastro de Vendedor Teste\
**ENTÃO**  o script preenche automaticamente os campos obrigatórios: nome, telefone, e-mail e senha

#### 2.1.2. Cenário: Cadastro de comprador
**DADO** que estou na página de cadastro de comprador\
**QUANDO** clico no Bookmarklet de Cadastro de Comprador Teste\
**ENTÃO**  o script preenche automaticamente os campos obrigatórios: nome, sobrenome, telefone, e-mail, senha e repetir senha.

#### 2.1.3. Cenário: Completar dados pessoais 
**DADO** que estou na página de Completar Dados Pessoais para Vendedor ou Comprador\
**QUANDO** clico no Bookmarklet de Completar Dados Pessoais\ 
**ENTÃO**  o script preenche automaticamente os campos obrigatórios: documento (rg/cpf), data de nascimento, nome da loja (vendedor), descrição (vendedor), whatsapp e informações adicionais (vendedor). 

#### 2.1.4. Cenário: Cadastro de dados bancários 
**DADO** que estou na página de Cadastro de Dados Bancários\
**QUANDO** clico no Bookmarklet de Cadastro de Dados Bancários Teste\
**ENTÃO**  o script preenche automaticamente os campos obrigatórios: nome do titular, documento do titular, instituição bancária, tipo de conta, agência, dígito da agência, conta e dígito da conta.


#### 2.1.5. Cenário: Cadastro de produto 
**DADO** que estou na página de Cadastro de Produto\
**QUANDO** clico no Bookmarklet de Cadastro de Produto Teste\
**ENTÃO**  o script preenche automaticamente os campos obrigatórios: nome do produto, id do produto, descrição, especificação, preço, quantidade mínima, quantidade máxima, comprimento, largura, altura, peso e estoque inicial. 

### 3.Definição de ferramentas

* **Bookmarklets:** Programas em JavaScript que são executados diretamente da barra de favoritos do navegador;
* **JavaScript:** Escrita dos bookmarklets e uso da biblioteca JQuery para construção dos scripts;
* **Google Chrome:** DevTools para inspecionar elementos e barras de favoritos do navegador para executar os bookmarklets;
* **Planilhas Google:** Documentação e manipulação de variáveis dos bookmarklets sem a necessidade de um editor de código.

## Desenvolvimento do Projeto

### 4. Levantamento
 
* Uso do Chrome DevTools para identificar os elementos responsáveis por cada campo de preenchimento em cada página;
* Uso de Planilha Google para documentar o nome de cada campo de preenchimento identificado.          
  
### 5 Escorpo dos Bookmarklets

* Criação de arquivos JavaScript para escrever os Bookmarklets responsáveis pelo preenchimento automático de cada etapa do cadastro.
~~~javascript
// Estrutura dos Bookmarklets:
    
javascript:(function(){ "código com os dados que serão preenchidos" }()
~~~
*  No bookmarklet de cada etapa, foram declaradas variáveis referentes aos nomes dos campos identificados no etapa de levantamento.
*  Por meio do JQuery, os elementos HTML identificados pelo Id (#) serão manipulados para receber os valores das variáveis para o preenchimento do campos.
~~~javascript
// Exemplo do Bookmarklet de registro de vendedor

javascript:(function(){ 

    // Variáveis com as informações que serão preenchidas
    var nome = 'João Avelar';
    var telefone = '77999999999';
    var emailVendedor = 'joao_vendedor@teste.com';
    var senha = 'P@lm3irAs';

    // Id (#) com os elementos dos campos que serão preenchidos automaticamente
    $('#Nome').val(nome);
    $('#Telefone').val(telefone);
    $('#Email').val(emailVendedor);
    $('#Senha').val(senha);
    $('#ConfirmarSenha').val(senha);

}()
~~~ 
### 6 Estruturação da Planilha de Suporte
Como este projeto foi desenvolvido para ser compartilhado com toda a equipe que estava envolvida nos testes manuais, era necessário encontrar uma forma de personalizar o valor das variáveis com as informações dos usuários que fossem utilizar. 

<p>Para que os usuários não tivessem que alterar o valor das variáveis manualmente por meio de um editor de código, foi desenvolvida uma Planilha de Suporte que ao preenche-la, o usuário consegueriam personalizar quais informações seriam preenchidas automaticamente pelo Bookmarklet nos campos do cadastro.

<p>Para personalizar as variáveis do Bookmarklet, bastava que o usuário preenchesse as informações da coluna indicada na tabela de personalização dos campos:

###### Exemplo simplificado da tabela de personalização dos campos:

| Campo | Exemplo de preenchimento | Preencha suas informações aqui |
|- | - | - |
| Nome | João Avelar | César Nocrato |
| Telefone | 77999999999 | 85999999999 |
| E-mail do Vendedor | joao@teste.com | cesar_vendedor@teste.com |
| Senha | P@lm3irAs | F0rt4l3z@ |

<p>A coluna que é preenchida no exemplo acima tem suas células concatenadas em uma outra tabela final que atribui as informações preenchidas diretamente no valor das variaveis presentes no Bookmarklet. Após o preenchimento, bastava que o usuário copiasse o resultado final concatenado e assim, teria o script do Bookmarklet pronto para ser usado com suas informações personalizadas.

###### Exemplo simplificado da tabela com o resultado final após a personalização dos campos:

| Bookmarklet | Etapa | Observações | Copie aqui o Bookmarklet com sua personalização |
| - | - | - | - |
| Registro de vendedor | 1º página do cadastro | - | ```javascript:(function() { var nome = 'César Nocrato'; var telefone = '85999999999'; var emailVendedor = 'cesar_vendedor@teste.com'; var senha = 'F0rt4l3z@'; $('#Termos').prop('checked', true); $('#PoliticaDePrivacidade').prop('checked', true); $('#Nome').val(nome); $('#Telefone').val(telefone); $('#Email').val(emailVendedor); $('#Senha').val(senha); $('#ConfirmarSenha').val(senha);})()```|

#### Fórmula da Planilha Google responsávelpor concatenar o resultado final da coluna "Copie aqui o Bookmarklet com suas informações":

```=CONCATENATE("javascript:(function() { var nome = '";C2;"'; var telefone = '";C3;"'; var emailVendedor = '";C4;"'; var senha = '";C5;"'; $('#Termos').prop('checked', true); $('#PoliticaDePrivacidade').prop('checked', true); $('#Nome').val(nome); $('#Telefone').val(telefone); $('#Email').val(emailVendedor); $('#Senha').val(senha); $('#ConfirmarSenha').val(senha);})()")```
    
## Configuração e execução dos Bookmarklets 

1. Primeiramente é necessário ter acesso ao Google Chrome e as Plataformas de Marketplace Whitelabel para qual a coleção de Bookmarklets foi desenvolvida.
2. Acesse a **Planilha de Suporte** presente no repositório e personalize as informações que serão preenchidas pelos Bookmarklets através da tabela **Personalização**.<p>![image](/imagens-readme/img-planilha01.png)

3. Após personalizar, verifique a tabela **Bookmarklets** e leia as observações de cada script para saber suas funções e limitações.<p>![image](/imagens-readme/img-planilha02.png)

4. Tendo ciência das observações, os **Bookmarklets** já estão prontos para serem configurados, portanto, basta copiar um deles.<p>![image](/imagens-readme/img-planilha03.png)


5. Abra o seu navegador **Google Chrome**, adicione uma página qualquer ao favorito para abrir o menu ou então pressione "Ctrl + D" e clique em "Mais" para personalizá-lo.<p>![image](/imagens-readme/img-chrome01.png)

6. Dentro da personalização do favorito, escreva no campo "Nome" a função do Bookmarklet e no campo "URL" cole o script copiado da planilha de suporte no passo 4.<p>![image](/imagens-readme/img-chrome02.png)

7. Quando configurado, basta seguir o passo acima para concluir os outros e se preferir, você pode criar uma pasta de favoritos para organizar todos os seus Bookmarklets.<p>![image](/imagens-readme/img-chrome03.png)

8. Com a configuração concluída, basta acessar as páginas de cadastro e começar utilizá-los.

9. Clique no Bookmarklet e ele preencherá automaticamente os campos da etapa do cadastro que foi programado para completar.<p>![image](/imagens-readme/gif-pratica01.gif)

**Observação: Da mesma forma que estes campos foram preenchidos na plataforma desta imagem acima, eles seriam preenchidos nas outras que fazem parte da mesma base clientes. E assim, a criação de usuários para testes manuais em cada plataforma foi otimizado.**


## Considerações
<p>Agradeço a todos que tiraram um tempo para conhecer o projeto, ele foi fundamental para ajudar a otimizar testes manuais não só pra mim, mas também para outros membros do time de Suporte e Implantação.

Por meio dele, pude práticar a escrita user story, escrita de cenários de testes, automação de cenários de testes, lógica de programação com Javascript, HTML5 e O

Caso você tenha visto algo que eu possa melhorar neste projeto e queira compartilhar ou então esteja pensando em alguma forma de implementar algo parecido na sua rotina, fico à disposição para conversamos. :)








