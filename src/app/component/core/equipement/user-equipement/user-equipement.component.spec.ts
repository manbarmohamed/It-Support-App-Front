import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEquipementComponent } from './user-equipement.component';

describe('UserEquipementComponent', () => {
  let component: UserEquipementComponent;
  let fixture: ComponentFixture<UserEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
