import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueItemComponent } from './unique-item.component';

describe('UniqueItemComponent', () => {
  let component: UniqueItemComponent;
  let fixture: ComponentFixture<UniqueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
