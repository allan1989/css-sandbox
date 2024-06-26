import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediplusComponent } from './mediplus.component';

describe('MediplusComponent', () => {
  let component: MediplusComponent;
  let fixture: ComponentFixture<MediplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediplusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
