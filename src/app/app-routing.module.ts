import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { ListTaksComponent } from './list-taks/list-taks.component';

const routes: Routes = [
  {path: "calculator", component: CalculatorComponent},
  {path: "home", component: HomeComponent},
  {path: "list-taks", component: ListTaksComponent},
  {path: "**", redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
