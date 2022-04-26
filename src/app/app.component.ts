import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  external = '';
 
  constructor(public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    name: [{ value: 'test', disabled: false }, Validators.required],
  });
  /*buildForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required])
     
    })
  }*/
  onSubmit() {
    console.log(this.registrationForm.valid)
  }
}
