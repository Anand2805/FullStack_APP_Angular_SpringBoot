import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateComponent } from './validate.component';

describe('ValidateComponent', () => {
  let component: ValidateComponent;
  let fixture: ComponentFixture<ValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit Clear Data on click clear button', () => {
    spyOn(component.Clear, 'emit');
    component.clearData();
    expect(component.Clear.emit).toHaveBeenCalled();
  });

});
