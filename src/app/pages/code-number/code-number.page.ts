import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { EncryptService } from 'src/app/services/encrypt.service';
import { RequestCodeService } from 'src/app/services/request-code.service';

@Component({
  selector: 'app-code-number',
  templateUrl: './code-number.page.html',
  styleUrls: ['./code-number.page.scss'],
})
export class CodeNumberPage implements OnInit {

  key: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiIwMzAxMDYiLCJWZXJzaW9uIjoiMS4wLjAifQ.OJ7pEEf3b0tPHwdWIn7-v18tYnMeYhTU9UT8zDSEtrg";
  image = '../../../assets/coink/oink.png';
  phone_number: any;
  phone: string;
  code: any;
  serialized_json: {} = {};
  payload: {} = {};

  constructor( private route: ActivatedRoute,
               private alertCtrl: AlertController,
               private encryptService: EncryptService,
               private requestCodeService: RequestCodeService,
               private navCtrl: NavController,
               private loadingCtrl: LoadingController ) { }

  ngOnInit() {

    this.route.params.subscribe( params  => {

      this.phone_number = params['phone_number']

      let cadena = this.phone_number;
      cadena = cadena.substring(0,2);
      let cadena2 = this.phone_number;      
      cadena2 = cadena2.substring(2);
      this.phone = cadena + " " + cadena2;

    });
    
  }

  async verifyCode( event: any ) {

    event.target.maxlength = 4;

    let code = event.detail.value;

    if( code == "0000" ) {
      
      const alert = await this.alertCtrl.create({
        cssClass: 'msg-alert',
        backdropDismiss: false,
        header: 'CÓDIGO INCORRECTO',
        message: 'El código que ingresaste es incorrecto, enviaremos un nuevo código a tu correo electrónico.',
        buttons: [
        {
          text: 'Reenviar código',
          cssClass: 'btn-alert',
          handler:() => {

            event.target.value = "";
            this.serialized_json = 
            {
              phone_number: this.phone_number,
              log_signup_id: ""
            };

            let encrypt = this.encryptService.encrypt( JSON.stringify(this.serialized_json), this.key );

            this.payload = {
              payload: encrypt
            };

            this.requestCodeService.getCode( this.payload ).subscribe( (result: any) => { 
        
              console.log( result );
              
              var arr = Object.entries(result).map(([type, value]) => ({type, value}));
        
              for (let i = 0; i < arr.length; i++) {
                this.code = arr[i].value;
              }
        
              let decrypt = this.encryptService.decrypt( this.code, this.key );
        
              console.log( decrypt );
            });
          }
        },
        {
          text: '',
          role: 'cancel',
          cssClass: 'btn-alert-cancel'
        }
      ]
    });

      await alert.present();

    } else {

      if( code.length == 4 ) {

        const loading = await this.loadingCtrl.create({
          message: 'Validando Código...'
        });
    
        await loading.present();

        this.navCtrl.navigateForward('/data-client')

        loading.dismiss();
      }

    }
  }



}
