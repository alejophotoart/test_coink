import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { EncryptService } from 'src/app/services/encrypt.service';
import { RequestCodeService } from 'src/app/services/request-code.service';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit {

  image = '../../../assets/coink/oink.png';
  phone_number: any;
  key: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiIwMzAxMDYiLCJWZXJzaW9uIjoiMS4wLjAifQ.OJ7pEEf3b0tPHwdWIn7-v18tYnMeYhTU9UT8zDSEtrg";
  code: any;
  serialized_json: {} = {};
  payload: {} = {};



  constructor( private encryptService: EncryptService,
               private requestCodeService: RequestCodeService,
               private loadingCtrl: LoadingController,
               private router: Router,
               private alertCrtl: AlertController ) { }

  ngOnInit() {
  }

  spaceNumber( event ){
    console.log(event);
    let number: string = event.detail.value;

    if( number.length > 10){
      event.target.maxlength = 10
    }
  }

  async applyForCode( formPhone: NgForm ){

    this.serialized_json = 
      {
          phone_number: this.phone_number,
          log_signup_id: ""
      };
    
    this.phone_number = formPhone.value.phone_number;

    let encrypt = this.encryptService.encrypt( JSON.stringify(this.serialized_json), this.key );

    this.payload = {
      payload: encrypt
    };

    const loading = await this.loadingCtrl.create({
      message: 'Generando Código...'
    });

    await loading.present();

    this.requestCodeService.getCode( this.payload ).subscribe( (result: any) => { 

      loading.dismiss();

      console.log( result );
      
      var arr = Object.entries(result).map(([type, value]) => ({type, value}));

      for (let i = 0; i < arr.length; i++) {
        this.code = arr[i].value;
      }

      let decrypt = this.encryptService.decrypt( this.code, this.key );

      console.log( decrypt );
      
      this.router.navigate(['/code-number', this.phone_number]);


    }, async (error: any) => {

      loading.dismiss();

      const alert = await this.alertCrtl.create({
        header: error.error.message,
        message: 'Ha ocurrido un error, Por favor verifique el numero de telefono.',
        buttons: ['OK']
      });

      await alert.present();
    
    })
  }
}
