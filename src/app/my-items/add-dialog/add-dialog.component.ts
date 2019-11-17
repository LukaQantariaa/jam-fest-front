import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CategoryService } from 'src/app/services/category.service';
import { DetectService } from 'src/app/services/detect.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  desc_var :string ="";
  addForm: FormGroup;
  imageToChange: File;
  categoryArr = [];
  imgURL;

  constructor(
    public addDialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
      private categoryService: CategoryService,
      private detectService: DetectService
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

  onFileChange(files) {
    console.log(files);
    this.imageToChange = files[0];
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      console.log(reader.result)
      this.imgURL = reader.result; 
      this.detectService.detectPost({'url':files[0].name}).subscribe(p=>{
        console.log(p);
        this.desc_var = p.category1+" , "+p.category2 + " , " + p.category3;;
      }, error=>{
        console.log(error);
      }
      );
    }
    
  }

  onSubmitClick() {
    console.log(this.addForm.value)
    console.log(this.imageToChange)
    console.log(this.addForm.value)
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
