import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HomeComponent } from './pages/home/home.component';
import { ListTaksComponent } from './pages/list-taks/list-taks.component';

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
