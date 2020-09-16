import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent  {
  @Input() curso;
@Output() novoAluno = new EventEmitter();
  alunos = [
    {name: "Gabriel Gualberto", idade:"20",email: "gabriel@gmail.com",curso:"ADS - Vespertino"}
  ];
  onAdicionarAluno(nome,idade,email,curso){
    this.alunos=[{name: nome ,idade:idade,email: email,curso:curso}, ...this.alunos]
  }

  }

