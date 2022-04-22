import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path: 'projects', component : ProjectsComponent},
  {path: 'aboutme', component : AboutmeComponent},
  {path: 'work', component : WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
