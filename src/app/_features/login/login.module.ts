import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ])
  ]
})
export class LoginRouterModule { }