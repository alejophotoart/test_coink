import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInput, LoadingController, NavController } from '@ionic/angular';
import { DocumentTypeService } from 'src/app/services/document-type.service';
import { GenersService } from 'src/app/services/geners.service';

@Component({
  selector: 'app-data-client',
  templateUrl: './data-client.page.html',
  styleUrls: ['./data-client.page.scss'],
})
export class DataClientPage implements OnInit {
  @ViewChild('email') email:IonInput;
  @ViewChild('password') password:IonInput;

  image = '../../../assets/coink/oink.png';
  documentTypes: any;
  genersTypes: any;
  eyes: string = 'eye';
  eyesConfirm: string = 'eye';
  check = '../../../assets/coink/Check.png';
  checkState = false;
  confirmPIN = false;

  date_birth: string;
  document_type: number;
  emailConfirm: string;
  expedition_date: string;
  gener: number;
  number_documento: string;
  passwordConfirm: string;

  constructor( private documentTypeService: DocumentTypeService,
               private genersService: GenersService,
               private navCtrl: NavController,
               private loadingCtrl: LoadingController ) { }

  ngOnInit() {

    this.documentTypeService.getDocumentType().subscribe( (result) => {

      this.documentTypes = Object.keys(result).map(key => ({value: result[key]}));

      console.log(this.documentTypes);
      
    }, (error: any) => {
      console.log(error);
    });

    this.genersService.getGeners().subscribe( (result) => {

      this.genersTypes = Object.keys(result).map(key => ({value: result[key]}));

      console.log(this.genersTypes);

    }, (error: any) => {
      console.log(error);
    });

  }

  confirmEmail( event ) {

    if( event.detail.value != "" && this.email.value != "" ){

      if( event.detail.value == this.email.value) {
        this.checkState = true;
      } else {
        this.checkState = false;
      }
    }

  }

  confirmPin( event ) {


    if( event.detail.value != this.password.value) {
      this.confirmPIN = true;
    } else {
      this.confirmPIN = false;
    }

  }

  showPIN() {

    if( this.password.value != "" ){

      if( this.password.type === "password" ) {
        this.eyes = 'eye-off'
        this.password.type = "text";
        
      } else {
        this.eyes = 'eye'
        this.password.type = "password";
      }

    }

  }

  showPINConfirm( event ) {

    console.log(event);

    if( event.detail.value != "" ){

      if( event.target.type === "password" ) {
        this.eyesConfirm = 'eye-off'
        event.target.type = "text";
        
      } else {
        this.eyesConfirm = 'eye'
        event.target.type = "password";
      }

    }

  }

  async onSubmit( formData: NgForm ) {

    const loading = await this.loadingCtrl.create({
      message: 'Validando Datos...'
    });

    await loading.present();

    console.log(formData);

    this.date_birth = formData.value.date_birth;
    this.document_type = formData.value.document_type;
    this.emailConfirm = formData.value.emailConfirm;
    this.expedition_date = formData.value.expedition_date;
    this.gener = formData.value.gener;
    this.number_documento = formData.value.number_documento;
    this.passwordConfirm = formData.value.passwordConfirm;

    this.navCtrl.navigateForward('/terms-contidion');

    loading.dismiss();

  }

}
