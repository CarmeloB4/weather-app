import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const materialModule = [
MatCardModule,
MatButtonModule,
MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [...materialModule],
  exports: [...materialModule]
})
export class MaterialModule { }
