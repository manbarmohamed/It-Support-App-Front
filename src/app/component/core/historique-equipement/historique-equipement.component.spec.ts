import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueEquipementComponent } from './historique-equipement.component';

describe('HistoriqueEquipementComponent', () => {
  let component: HistoriqueEquipementComponent;
  let fixture: ComponentFixture<HistoriqueEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueEquipementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriqueEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
