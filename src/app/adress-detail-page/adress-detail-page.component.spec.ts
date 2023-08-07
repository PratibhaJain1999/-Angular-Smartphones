import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressDetailPageComponent } from './adress-detail-page.component';

describe('AdressDetailPageComponent', () => {
  let component: AdressDetailPageComponent;
  let fixture: ComponentFixture<AdressDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressDetailPageComponent]
    });
    fixture = TestBed.createComponent(AdressDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
