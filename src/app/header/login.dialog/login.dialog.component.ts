import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login.dialog',
  templateUrl: './login.dialog.component.html',
  styleUrls: ['./login.dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  isValid: boolean = false;
  submitClicked: boolean = false;

  loginForm: FormGroup;

  constructor(
    public loginDialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null)
    })
  }

  onSubmitClick(){
    this.submitClicked = true;
    if(this.loginForm.invalid) return;
    this.loginDialogRef.close(this.loginForm.value);
  }

  onCancelClick(){
    this.loginDialogRef.close();
  }

}
