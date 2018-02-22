import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterColorComponent } from './master-color.component';

describe('MasterColorComponent', () => {
  let component: MasterColorComponent;
  let fixture: ComponentFixture<MasterColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
