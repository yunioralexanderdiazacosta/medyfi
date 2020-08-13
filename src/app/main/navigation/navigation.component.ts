import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  lenguage = 'en';
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLenguage(){
  	this.translate.use(this.lenguage)
  }

}
