import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendingReservartionReqComponent } from './sending-reservartion-req.component';

describe('SendingReservartionReqComponent', () => {
  let component: SendingReservartionReqComponent;
  let fixture: ComponentFixture<SendingReservartionReqComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingReservartionReqComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendingReservartionReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
