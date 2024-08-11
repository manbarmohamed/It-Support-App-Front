import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneFormComponent } from './panne-form.component';

describe('PanneFormComponent', () => {
  let component: PanneFormComponent;
  let fixture: ComponentFixture<PanneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanneFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
