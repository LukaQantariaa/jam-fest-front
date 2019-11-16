import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule, MatCheckboxModule, MatMenuModule, MatChipsModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogModule, MatCardModule } from '@angular/material';

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
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    MatSliderModule,
    MatCheckboxModule, 
    MatMenuModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ]
})

export class MaterialModule { }
