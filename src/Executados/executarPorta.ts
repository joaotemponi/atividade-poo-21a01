import { Porta } from "../Porta";

const porta1: Porta = new Porta(`Correr`, `vidro`, 2);
const porta2: Porta = new Porta(`giro`, `Madeira`, 2);

console.log(porta1.getTipo());
console.log(porta2.getAltura());
