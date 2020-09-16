import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FatecCursosComponent } from './fatec-cursos/fatec-cursos.component';
import { FatecInfoComponent } from './fatec-info/fatec-info.component';
import { FatecCadastroCursoComponent } from './fatec-cadastro-curso/fatec-cadastro-curso.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    FatecCursosComponent,
    FatecInfoComponent,
    FatecCadastroCursoComponent,
    CadastroAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
