import { NONE_TYPE } from '@angular/compiler';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-fatec-cadastro-curso',
  templateUrl: './fatec-cadastro-curso.component.html',
  styleUrls: ['./fatec-cadastro-curso.component.css']
})
export class FatecCadastroCursoComponent {
@Output() cursoAdicionado =  new EventEmitter();

 adicionar(nome,periodo){
    const curso = {
      curso: nome,
      periodo: periodo
    };
    this.cursoAdicionado.emit(curso);
  }

  estiloBotaoCadastro(){
    return{
        borderRadius: '12px',
        backgroundColor:'#20b2aa',
        borderStyle: 'none'
    }
  }
}
