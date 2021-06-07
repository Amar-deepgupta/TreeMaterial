import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProcessComponent } from './tab-process.component';

describe('TabProcessComponent', () => {
  let component: TabProcessComponent;
  let fixture: ComponentFixture<TabProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
