import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingsSchemaComponent } from './add-trainings-schema.component';

describe('AddTrainingsSchemaComponent', () => {
  let component: AddTrainingsSchemaComponent;
  let fixture: ComponentFixture<AddTrainingsSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingsSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingsSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
