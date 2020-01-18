import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';

const NgMaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [NgMaterialComponents],
  exports: [NgMaterialComponents]
})
export class MaterializeModule { }
