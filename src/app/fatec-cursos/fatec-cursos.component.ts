import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fatec-cursos',
  templateUrl: './fatec-cursos.component.html',
  styleUrls: ['./fatec-cursos.component.css']
})
export class FatecCursosComponent  {

@Input() curso;

 obterCursoEstilo(){
   return{
     'estiloDemaisCursos' : this.curso.curso != 'ADS',
     'estiloADS' : this.curso.curso === 'ADS'

   }
 }
}
