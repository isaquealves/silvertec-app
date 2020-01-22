import { FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material';

const NgMaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatStepperModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [NgMaterialComponents],
  exports: [NgMaterialComponents]
})
export class MaterializeModule { }
