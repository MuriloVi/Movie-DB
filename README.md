# Movie Database

Este é o projeto concluído fruto da realização do desafio proposto pela Cubos, em concorrência à vaga de Estágio.
Projeto realizado utilizando React JS, e suas features mais modernas.

#### 1.0 .... Inicializar Projeto
#### 2.0 .... Estrutura do Projeto

## Inicializar Projeto

Para inicialização do projeto é necessário obter este repositório através de um download via github, ou simplesmante executando um git clone no terminal do seu sistema operacional<br/>
<strong> !Atenção! </strong>, é necessário ter o Node instalado em sua máquina para fazê-lo funcionar.

### scripts

Antes de mais nada é necessário rodar o install, pois o repositório do github não inclui os node_modules. Logo:

npm install 

ou

yarn install

Eu utilizo o Yarn, mas utlize o gerenciador de pacotes de sua preferência.<br/>
Após a adição do node_modules, basta rodar o script de start:

npm start

ou 

yarn start


### Vizualizando o resultado

No seu navegador, acesse [http://localhost:3000](http://localhost:3000).<br/>
Pronto, fique à vontade para buscar qualquer filme e obter suas informações :)
<br/>
<br/>
<hr/>


## Estrutura do Projeto
<br/>
<br/>

### Components 

Pasta com os componentes utilizados no web app.

### Card - Um Card que recebe as informações via props de cada filme da busca .
### HeaderTop - O Header do web app, disponível na Homepage e na Filmpage
### Pagebar - Uma barra posicionada ao fim da página que permite a navegação entre as páginas dos resultados da busca
### DefaultHome - Componente que aparece na Homepage caso não haja a realização de buscas. Ele mostra os filmes mais populares atualmente.
<br/>
<br/>

### Containers

Pasta com as pages utilizadas no web app.

### Homepage - Esta é a página inicial, aqui você terá acesso à todas as buscas que fizer utilizando a barra de pesquisa, retornando os componentes Cards via método map.
### Filmpage -  Já esta página é a que exibe dados mais específicos sobre cada filme pesquisado. Ela recebe e exibe as informações dos filmes individualmente.
<br/>
<br/>

### Helpers

Pasta com funções que auxiliam no tratamento de alguns dados recebidos da API, para sua correta exibição no front.
<br/>
<br/>

### Services 

Pasta com a configuração padrão do axios para a realização das buscas(querys).

# Fim
Essas são as instruções e os detalhes do projeto<br/>
Espero poder integrar a equipe da Cubos
## Obrigado 
