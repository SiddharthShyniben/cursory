import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorParentComponent } from './editor-parent.component';

describe('EditorParentComponent', () => {
  let component: EditorParentComponent;
  let fixture: ComponentFixture<EditorParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
