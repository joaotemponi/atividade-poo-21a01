import { Computador } from "../Computador";

const computador1: Computador = new Computador(32, `Ryzen 5 5600g`, 6800 );
const computador2: Computador = new Computador(4, `Intel Celeron`, 2000 );

console.log(computador1.getMemoria());
console.log(computador2.getProcessador());

