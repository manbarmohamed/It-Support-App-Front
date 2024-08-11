import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEquipmentComponent } from './assign-equipment.component';

describe('AssignEquipmentComponent', () => {
  let component: AssignEquipmentComponent;
  let fixture: ComponentFixture<AssignEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
