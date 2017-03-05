import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodetailtwoComponent } from './infodetailtwo.component';

describe('InfodetailtwoComponent', () => {
  let component: InfodetailtwoComponent;
  let fixture: ComponentFixture<InfodetailtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfodetailtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfodetailtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
