import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register.dialog',
  templateUrl: './register.dialog.component.html',
  styleUrls: ['./register.dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  isValid: boolean = false;
  submitClicked: boolean = false;

  loginForm: FormGroup;

  constructor(
    public loginDialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmitClick(){
    console.log(this.loginForm)
    this.submitClicked = true;
    if(this.loginForm.invalid) return;
    console.log(this.loginForm);
    this.loginDialogRef.close(this.loginForm.value);
  }

  onCancelClick(){
    this.loginDialogRef.close();
  }
}
