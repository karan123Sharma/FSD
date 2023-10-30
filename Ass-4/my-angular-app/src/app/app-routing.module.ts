import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateComponent} from './template/template.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';


const routes: Routes = [
  { path: 'Template', component:TemplateComponent },
  { path: 'Template2', component: Template2Component },
  { path: 'Template3', component: Template3Component },
  { path: '', redirectTo: '/Template', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
