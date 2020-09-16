import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos = [
    {curso:"ADS", periodo:	"Vespertino"},
    {curso:"ADS", periodo:	"Noturno"},
    {curso:"Eventos", periodo:	"Matutino"}
  ];
  onAdicionarCurso(novoCurso) {
    this.cursos = [novoCurso, ...this.cursos];
  }

}




