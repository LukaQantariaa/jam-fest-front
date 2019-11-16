import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  exports: [
    MatSliderModule,
    MatCheckboxModule
  ]
})

export class MaterialModule { }
