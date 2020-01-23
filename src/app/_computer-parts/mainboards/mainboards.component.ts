import { FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { AlertService, MainboardService, ComputerPartsService } from '@/_services';

@Component({
  selector: 'app-mainboards',
  templateUrl: './mainboards.component.html',
  styleUrls: ['./mainboards.component.sass']
})
export class MainboardsComponent implements OnInit {

  private mainboardField;
  mainboards: any;
  mboard: any;
  @Input() ordForm: FormGroup;
  errorMsgs = {
    unsupported: 'O processador selecionado não pode ser usado com esta placa.'
  };

  constructor(
    private mainboardService: MainboardService,
    private cpService: ComputerPartsService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loadMainboards();
  }

  checkProcessor(event) {
    const processor = this.cpService.getProcessor();
    const mb = event.value;
    const t = mb.supportedProcessors.filter(x => processor.manufacturer === x);
    if (!t.length) {
      this.alertService.error(String.raw`${this.errorMsgs.unsupported}
        A placa precisa suportar processadores ${processor.manufacturer}`);
      return false;
    }
    this.alertService.clear();
    this.cpService.selectMainboard(mb);
  }

  loadMainboards() {
    this.mainboardService.getAll()
      .pipe(first())
      .subscribe(mainboards => this.mainboards = mainboards);
  }

  submitMainboard() {
    this.ordForm
      .get('mainboardStep').get('mainboard').markAsTouched();
    this.ordForm
      .get('mainboardStep').get('mainboard').updateValueAndValidity();
  }
}
