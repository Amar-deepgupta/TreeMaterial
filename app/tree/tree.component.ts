import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { HttpClient } from '@angular/common/http';

interface JSONDATA {
   
  name: string;
  id: string;
  // type: string;
  //ppu: number;
  children?: JSONDATA[];
}
interface Data {
  expandable: boolean;
  
  name: string;
   id: string;
  // type: string;
  level: number;
}
// const TREE_DATA="A string"
const TREE_DATA: JSONDATA[] = [];
 
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  jsonData: any;
  obj: any = {}
  
  private _transformer = (node: JSONDATA, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      id: node.id,
      // type:node.type,
      level: level,
    };
  }
  
  treeControl = new FlatTreeControl<Data>(
    node => node.level, node => node.expandable);
  
  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);
  
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
  constructor(private client: HttpClient) {}
  
 
  // test(data:any){
  //   if (data.length==0) {
  //     console.log('Json file has not data');
      
  //     return data;
  //   } else {
  //     console.log(TREE_DATA);
  //     return data;
  //   }
  // }
  // test(data:any){
  //   if (data instanceof Array || data instanceof Object) {
  //     console.log('Json File has valid data');
  //     return [data];
  //   } else {
  //     console.log('Json file has not valid data');
  //     return [data];
  //   }
  // }
  // test(data:any){
  //   if (data.length === 0) {
  //       console.log('Json File has single value');
  //     return [data];
  //   } else {
  //     console.log('Json file has nested value');
  //     return [data];
  //   }
  // }
    
  // test(data: any) {
  //   console.log(data);
  //   for(let v of data){
  //     if(v.children) {
  //       console.log('json file is nested');
  //       return data;
  //     }else {
  //       console.log('json file is not nested' + data);
  //       return data;
  //     }
  //   }
  // }

  ngOnInit(): void {
    this.client.get('assets/data.json').subscribe(datas => {
      this.jsonData = datas;
      this.jsonData.forEach((element: any) => {
        this.obj = {
          name: element.name,
          
          children: [
            {
              name: element.name,
              children: element.children
            }
          ]
        }
         TREE_DATA.push(this.obj);     
       
      })
      console.log(TREE_DATA);
      // console.log(this.test(TREE_DATA));
      // this.dataSource.data = this.test(TREE_DATA);
      this.dataSource.data = TREE_DATA;
      console.log(TREE_DATA);
    })
   
   
  }
 
  hasChild = (_: number, node: Data) => node.expandable;
}