import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosGeneraleComponent } from './infos-generale.component';

describe('InfosGeneraleComponent', () => {
  let component: InfosGeneraleComponent;
  let fixture: ComponentFixture<InfosGeneraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosGeneraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
