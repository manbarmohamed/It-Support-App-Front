import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketsByTechnicianComponent } from './view-tickets-by-technician.component';

describe('ViewTicketsByTechnicianComponent', () => {
  let component: ViewTicketsByTechnicianComponent;
  let fixture: ComponentFixture<ViewTicketsByTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTicketsByTechnicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTicketsByTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
