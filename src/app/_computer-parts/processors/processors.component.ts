import { FormGroup } from '@angular/forms';
import { ProcessorService } from '@/_services/processor.service';
import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.sass']
})
export class ProcessorsComponent implements OnInit {
  processors: any;
  @Input() ordForm: FormGroup;
  proc: any;
  constructor(
    private processorService: ProcessorService
  ) { }

  ngOnInit() {
    this.loadProcessors();
  }

  loadProcessors() {
    this.processorService.getAll()
      .pipe(first())
      .subscribe(processors => this.processors = processors);
  }

  submitProcessor() {
    this.ordForm.get('processorStep').get('processor').markAsTouched();
    this.ordForm.get('processorStep').get('processor').updateValueAndValidity();
  }

}
