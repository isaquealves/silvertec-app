import { FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { MainboardService } from '@/_services/mainboard.service';

@Component({
  selector: 'app-mainboards',
  templateUrl: './mainboards.component.html',
  styleUrls: ['./mainboards.component.sass']
})
export class MainboardsComponent implements OnInit {
  mainboards: any;
  mboard: any;
  @Input() ordForm: FormGroup;

  constructor(
    private mainboardService: MainboardService
  ) { }

  ngOnInit() {
    this.loadMainboards();
  }

  loadMainboards() {
    this.mainboardService.getAll()
      .pipe(first())
      .subscribe(mainboards => this.mainboards = mainboards);
  }

  submitMainboard() {
    this.ordForm.get('mainboardStep').get('mainboard').markAsTouched();
    this.ordForm.get('mainboardStep').get('mainboard').updateValueAndValidity();
  }
}
