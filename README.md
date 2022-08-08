# Testes Unitários em Mocha.js

Este repositório tem, por objetivo, a aplicação de testagens simples para fixação da utilização da ferramenta de testagem de aplicações em Javascript **Mocha.js**.

Constam aqui três exercícios básicos retirados do site de Desafios de Código LeetCode. Neles aplico a metodologia de **Testes Unitários**, em comentários há a aplicação de princípios em **TDD**.

Cada um dos exercícios, em `index.js`, consta com os enunciados, porém, relaciono eles aqui também: 

# Enunciados de Exercícios:

* Crie um objeto Triangulo, que receba os tamanhos A, B e C representando o tamanho de cada lado do triangulo com algumas aplicações que podem ser verificadas no comentário (por fazer: implementar função que aplique **Teorema de Herão**.)

* Resolva o exercício que converte números Naturais para números Romanos usando **Objetos**. Neste caso, o exercício é criar uma aplicação que traduza números arábicos para romanos armazenando/utilizando Objetos em JS como **dicionário**.

* Entrar com um nome, idade e sexo de 20 pessoas.
Imprimir o nome se a pessoa for do sexo masculino e tiver mais de 27 anos.

# Utilizando o repositório:

~~~
npm init
npm install mocha
npm install chai
~~~

Depois disso, vale atualizar o `package.json` para que sua aplicação reconheça o arquivo de teste, você pode também no momento de inicialização, `npm init`, atualizar o test p/ **mocha**. 

O `package.json` neste repositório já está direcionado da forma que permite que o código abaixo execute automaticamente as baterias de teste respectivas! No caso:

~~~
"scripts": {
    "test": "mocha 'test/'"
  }
~~~

De forma que o diretório de testes, `test/`, já está linkado como diretório padrão de testagem! Sendo assim, uma vez clonado e iniciado corretamente você pode usar:

~~~
npm test
~~~