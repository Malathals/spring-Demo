import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeComponent } from './component/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
