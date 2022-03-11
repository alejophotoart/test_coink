import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
})
export class StatusBarComponent implements OnInit {

  @Input() status: string;
  
  bar = '../../../assets/coink/bar-1.png';
  bar2 = '../../../assets/coink/bar-2.png';
  bar3 = '../../../assets/coink/bar-3.png';

  constructor() { }

  ngOnInit() {}

}
