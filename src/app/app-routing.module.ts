import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './componentes/employee-create/employee-create.component';
import { EmployeeEditComponent } from './componentes/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './componentes/employee-list/employee-list.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'employee-create', component: EmployeeCreateComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'employee-list', component: EmployeeListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
