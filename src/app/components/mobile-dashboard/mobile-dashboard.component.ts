import { Component, OnInit } from '@angular/core';
import {Imobile} from 'src/app/model/mobile'
import {mobileProduct} from 'src/app/const/mobile'

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {
  
mobilesArr: Array<Imobile> = mobileProduct

imageError:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
