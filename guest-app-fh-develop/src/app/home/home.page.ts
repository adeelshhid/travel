import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authForm: FormGroup
  authForm3: FormGroup
  authForm2: FormGroup
  path: string = 'landing'
  isVerified: boolean = false
  showMore: boolean = false
  sent: boolean = false
  date2 = new Date().toString()
  date1 = new Date().getDate() - 2
  constructor(private modalController: ModalController, private fb: FormBuilder) {
    this.authForm = this.fb.group({
      typeNum: ['', [Validators.required]],
      name: ['', [Validators.required]],

    })
    this.authForm2 = this.fb.group({
      typeNum2: ['', [Validators.required]],
      name2: ['', [Validators.required]],

    })
    this.authForm3 = this.fb.group({
      typeNum3: ['', [Validators.required]],
      name3: ['', [Validators.required]],

    })
  }

  show() {
    this.showMore = true
  }

  next(_path: string) {
    this.path = _path
    switch (_path) {
      case 'i-am-here': {
        this.modalController.dismiss()
        let modal = document.getElementById('i-am-here') as HTMLIonModalElement
        modal.present()
        break;
      }
      case 'i-am-coming': {
        this.modalController.dismiss()
        let modal = document.getElementById('i-am-coming') as HTMLIonModalElement
        modal.present()
        break;
      }
      case 'verifying': {
        let modal = document.getElementById('verifying') as HTMLIonModalElement
        modal.present()
        setTimeout(() => {
          this.isVerified = true
        }, 1000)
        setTimeout(() => {
          modal.dismiss()
          let modal1 = document.getElementById('dark') as HTMLIonModalElement
          modal1.present()
        }, 3000)



        break;
      }
      case 'req': {
        this.modalController.dismiss()
        let modal = document.getElementById('req') as HTMLIonModalElement
        modal.present()
        break;
      }
      case 'sending': {
        this.modalController.dismiss()
       
          let modal = document.getElementById('sending') as HTMLIonModalElement
          modal.present()
       
        setTimeout(() => {
          this.sent = true
          this.modalController.dismiss()
          let modal = document.getElementById('sent') as HTMLIonModalElement
          modal.present()
        }, 2000)

        break;
      }
      case 'close': {
        this.modalController.dismiss()
      }
      case 'landing': {
        this.modalController.dismiss()
        let modal = document.getElementById('landing') as HTMLIonModalElement
        modal.present()
        break;
      }

    }


  }
  dismiss() {
    this.modalController.dismiss()
  }
}
