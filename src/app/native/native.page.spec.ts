import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NativePage } from './native.page';

describe('NativePage', () => {
  let component: NativePage;
  let fixture: ComponentFixture<NativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
