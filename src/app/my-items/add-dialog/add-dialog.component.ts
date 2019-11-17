import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  addForm: FormGroup;
  imageToChange: File;
  categoryArr = [];

  constructor(
    public addDialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
      private categoryService: CategoryService
    ) {}

  ngOnInit() {
    this.categoryService.categoryGet().subscribe( (p:[]) => {
      this.categoryArr = [...p];
      console.log(p)
    }, error => {
      console.log(error)
    });

    this.addForm = new FormGroup({
      itemImage: new FormControl(null, Validators.required),
      itemName: new FormControl(null, Validators.required),
      itemDescription: new FormControl(null, Validators.required),
      itemCategory: new FormControl('Others', Validators.required)
    });
  }

  onFileChange(file) {
    this.imageToChange = file[0];
  }

  onSubmitClick() {

    let obj = {
      item_name: this.addForm.value.itemName,
      item_description: this.addForm.value.itemDescription,
      image: this.imageToChange,
    }
    this.addDialogRef.close(obj);
  }

  onCancelClick(){
    this.addDialogRef.close();
  }

}
