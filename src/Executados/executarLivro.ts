import { Livro } from "../Livro";

const livro1: Livro = new Livro(800, `Angola`, `Nelson Mandela`);
const livro2: Livro = new Livro(199, `Africa: sem agua a 1390 anos`, `Mano JC`);

console.log(livro1.getEditora());
console.log(livro2.getTitulo());

