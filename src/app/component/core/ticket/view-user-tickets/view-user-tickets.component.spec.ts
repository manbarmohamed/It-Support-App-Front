import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserTicketsComponent } from './view-user-tickets.component';

describe('ViewUserTicketsComponent', () => {
  let component: ViewUserTicketsComponent;
  let fixture: ComponentFixture<ViewUserTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUserTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewUserTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
