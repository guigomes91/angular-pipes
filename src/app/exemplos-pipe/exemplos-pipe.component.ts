import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipe',
  templateUrl: './exemplos-pipe.component.html',
  styleUrls: ['./exemplos-pipe.component.css']
})
export class ExemplosPipeComponent {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];
  filtro: string = '';

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000)
  .subscribe(valor => 'Valor assíncrono2')

  addCurso(curso: string) {
    this.livros.push(curso);
  }

  obterCurso() {
    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
}
