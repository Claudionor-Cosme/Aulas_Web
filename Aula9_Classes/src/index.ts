import { Aluno } from "./aluno";
import { livros } from "./livro";

const aluno1: Aluno = new Aluno('Pedro', 68, 'ADS', 'BT65989');

aluno1.imprimir();

const livro1: livros = new livros(`amoeba`, `chiquinho`, 2006, `panini`);
livro1.exibirDados();

const livro2: livros = new livros(`guache`, `claudionor`, 2006, `masqueico`);
livro1.exibirDados();




