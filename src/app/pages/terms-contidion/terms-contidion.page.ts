import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonCheckbox, NavController } from '@ionic/angular';

@Component({
  selector: 'app-terms-contidion',
  templateUrl: './terms-contidion.page.html',
  styleUrls: ['./terms-contidion.page.scss'],
})
export class TermsContidionPage implements OnInit {
  @ViewChild('checkTerms') checkTerms:IonCheckbox;

  image = '../../../assets/coink/OinkPolicia.png';

  constructor( private alertCtrl: AlertController,
               private navCtrl: NavController ) { }

  ngOnInit() {
  }

  async validTerms() {

    if( this.checkTerms.checked === true ){
      const alert = await this.alertCtrl.create({
        cssClass: 'msg-alert-exit',
        backdropDismiss: false,
        header: '.',
        subHeader: '¡Bienvenido a Coink!',
        message: '¡Cuenta creada exitosamente, tu marrano ya está listo para que empieces a ahorrar!',
        buttons: [
          {
            text: 'CONTINUAR',
            cssClass: 'btn-alert-exit',
            handler:() => {
              this.navCtrl.navigateForward('/');
            }  
          }
        ]
      });

      await alert.present();

    }


  }

}
