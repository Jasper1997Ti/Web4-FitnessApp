import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsSchemaComponent } from './trainings-schema.component';

describe('TrainingsSchemaComponent', () => {
  let component: TrainingsSchemaComponent;
  let fixture: ComponentFixture<TrainingsSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
