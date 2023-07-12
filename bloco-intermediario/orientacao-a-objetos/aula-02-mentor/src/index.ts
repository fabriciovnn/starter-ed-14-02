import {calcularMedia} from './atividade-1'
import { calcMediaPeso } from './atividade-2';
import {lancarTransacao} from './atividade-3';
import {cadastrarProduto, listarProdutos, excluirProduto} from './atividade-4';
import {User} from './types'
import {mostrarDados} from './atividade-5';
import {Diretor} from './types'
import {mostrarDadosDiretor} from './atividade-6';
import {Funcionario} from './types'
import {listar} from './atividade-7';

//atividade 1
console.log('ATIVIDADE 1')
const retornoMedia = calcularMedia(6, 6)
console.log(retornoMedia)

//atividade 2
console.log('ATIVIDADE 2')
let listaNotas = [
  {
    valor: 10,
    peso: 2
  },
  {
    valor: 20,
    peso: 3
  },
  {
    valor: 5,
    peso: 1
  }
]

console.log(calcMediaPeso(listaNotas));

//atividade3
console.log('ATIVIDADE 3')
lancarTransacao({
  tipo: 'ENTRADA',
  valor: 10,
});

lancarTransacao({
  tipo: 'SAIDA',
  valor: 20
})

//atividade-4
console.log('ATIVIDADE 4')
const celular = {
  valor: 1000,
  descricao: 'celular',
  id: 2
}

const tv = {
  valor: 5000,
  descricao: 'tv',
  id: 1
}

cadastrarProduto(celular);
cadastrarProduto(tv);
console.log('LISTA PRODUTOS')
listarProdutos()

excluirProduto(tv.id)
console.log('LISTA MODIFICADA')
listarProdutos()

//atividade5
console.log('ATIVIDADE 5')
const user2: User = {
  nome: 'fabricio',
  idade: 27,
  ocupacao: 'dev',
}


mostrarDados(user2)

//atividade6
console.log('ATIVIDADE 6')
const diretor1: Diretor = {
  comissao: 5,
  nome: 'joao',
  idade: 40
}

const diretor2: Diretor = {
  comissao: 1,
  nome: 'joao',
  idade: 40,
  salario: 100
}

mostrarDadosDiretor(diretor1)
mostrarDadosDiretor(diretor2)

//atividade7
console.log('ATIVIDADE 7')
const listaFuncionarios: Funcionario[] = [
  {
    comissao: 5,
    nome: 'joao',
    idade: 40
  },
 {
    comissao: 1,
    nome: 'anderson',
    idade: 40,
    salario: 100
  },
 {
    nome: 'fabricio',
    idade: 27,
    ocupacao: 'dev',
  }
] 
listar(listaFuncionarios)

