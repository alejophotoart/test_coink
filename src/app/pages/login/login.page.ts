import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  img = '../../../assets/coink/oink_login.png';
  text: string = "LA ALCANCÍA QUE SIEMPRE TE ACOMPAÑA";

  constructor( private statusBar: StatusBar ) { }

  
  ngOnInit() {
    
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleLightContent();

  }

}
