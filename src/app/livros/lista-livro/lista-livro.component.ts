import { Component, OnInit } from '@angular/core';
import { LivroOutput } from 'src/app/dtos/outputs/LivroOutput';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.component.html',
  styleUrls: ['./lista-livro.component.css']
})
export class ListaLivroComponent implements OnInit {
 
  nomeLivroParaExclusao: string = '';
  livroParaExclusao?: LivroOutput

  livros: LivroOutput[] = [
    {id: 1, titulo:"Livro 1", anoLancamento: 2023},
    {id: 2, titulo:"Livro 2", anoLancamento: 2005},
    {id: 3, titulo:"Livro 3", anoLancamento: 2016},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  abreModalParaExclusao(livro: LivroOutput){
    this.nomeLivroParaExclusao = livro.titulo
    this.livroParaExclusao = livro;
  }

  removeLivro(){
  console.log(`vou remover o livro ${this.livroParaExclusao?.titulo} com id: ${this.livroParaExclusao?.id}`);
  document.getElementById('modal-remover-livro-botao-fechar')?.click();
  }
}