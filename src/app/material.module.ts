import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule, MatCheckboxModule, MatMenuModule, MatChipsModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogModule, MatCardModule, MatSelectModule } from '@angular/material';

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
    MatCardModule,
    MatSelectModule
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
    MatCardModule,
    MatSelectModule
  ]
})

export class MaterialModule { }
