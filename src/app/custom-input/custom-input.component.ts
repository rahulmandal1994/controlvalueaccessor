import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class CustomInputComponent implements ControlValueAccessor {
  // writeValue(obj: any): void {
  // throw new Error('Method not implemented.');
  // }
  // registerOnChange(fn: any): void {
  // throw new Error('Method not implemented.');
  // }
  // registerOnTouched(fn: any): void {
  // throw new Error('Method not implemented.');
  // }
  // setDisabledState?(isDisabled: boolean): void {
  // throw new Error('Method not implemented.');
  // }
  onChange(event) {
    console.log(event.target);
    return event.target.value;
  }
  onTouch: any = () => {};
  value: any = '';
  isDisabled: boolean;
  /*val = ''; // this is the updated value that the class accesses
  set value(val) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }*/
  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value;
    console.log('value=', this.value);
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
}
