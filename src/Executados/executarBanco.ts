import { Banco } from "../Banco";

const teclado = require(`prompt-sync`)();
let nome: string = teclado(`Digite seu nome`);
const banco1: Banco = new Banco(4, `Concreto`, `Cinza`);
const banco2: Banco = new Banco(10, `Madeira`, `Marrom`);



console.log(banco1.getCapacidade());
console.log(banco2.getMaterial());

