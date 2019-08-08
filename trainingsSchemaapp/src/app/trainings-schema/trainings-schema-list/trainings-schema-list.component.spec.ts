import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsSchemaListComponent } from './trainings-schema-list.component';

describe('TrainingsSchemaListComponent', () => {
  let component: TrainingsSchemaListComponent;
  let fixture: ComponentFixture<TrainingsSchemaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsSchemaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsSchemaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
