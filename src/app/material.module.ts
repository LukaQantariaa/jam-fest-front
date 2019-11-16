import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule, MatCheckboxModule, MatMenuModule, MatChipsModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatMenuModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports: [
    MatSliderModule,
    MatCheckboxModule, 
    MatMenuModule,
    MatChipsModule,
    MatButtonModule
  ]
})

export class MaterialModule { }
