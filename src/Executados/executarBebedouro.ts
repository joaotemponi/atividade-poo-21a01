import { Bebedouro } from "../Bebedouro";

const bebedouro1: Bebedouro = new Bebedouro(15, `Alumínio`, 65);
const bebedouro2: Bebedouro = new Bebedouro(93, `Papel`, 20);

console.log(bebedouro1.getCapacidade());
console.log(bebedouro2.getMaterial());


