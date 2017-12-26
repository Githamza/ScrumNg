import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjdetailsComponent } from './projdetails.component';

describe('ProjdetailsComponent', () => {
  let component: ProjdetailsComponent;
  let fixture: ComponentFixture<ProjdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
