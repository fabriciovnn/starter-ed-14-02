-- 1 - Todos os clientes do estado de MG
select c."name", c.email, ca.state, ca.city from customer as c
join customer_address as ca
on ca.customer_id = c.id
where ca.state = 'MG';

-- 2 - Todos os clientes do sexo masculino que moram na cidade de São Paulo (capital)
select c."name", c.gender, ca.state, ca.city from customer as c
join customer_address as ca
on ca.customer_id = c.id
where (ca.city = 'São Paulo') and (c.gender = 'male');

-- 3 - Todas as compras acima de R$3.000,00 em ordem crescente
select o.total from orders o
where o.total >= 3000
order by o.total asc;

-- 4 - Todos os produtos que tenham em seu nome “Sapatilha em Couro Vazada”
select i.* from items i
where i."name" ilike '%Sapatilha em Couro Vazada%';