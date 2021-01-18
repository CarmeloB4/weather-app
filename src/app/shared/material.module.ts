import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';

const materialModule = [
MatCardModule,
MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [materialModule],
  exports: [materialModule]
})
export class MaterialModule { }
