import { Component, OnInit } from '@angular/core';
interface Position{
  name: string,
  date:string,
  title: string,
  desc?:string
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent{


  positions: Position[]= [
    {name:'Gdańsk University of Technology', date:'Oct, 2017 - Feb, 2021', title:'Electronics and Telecommunications'},
    {name:' Comarch SA', date:'Nov, 2021 - Present', title:'Junior Frontend Developer', desc:'Frontend developer, work with ZUS applications. Used technologies: typescript, javascript, angular'}
  
  ]

  constructor() { }


}
