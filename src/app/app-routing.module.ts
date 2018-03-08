import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';
import { EmployeeListComponent } from './features/employee-list/employee-list.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'employees',
        component: EmployeeListComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'about/:id',
        component: AboutComponent
    },
    {
        path: 'form01',
        component: Form01Component
    },
    {
        path: 'form02',
        component: Form02Component
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
