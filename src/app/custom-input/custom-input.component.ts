import { Component, Injector, OnInit, Input,  forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl,  AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnInit,ControlValueAccessor {
  @Input() variant = '';
  onChange: (value?: any) => void;
  onTouch: () => void;
  value: any = '';
  isDisabled: boolean;
  _control: NgControl;

  constructor(private injector: Injector) {
  }
  get control(){
    return this._control.control as FormControl
 }
  ngOnInit() {
    this._control = this.injector.get(NgControl);
    //console.log("registrationForm",this._control)
   //this.control = this.abstractcontrol as NgControl;
  }
  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  onInput($event) {
    if (this.onChange) {
      this.onChange($event.target.value);
    }
  }
  ngAfterViewInit() {
    console.log("varient=",this.variant)
  }
}
