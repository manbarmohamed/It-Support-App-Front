import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneEquipementComponent } from './panne-equipement.component';

describe('PanneEquipementComponent', () => {
  let component: PanneEquipementComponent;
  let fixture: ComponentFixture<PanneEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanneEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanneEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
