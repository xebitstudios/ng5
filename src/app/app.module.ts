import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './shared/data.service';
import { TodoService } from './shared/todo.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { Interceptor } from './interceptors/httpInterceptor';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeListComponent } from './features/employee-list/employee-list.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    Form01Component,
    Form02Component,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    FooterComponent,
    NavigationComponent,
    EmployeeListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    TodoService
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
