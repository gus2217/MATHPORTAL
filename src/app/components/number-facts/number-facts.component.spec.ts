import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFactsComponent } from './number-facts.component';

describe('NumberFactsComponent', () => {
  let component: NumberFactsComponent;
  let fixture: ComponentFixture<NumberFactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberFactsComponent]
    });
    fixture = TestBed.createComponent(NumberFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
