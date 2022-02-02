import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceRougeComponent } from './piece-rouge.component';

describe('PieceRougeComponent', () => {
  let component: PieceRougeComponent;
  let fixture: ComponentFixture<PieceRougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceRougeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceRougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
