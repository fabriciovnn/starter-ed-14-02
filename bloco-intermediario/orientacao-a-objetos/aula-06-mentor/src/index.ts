import { Circulo } from "./classes/Circulo";
import { Item } from "./classes/Item";
import { Pedido } from "./classes/Pedido";

const pedido = new Pedido()
const camiseta = new Item(100, 'camiseta', 'camiseta preta da Vans')
const tenis = new Item(600, 'Tenis', 'Tenis da NIke')
pedido.adicionarItem(camiseta)
pedido.adicionarItem(tenis)

console.log(pedido)

pedido.mostrarDados()
tenis.mostrarDados()

const circulo = new Circulo(30)
circulo.desenhar()
circulo.redimensionar()