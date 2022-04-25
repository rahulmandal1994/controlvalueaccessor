import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  external = ""
  constructor(
    public fb: FormBuilder,
  ) {}
  registrationForm = this.fb.group({
    name: ['Test']
  })
  onSubmit(){

  }
}
