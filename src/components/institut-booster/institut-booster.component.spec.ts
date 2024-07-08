import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutBoosterComponent } from './institut-booster.component';

describe('InstitutBoosterComponent', () => {
  let component: InstitutBoosterComponent;
  let fixture: ComponentFixture<InstitutBoosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutBoosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutBoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
