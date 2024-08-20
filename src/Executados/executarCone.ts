import { Cone } from "../Cone";

const cone1: Cone = new Cone(50, `Plástico`, `Laranja`);
const cone2: Cone = new Cone(5, `Plástico`, `Amarelo`);

console.log(cone1.getMaterial());
console.log(cone2.getAltura());
