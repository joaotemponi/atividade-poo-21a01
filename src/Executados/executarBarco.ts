import { Barco } from "../Barco";

const barco1: Barco = new Barco(10, 30, 2000);
const barco2: Barco = new Barco(15, 50, 5000);

console.log(barco1.getLargura());
console.log(barco2.getCapacidade());
