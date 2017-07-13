import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-form-with-validations-explicit',
  templateUrl: './form-with-validations-explicit.component.html',
  styleUrls: ['./form-with-validations-explicit.component.css']
})
export class FormWithValidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      // 'sku': ['', Validators.required]
      'sku': ['', Validators.compose(
        [Validators.required, skuValidator]
      )],
      'productName': ['', Validators.required]
    })

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('El valor cambio a:', value);
      }
    )

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('Los datos del formulario ahora son: ', form)
      }
    )

  }

  onSubmit(value: string): void {
    console.log('this.myForm.valid: ', this.myForm.valid)
    console.log('El valor es: ', value)
  }

  ngOnInit() {
  }

}

//StringMap<string, boolean>



function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true }
  }
}
