import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleColorChangerComponent } from './simple-color-changercomponent';

describe('SimpleComponentComponent', () => {
  let component: SimpleColorChangerComponent;
  let fixture: ComponentFixture<SimpleColorChangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleColorChangerComponent]
    });
    fixture = TestBed.createComponent(SimpleColorChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
