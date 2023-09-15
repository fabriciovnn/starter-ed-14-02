-- LISTAR TUDO DAS TABELAS
/*
 * 
    select coluna1, coluna2, coluna3 
    from tabela

*/
select p.* from produtos p;
select u.* from usuarios u;
select c.* from compras c;


-- LISTAR TUDO DA TABELA ORDENANDO PELO NOME
-- [A-Z] ORDEM CRESCENTE
select p.* 
from produtos p 
order by p.nome
asc;

-- [Z-A] ORDEM DECRESCENTE
select p.* 
from produtos p 
order by p.nome
desc;


-- LISTAR TUDO DA TABELA PRODUTOS ORDENANDO PELO PREÇO
-- ORDEM CRESCENTE
select p.* from produtos p order by p.preco asc;

-- ORDEM DECRESCENTE
select p.* from produtos p order by p.preco desc;

-- BUSCAR TOTAL DE REGISTROS NA TABELA
-- APLICAR UM "APELIDO" (ALIAS) PARA A COLUNA DO RESULTADO
select count(p.*) as "total de registros" from produtos p;
select count(c.*) as "total de registros" from compras c;
/* 
 * OPERADORES RELACIONAIS 
 * =
 * !=
 * > e <
 * >= e <=
 * 
 */
-- LISTAR PRODUTOS DE PREÇO MIN 30
select p.* from produtos p
where p.preco >= 30;

-- LISTAR PRODUTOS DE PREÇO MAX 60
select p.* from produtos p
where p.preco <= 60;

/* 
 * OPERADORES LÓGICOS 
 * 
 * AND
 * OR
 * NOT
 * 
 */

-- LISTAR PRODUTOS DE PREÇO ENTRE 50 E 80
select p.* from produtos p
where (p.preco >= 50) and (p.preco <= 80);

-- LISTAR PRODUTOS FORA DA FAIXA DE PREÇO DA LISTAGEM ACIMA
select p.* from produtos p
where not((p.preco >= 50) and (p.preco <= 80));

-- LISTAR PRODUTOS QUE INICIEM COM A LETRA "b" OU QUE TERMINEM COM A LETRA 'z'
select p.* from produtos p
where p.nome ilike 'B%' or p.nome ilike '%z';

select u.* from usuarios u
where u.email ilike '%joao%';

-- LISTAR USUARIO CUJO E-MAIL SEJA IGUAL À "lucas@example.com" 
-- E SENHA SEJA IGUAL À "senha765"
-- MOSTRAR SOMENTE O ID
select u.id from usuarios u
where u.email = 'lucas@example.com' and u.senha = 'senha765';

-- LISTAR AS COMPRAS DO USUÁRIO ENCONTRADO NA QUERY ACIMA
--SUBQUERY
select c.* from compras c
where c.usuario_id = (
select u.id from usuarios u
where u.email = 'lucas@example.com' and u.senha = 'senha765'
);

/*
 * FUNÇÕES DE AGREGAÇÃO
 * 
 * COUNT - contabilizar a quantidade de ocorrencias
 * SUM - encontra a soma de valores de uma determinada coluna
 * AVG - encontra a media de valores de uma determinada coluna
 * MAX - encontrar o maior valor de uma determinada coluna 
 * MIN -encontrar o menor valor de uma determinada coluna 
 * 
 * */

-- SOMA TOTAL DOS PREÇOS DE PRODUTOS CADASTRADOS
select sum(p.preco) as "soma total" from produtos p;

--MEDIA DE VALORES DE UMA DETERMINADA COLUNA
select avg(p.preco) as "media de preços" from produtos p;

--MAIOR VALOR DE UMA DETERMINADA COLUNA
select max(p.preco) as "produto mais caro" from produtos p;

--MENOR VALOR DE UMA DETERMINADA COLUNA
select min(p.preco) as "produto mais barato" from produtos p;

-- QUANTIDADE TOTAL DE ITEMS QUE O USUARIO DA QUERY ACIMA COMPROU
select u.nome, p.nome, c.quantidade from compras c
join usuarios u on c.usuario_id = u.id

join produtos p on c.produto_id = p.id

where u.id = 8;

select sum(c.quantidade) as "quantidade total" from compras c
join usuarios u
on c.usuario_id = u.id
where u.id = 8;

-- MESMA CONSULTA DA QUERY ACIMA, 
-- PORÉM MOSTRANDO O NOME DO USUARIO, O NOME DO PRODUTO E O PREÇO DO PRODUTO
select u.nome, p.nome, p.preco, c.quantidade from compras c
join usuarios u on c.usuario_id = u.id
join produtos p on c.produto_id = p.id
where u.id = 8;

-- MESMA CONSULTA DA QUERY ACIMA, 
-- ADICIONAR TOTAL DA COMPRA COM BASE NO VALOR UNITARIO E A QUANTIDADE COMPRADA
select u.nome, p.nome,c.quantidade, p.preco, (c.quantidade * p.preco) as "total compra" from compras c
join usuarios u on c.usuario_id = u.id
join produtos p on c.produto_id = p.id
where u.id = 8;

-- TOTAL DE COMPRAS DO USUARIO DA QUERY ACIMA
select sum((c.quantidade * p.preco)) as "total compra" from compras c
join usuarios u on c.usuario_id = u.id
join produtos p on c.produto_id = p.id
where u.id = 8;

-- MEDIA DE COMPRAS DO USUARIO DA QUERY ACIMA
select avg((c.quantidade * p.preco)) as "total compra" from compras c
join usuarios u on c.usuario_id = u.id
join produtos p on c.produto_id = p.id
where u.id = 8;

-- BUSCAR A QUANTIDADE TOTAL DE ITEM COMPRADOS AGRUPANDO POR PRODUTO
-- MOSTRAR O NOME DO PRODUTO
select p.nome, sum(c.quantidade) from compras c
join usuarios u on c.usuario_id = u.id
join produtos p on c.produto_id = p.id
where u.id = 8
group by p.nome;

-- BUSCAR OS 5 PRODUTOS MAIS VENDIDOS
select p.*, sum(c.quantidade) as "total" from compras c
join produtos p
on c.produto_id = p.id
group by p.id
order by "total" desc
limit 5;

-- BUSCAR OS 3 USUARIOS QUE MAIS COMPRARAM NA LOJA
select u.*, sum(c.quantidade * p.preco) as "total" from compras c
join produtos p
on c.produto_id = p.id
join usuarios u
on u.id = c.usuario_id
group by u.id
order by "total" desc
limit 3;
-- QUERY BUSCA TODOS USUARIOS SEM COMPRAS
select u.* from compras c
right join usuarios u on u.id = c.usuario_id
where c.usuario_id is null;


-- QUERY BUSCAR TODOS OS USUARIOS COM O GASTO TOTAL EM COMPRAS
select u.*, sum(c.quantidade * p.preco) as "total" from compras c
join produtos p
on c.produto_id = p.id
join usuarios u
on u.id = c.usuario_id
group by u.id
order by "total" desc;