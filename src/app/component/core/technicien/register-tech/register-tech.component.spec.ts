import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTechComponent } from './register-tech.component';

describe('RegisterTechComponent', () => {
  let component: RegisterTechComponent;
  let fixture: ComponentFixture<RegisterTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
