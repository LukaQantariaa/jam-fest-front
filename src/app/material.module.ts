import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule, MatCheckboxModule, MatMenuModule, MatChipsModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';

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
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    MatSliderModule,
    MatCheckboxModule, 
    MatMenuModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ]
})

export class MaterialModule { }
