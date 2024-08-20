import { Tambor } from "../Tambor";

const tambor1: Tambor = new Tambor(`Azul`, `Plastico`, 50);
const tambor2: Tambor = new Tambor(`Prata`, `Aluminio`, 20);

console.log(tambor1.getCor());
console.log(tambor2.getMaterial());

