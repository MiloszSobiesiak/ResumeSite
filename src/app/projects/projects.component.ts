import { Component, OnInit } from '@angular/core';
interface Projects{
  name:string,
  link:string,
  desc?:string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{

  constructor() { }

  skills:string[]=['Angular','Typescript','Javascript','HTML/CSS','JIRA','GitHub']
  projects:Projects[]=[
    {name:'BreakingBadAPI',link:'https://breakingbadapi-15006.firebaseapp.com/main',desc:'Application written in Angular that fetching data from the Breaking Bad API. With this app user can find information about characters, seasons and  episodes of the Breaking Bad series.'},
    {name:'RecipesApp', link: 'https://homeapp-8e8f9.firebaseapp.com/login', desc:'Application written in Angular. Logging in and creating an account is done using the authorization firebase. Realtime Database was used as the database. The HTTP module is responsible for communication with the data request.'}
  ]

}
