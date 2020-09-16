import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatecInfoComponent } from './fatec-info.component';

describe('FatecInfoComponent', () => {
  let component: FatecInfoComponent;
  let fixture: ComponentFixture<FatecInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatecInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatecInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
