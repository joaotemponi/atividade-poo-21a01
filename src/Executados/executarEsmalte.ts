import { Esmalte } from "../Esmalte";

const esmalte1: Esmalte = new Esmalte(`azul`, `royal`, `risque`);
const esmalte2: Esmalte = new Esmalte(`Rosinha`, `nude`, `LaSante`);

console.log(esmalte1.getMarca());
console.log(esmalte2.getCor());


