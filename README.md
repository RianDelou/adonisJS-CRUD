<h1>Objetivo: Desenvolver o modelo lógico / físico, pegando como base o modelo conceitual de: livraria-escola-online. Além disso, iremos fazer mais 7 perguntas que agregem dinheiro ao négocio + 2 Easter eggs</h1>

<h2>
  <p>Estudantes: Humberto Moraes, Lucca Milano, Rian Delou, Victor Souza</p>
  <p>Tema: livraria-escola-online</p>
</h2>

<h3> 7 perguntas baseadas no SGBD que agregam valor ao negócio</h3>  
  <ol>
    <li>Qual é o total de vendas realizadas em determinado período mensal?</li>
    <br>
    <p>Com essa informação, podemos ver qual mês que temos mais lucro, para assim investir em mais produtos para serem adicionados na loja virtual, mais acessórios temáticos/livros por exemplo. Com isso, conseguimos investir em mais produto e ter um lucro garantido no mês.</p>
    <br>
    <li>Quais são os produtos mais vendidos por categoria e em que quantidade?</li>
    <br>
    <p>Com isso, conseguimos saber qual é a categoria mais vendida (curso, ebook, acessorio tematico) + a sua quantidade. Desse modo, com esses valores, conseguimos investir nessa determinada categoria para potencializar a sua venda. Além disso, a quantidade total ajudaria no controle do investimento.</p>
    <br>
    <li>Qual é a satisfação dos clientes com base na média das avaliações dos produtos?</li>
    <br>
    <p>Com essa informação, caso a avaliação esteja abaixo da média, iremos analisar os produtos colocados na loja virtual para melhorar a sua qualidade e consequentemente a satisfação do cliente. Com isso, conseguimos uma boa visão sobre a nossa loja, aumentando a possibilidade de uma divulgação e de lucro.</p>
    <br>
    <li>Quais são os clientes que mais compraram nos últimos seis meses?</li>
    <br>
    <p>Com isso, consegumos ter o nome de todos os clientes que são frequentes em nossa loja, para assim notificá-los de algum produto novo que o agrade.</p>
    <br>
    <li>Qual é o desconto mais utilizado nas vendas totais da loja?</li>
    <br>
    <p>Com essa informação, conseguimos pegar o desconto mais utilizado e fazer ofertas cabiveis para ele. Para assim, os clientes usarem esse cupom com mais frequência, aumentando a possibilidade de lucro, além de deixar os clientes satisfeitos com a nossa loja.</p>
    <br>
    <li>Quais foram as 10 maiores notas da escola por semestre em cada disciplina?</li>
    <br>
    <p>Com essa informação, conseguimos pegar esses estudantes e fazer uma propaganda da nossa escola. Pois, além de incentivar os alunos nos estudos para aparecerem como os estudantes com melhores notas na propaganda da escola, iremos atrair os reesponsaveis que querem colocar o seu filho(a) em um escola que tem um ensino adequado, aumentando as chances de lucro na instituição</p>
    <br>
    <li>O que o(a) aluno(a) que mais alugou livros no mês na biblioteca pode ganhar? </li>
    <br>
    <p> Com isso, conseguimos fazer o estudante adquirir um cupom exclusivo da nossa loja, que deve garantir um desconto agradável, mas que faça com que a gente incentive os estudantes a alugarem mais livros, aumentando o lucro da instituição</p>
  </ol>

   <h3>EASTER EGG</h3>
   <p>A nossa equipe pensou em 2 easter eggs:</p>
   <ol>
     <li> Caso o usuário complete 5 cursos, ele ganha um cupom exclusivo de 15% de desconto em qualquer produto da loja. O nome do cupom seria: EstudanteMirim. Apenas como uma recompensa que a loja não iria falar sobre, o cliente descobriria apenas completando os cursos.</li>
     <li> Caso o usuário compre 8 acessórios / Ebooks, ganhe 1 de brinde. Isso também seria um cupom que daria 100% de desconto no acessório ou Ebooks. O nome do cupom seria: clienteFiel. Isso também seria uma recompensa que a loja não iria falar sobre, o cliente descobriria apenas comprando</li>
   </ol>

<h3>Resumo do projeto</h3>
  <p>Antes de começar a desenvolver o modelo lógico e físico desse projeto, a nossa equipe juntou 3 modelos conceituais já feitos: biblioteca, escola, loja virtual. Com isso, tivemos que refatorar toda a lógica desses 3 modelos, para que a lógica entre eles fizessem sentido, além de adicionarmos novas entidades para o melhor entendimento do projeto. Desse modo, a base do projeto já tinha sido finalizada: uma organização que possui-> uma loja virtual (na qual vende: cursos, livros e acessórios temáticos) e uma biblioteca dentro da escola (escola-livraria online)</p>
  <p>Após isso, a nossa equipe gerou o modelo lógico e físico do projeto, que seriam respectivamente: modelo relacional, DDL / <strong>DML</strong>. O DDL foi gerado automaticamente pelo brModelo, já o DML não é gerado automaticamente. A lógica do DML foi a seguinte:</p>
  <ol>
    <li>INSERT</li>
    <p>Inserimos valores em 5 diferentes tabelas já criadas: cliente, produto, pedido, avaliação e aluno. cada uma contendo 3 tuplas com valores aleatorios, apenas para simulação.</p>
    <li>UPDATE</li>
    <p>A nossa equipe fez 5 updates em determinados valores já inseridos</p>
    <li>DELETE</li>
    <p>A nossa equipe deletou 3 registros de acordo com o ID de determinada tabela, nas quais foram: cliente (id 3), pedido (id 1), produto (id 3). Todos os dados com esse ID foram deletados. </p>
  </ol>
