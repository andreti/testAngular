import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Constantes } from 'src/app/comun/constantes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.loadFormGroup();
  }

  private loadFormGroup() {
    this.form = this.fb.group(
      {
        username: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(Constantes.PATRON_EMAIL), Validators.maxLength(50)]),
        gender: new FormControl(''),
        bio: new FormControl(''),
      });
  }

  get f(){
    return this.form.controls;
  }

  public save(){
    if(this.form.valid){
      console.log("save", this.form.value)
    }
  }

}
