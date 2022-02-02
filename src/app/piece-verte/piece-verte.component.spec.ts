import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceVerteComponent } from './piece-verte.component';

describe('PieceVerteComponent', () => {
  let component: PieceVerteComponent;
  let fixture: ComponentFixture<PieceVerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceVerteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceVerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
