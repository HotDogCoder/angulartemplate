import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import { FormStoreLeadComponent } from './leads/form-store-lead/form-store-lead.component';


@NgModule({
  declarations: [FormBasicComponent, FormSignUpComponent, FormStoreLeadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  exports: [
    FormBasicComponent,
    FormSignUpComponent
  ]
})
export class CustomFormsModule { }
