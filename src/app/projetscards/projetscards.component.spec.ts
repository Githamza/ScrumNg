import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetscardsComponent } from './projetscards.component';

describe('ProjetscardsComponent', () => {
  let component: ProjetscardsComponent;
  let fixture: ComponentFixture<ProjetscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
