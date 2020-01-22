import { Processor } from '@/_models';
import { ComputerPartsService } from './../../_services/computerparts.service';
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
    private processorService: ProcessorService,
    private cpService: ComputerPartsService
  ) { }

  ngOnInit() {
    this.loadProcessors();
  }

  loadProcessors() {
    this.processorService.getAll()
      .pipe(first())
      .subscribe(processors => this.processors = processors);
  }
  onChange(event){
    const processor = event.value;
    this.cpService.selectProcessor(processor);
  }
  submitProcessor() {
    this.ordForm.get('processorStep').get('processor').markAsTouched();
    this.ordForm.get('processorStep').get('processor').updateValueAndValidity();
  }

}
