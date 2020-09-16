import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatecCadastroCursoComponent } from './fatec-cadastro-curso.component';

describe('FatecCadastroCursoComponent', () => {
  let component: FatecCadastroCursoComponent;
  let fixture: ComponentFixture<FatecCadastroCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatecCadastroCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatecCadastroCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
