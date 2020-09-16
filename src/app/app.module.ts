import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatecCursosComponent } from './fatec-cursos/fatec-cursos.component';
import { FatecInfoComponent } from './fatec-info/fatec-info.component';
import { FatecCadastroCursoComponent } from './fatec-cadastro-curso/fatec-cadastro-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    FatecCursosComponent,
    FatecInfoComponent,
    FatecCadastroCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
