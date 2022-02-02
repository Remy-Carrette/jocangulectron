import { DragDropModule } from '@angular/cdk/drag-drop';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropThingComponent } from './drag-and-drop-thing.component';

describe('DragAndDropThingComponent', () => {
  let component: DragAndDropThingComponent;
  let fixture: ComponentFixture<DragAndDropThingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropThingComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
