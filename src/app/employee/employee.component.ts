import { Component, OnInit } from '@angular/core';
import{Employee} from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees :Employee[];
  constructor()
  {
    this.employees=[
      {id:101,name:'Poonam',sal:20000},
      {id:102,name:'Vishal',sal:40000},
      {id:103,name:'Divya',sal:50000},
      {id:104,name:'Sweekriti',sal:60000},
      {id:105,name:'Rose',sal:20000},
      {id:106,name:'Loni',sal:70000},
      {id:107,name:'Priyanka',sal:30000},
      {id:108,name:'Dristi',sal:40000},
      {id:109,name:'Rahul',sal:50000},
      {id:110,name:'Pooja',sal:25000},
      
    ]
  }
  
}
