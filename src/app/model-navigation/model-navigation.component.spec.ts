import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelNavigationComponent } from './model-navigation.component';

describe('ModelNavigationComponent', () => {
  let component: ModelNavigationComponent;
  let fixture: ComponentFixture<ModelNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
