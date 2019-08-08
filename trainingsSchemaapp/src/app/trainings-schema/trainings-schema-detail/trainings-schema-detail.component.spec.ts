import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsSchemaDetailComponent } from './trainings-schema-detail.component';

describe('TrainingsSchemaDetailComponent', () => {
  let component: TrainingsSchemaDetailComponent;
  let fixture: ComponentFixture<TrainingsSchemaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsSchemaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsSchemaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
