import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule, MatCheckboxModule, MatMenuModule, MatChipsModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatMenuModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatSliderModule,
    MatCheckboxModule, 
    MatMenuModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})

export class MaterialModule { }
