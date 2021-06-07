import { HttpClient } from '@angular/common/http';
import { createComponent } from '@angular/compiler/src/core';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { Component3Component } from '../component3/component3.component';
import { Component4Component } from '../component4/component4.component';
import {Component5Component } from '../component5/component5.component';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-tab-process',
  templateUrl: './tab-process.component.html',
  styleUrls: ['./tab-process.component.css']
})
export class TabProcessComponent implements OnInit {
  jsonData: any = [];
  comp: any = [];
  componentRef: any;
 
  @ViewChild('loadComponent', { read: ViewContainerRef })
  entry: any = ViewContainerRef;
  
  constructor(private resolver: ComponentFactoryResolver, private client: HttpClient) {
   
  }
  createComponent(process: number) {
    this.entry.clear();
    if (process==1 ) {
      const factory = this.resolver.resolveComponentFactory(Component1Component);
      console.log(factory);
      this.componentRef = this.entry.createComponent(factory);
      console.log(this.componentRef);
    } else if (process == 2)
    {
      const factory = this.resolver.resolveComponentFactory(Component2Component);
      this.componentRef = this.entry.createComponent(factory);
    } else if (process == 3) {
      const factory = this.resolver.resolveComponentFactory(Component3Component);
      this.componentRef = this.entry.createComponent(factory);
    } else if (process == 4) {
      const factory = this.resolver.resolveComponentFactory(Component4Component);
      this.componentRef = this.entry.createComponent(factory);
    } else if (process == 5) {
      const factory = this.resolver.resolveComponentFactory(Component5Component);
      this.componentRef = this.entry.createComponent(factory);
    }
  
}
  ngOnInit(): void {
    this.client.get('assets/component.json').subscribe(datas => {
      this.jsonData = datas;
     })
  }
  
  processed(i: number) {
    //console.log(this.jsonData);
    this.createComponent(i+1);
    
  }
  
  
    onClick(i: number) {
      this.comp = [];
      console.log(this.jsonData,i);
      this.jsonData.forEach((ele: any) => {
        if (ele.process == i)
          //console.log(ele.process);
          this.comp = this.jsonData[i - 1].components;
      })
      console.log(this.comp);
    }
  
}
