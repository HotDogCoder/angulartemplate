import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStoreLeadComponent } from './form-store-lead.component';

describe('FormStoreLeadComponent', () => {
  let component: FormStoreLeadComponent;
  let fixture: ComponentFixture<FormStoreLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStoreLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStoreLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
