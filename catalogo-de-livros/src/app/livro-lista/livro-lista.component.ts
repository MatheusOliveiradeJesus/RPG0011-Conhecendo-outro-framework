import { Component } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  livros: Livro[] = [
    { titulo: 'Dom Casmurro', resumo: 'O clássico de Machado de Assis narra as dúvidas de Bentinho sobre a fidelidade de sua esposa, Capitu.', editora: 'Editora Thoth', autor: 'Machado de Assis' },
    { titulo: 'Grande Sertão: Veredas', resumo: 'João Guimarães Rosa leva os leitores em uma jornada pelo sertão brasileiro, explorando questões existenciais através das experiências do jagunço Riobaldo.', editora: 'Nova Fronteira', autor: 'João Guimarães Rosa' },
    { titulo: 'Capitães de Areia', resumo: 'Jorge Amado retrata a vida dos meninos órfãos que vivem nas ruas de Salvador, destacando suas lutas pela sobrevivência e busca por identidade.', editora: 'Companhia das Letras', autor: 'Jorge Amado' }
  ];

  excluirLivro(index: number): void {
    this.livros.splice(index, 1);
  }
}

