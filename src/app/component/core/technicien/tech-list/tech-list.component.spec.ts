import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechListComponent } from './tech-list.component';

describe('TechListComponent', () => {
  let component: TechListComponent;
  let fixture: ComponentFixture<TechListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
