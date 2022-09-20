import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './componentes/employee-create/employee-create.component';
import { EmployeeEditComponent } from './componentes/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './componentes/employee-list/employee-list.component';
import { HomeComponent } from './componentes/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestApiService } from './service/rest-api.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
