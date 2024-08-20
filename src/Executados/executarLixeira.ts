import { Lixeira } from "../Lixeira";

const lixeira1: Lixeira = new Lixeira(20, `Plástico`, `Verde`);
const lixeira2: Lixeira = new Lixeira(15, `Alumínio`, `Branca`);

console.log(lixeira1.getCor());
console.log(lixeira2.getCapacidade());

