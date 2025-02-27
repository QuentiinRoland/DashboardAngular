import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormCreateComponent } from './customer-form-create.component';

describe('CustomerFormCreateComponent', () => {
  let component: CustomerFormCreateComponent;
  let fixture: ComponentFixture<CustomerFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerFormCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
