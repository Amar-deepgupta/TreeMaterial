import { Component, OnInit } from '@angular/core';
import { AdItem } from './adbanner/ad.item';
import {AdService } from './adbanner/ad.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: AdItem[] = [];
  title = 'Practice';
  constructor(private adService: AdService) {}
  ngOnInit(): void{
    this.ads = this.adService.getAds();
  }
}
