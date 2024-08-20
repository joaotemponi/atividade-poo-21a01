import { ExtintorDeIncendio } from "../ExtintorDeIncendio";

const extintordeincendio1: ExtintorDeIncendio = new ExtintorDeIncendio(`Pó Químico`, 10, 125);
const extintordeincendio2: ExtintorDeIncendio = new ExtintorDeIncendio(`CO2`, 11, 130);

console.log(extintordeincendio1.getCapacidade());
console.log(extintordeincendio2.getTipo());

