import { Router } from '@angular/router';
import { User } from '@/_models';
import { OrderService, AuthenticationService, AlertService } from '@/_services';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OnInit, Component } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-computerparts',
  templateUrl: './computerparts.component.html',
  styleUrls: ['./computerparts.component.sass']
})
export class ComputerpartsComponent implements OnInit {
  isLinear = true;
  orderForm: FormGroup;
  proc: any;
  currentUser: User;

  constructor(
    private orderService: OrderService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

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

  submit() {
    const proc = this.orderForm.get('processorStep').get('processor').value;
    const board = this.orderForm.get('mainboardStep').get('mainboard').value;
    const memory = this.orderForm.get('memoryStep').get('memorymodules').value;
    const graphics = this.orderForm.get('graphicsStep').get('graphicboards').value;
    const data = {
      user: this.currentUser,
      processor: proc,
      mainboard: board,
      memorymodules: memory,
      graphicboard: graphics
    };
    this.orderService.submitOrder(data)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Pedido realizado com sucesso', true);
          this.router.navigate(['/orders']);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }
}
