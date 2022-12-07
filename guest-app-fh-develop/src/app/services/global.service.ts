import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Browser } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  appLanguage
  currentModal

  constructor(
    public toast: ToastController,
    public alertCtlr: AlertController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public router: Router,
    // private appT: TranslateConfigService,
    // private reqS: RequestService
  ) {
    // this.getCurrentPosLocation();
    // this.appLanguage = this.appT.getDefaultLanguage();
  }
  // translateObj(lang = 'en') {
  //   if (this.appT.getDefaultLanguage() === 'en' || lang === 'en') {
  //     return this.english;
  //   } else {
  //     return this.arabic;
  //   }
  // }

  public async CreateToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2500,
      position: 'bottom',
      color: 'dark',
    });
    toast.present();
  }

  async closeModal(data?:any){
    const check = await this.modalController.getTop();
    if (check) {
      if (data) {
        this.modalController.dismiss(data)
        }else{
        this.modalController.dismiss()
        }
    }
   
  }
  async alertController(msg: any) {
    const alert = this.alertCtlr.create({
      message: msg,
      mode: 'ios',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Alert.canceled.');
          },
        },
      ],
    });
    (await alert).present();
  }
  async appErrorAlert(msg: any) {
    const alert = this.alertCtlr.create({
      message: msg,
      cssClass: 'app-alert',
      header: 'eTraffic',
      subHeader: '',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Alert.canceled.');
          },
        },
      ],
    });
    (await alert).present();
  }

  // async getCurrentLocation() {

  //   const coordinates = await Geolocation.getCurrentPosition();
  //   this.nativeGeocoder.reverseGeocode(coordinates.coords.latitude, coordinates.coords.longitude,{maxResults:5,useLocale:true,defaultLocale:'en-US'}).then(async res => {
  //     let location =`${res[0]['subLocality']?res[0]['subLocality']+',':''} ${res[0]['locality']?res[0]['locality']+',':''} ${res[0]['locality'] === res[0]['subAdministrativeArea'] ? '':  res[0]['subAdministrativeArea']+','} ${res[0]['administrativeArea']?res[0]['administrativeArea']+',':''} ${res[0]['countryName']?res[0]['countryName']+'.':'.'}`
  //     console.log('location:', location, res);
  //   })
  //   return location
  // }

  async presentModal(page: any, data: any) {
    const modal = await this.modalController.create({
      component: page,
      mode: 'ios',
      swipeToClose: false,
      // presentingElement: document.querySelector('ion-router-outlet'),
      componentProps: { data },
    });
    this.currentModal = modal;
    return await modal.present();
  }

  async presentLoading(msg: any) {
    const check = await this.loadingController.getTop();
    if (check) {
      this.loadingController.dismiss();
    }
    const loading = await this.loadingController.create({
      message: msg,
      cssClass: 'loader-dir',
      spinner: 'crescent',
      mode: 'ios',
    });
    loading.present();
  }
  async hideLoading() {
    this.loadingController.dismiss();
  }
  async timeoutHide(time: number) {
    setTimeout(async () => {
      const check = await this.loadingController.getTop();
      if (check) {
        this.loadingController.dismiss();
      }
    }, time);
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
  navigateWithExtras(route: string, extras: NavigationExtras) {
    this.router.navigate([route], extras);
  }

  getNavigationExtras(){
    return this.router.getCurrentNavigation()?.extras?.state
  }

  // async getCurrentPosLocation() {
  //   // console.log('kkkkk====');
  //   try {
  //     const posOptions = {
  //       timeout: 3 * 1000,
  //       enableHighAccuracy: false,
  //     };
  //     const position = await Geolocation.getCurrentPosition(posOptions);
  //     this.currentLocLat = position.coords.latitude;
  //     this.currentLocLong = position.coords.longitude;
  //     // console.log('this.currentLocLat' + this.currentLocLat);
  //     // console.log('this.currentLocLong' + this.currentLocLong);
  //     this.locationEnable = true;
  //     this.cLat = this.currentLocLat;
  //     this.cLon = this.currentLocLong;
  //     // $state.reload();
  //   } catch (e) {
  //     // error
  //     this.currentLocLat = 26.0667;
  //     this.currentLocLong = 50.5577;
  //     // setTimeout(this.getCurrentPosLocation, 30000);
  //     console.log('getCurrentLocation error' + e);
  //     this.locationEnable = false;

  //     this.cLat = this.currentLocLat;
  //     this.cLon = this.currentLocLong;
  //     //loader.showToast(lang.gps);
  //     // callList();
  //   }
  // }
  // async openInAppBrowserService(path, type='') {
  //   await Browser.open({
  //     url: path,
  //     presentationStyle: 'fullscreen',
  //   });
  // }
}
