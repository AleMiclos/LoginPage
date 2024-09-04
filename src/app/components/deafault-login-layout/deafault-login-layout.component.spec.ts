import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeafaultLoginLayoutComponent } from './deafault-login-layout.component';

describe('DeafaultLoginLayoutComponent', () => {
  let component: DeafaultLoginLayoutComponent;
  let fixture: ComponentFixture<DeafaultLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeafaultLoginLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeafaultLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
