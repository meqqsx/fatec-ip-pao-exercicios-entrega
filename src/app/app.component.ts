import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exibirCadastro: boolean = true;
  exibirAluno: boolean = false;

  cursos = [
    {curso:"ADS", periodo:	"Vespertino"},
    {curso:"ADS", periodo:	"Noturno"},
    {curso:"Eventos", periodo:	"Matutino"},
    {curso:"Gestão Comercial", periodo:	"Matutino"},
    {curso:"Gestão Comercial", periodo:	"Noturno"},
    {curso:"RH", periodo:	"Noturno"}
  ];
  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
  }
  exibirPagina(){
      this.exibirCadastro = !this.exibirCadastro;
      this.exibirAluno = !this.exibirAluno;
  }
}




