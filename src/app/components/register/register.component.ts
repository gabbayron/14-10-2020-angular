import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import israeliIdValidator from 'src/app/validators/israeliId.valid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  myForm: FormGroup

  ngOnInit(): void {
    //-------- one option ----------------
    // this.myForm = new FormGroup({
    //   name: new FormControl(""),
    //   username: new FormControl("", [Validators.required, Validators.minLength(4)]),
    //   password: new FormControl("", Validators.required),
    //   email: new FormControl("", Validators.email)
    // })

    this.myForm = this.fb.group({
      name: "",
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      id: ["", [Validators.required, israeliIdValidator]]
    })

  }

  handleSubmit() {
    console.log(this.myForm.controls)
    console.log(this.myForm.value)
  }
}
