import { Normal } from './classes/atividade1/Normal'
import { Vip } from './classes/atividade1/Vip'
import { Camarote } from './classes/atividade1/Camarote'
import { Novo } from './classes/atividade2/Novo'
import { Velho } from './classes/atividade2/Velho'
import { Cavalo } from './classes/atividade3/Cavalo'
import { Gato } from './classes/atividade3/Gato'
import { Cachorro } from './classes/atividade3/Cachorro'

//atividade 1
const ticketNormal = new Normal(20)
ticketNormal.imprimeValor()

const ticketVip = new Vip(20)
ticketVip.imprimeValor()

const ticketCamarote = new Camarote(20)
ticketCamarote.imprimeValor()

//atividade 2
const newImovel = new Novo('rua 123', 50, 50)
newImovel.imprimirValor()

const oldImovel = new Velho('rua 321', 50, 25)
oldImovel.imprimirValor()

//atividade 3
const horse = new Cavalo(4, true)
const cat = new Gato(4, true)
const dog = new Cachorro(4, true)

horse.correr(20)
horse.relinchar()

cat.correr(30)
cat.miar()

dog.correr(40)
dog.latir()