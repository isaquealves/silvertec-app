import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-computerparts',
  templateUrl: './computerparts.component.html',
  styleUrls: ['./computerparts.component.sass']
})
export class ComputerpartsComponent implements OnInit {
  isLinear = true;
  orderForm: FormGroup;
  proc: any;
  constructor() {}

  ngOnInit() {
    this.orderForm = new FormGroup({
      processorStep: new FormGroup({
        processor : new FormControl('', Validators.required)
      }),
      mainboardStep: new FormGroup({
        mainboard: new FormControl('', Validators.required)
      }),
      memoryStep: new FormGroup({
        memorymodules: new FormControl('', Validators.required)
      }),
      graphicsStep: new FormGroup({
        graphicboards: new FormControl('', Validators.required)
      }),
      reviewAndSubmit: new FormGroup({
        agreed: new FormControl('', Validators.required)
      })
    });
  }
}
