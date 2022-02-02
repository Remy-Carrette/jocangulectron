import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceBleueComponent } from './piece-bleue.component';

describe('PieceBleueComponent', () => {
  let component: PieceBleueComponent;
  let fixture: ComponentFixture<PieceBleueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceBleueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceBleueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
