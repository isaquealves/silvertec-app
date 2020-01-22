import { Component, OnInit, Input } from '@angular/core';
import { MemoryService } from '@/_services/memory.service';
import { first } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.sass']
})
export class MemoryComponent implements OnInit {

  memorymodules: any;
  @Input() ordForm: FormGroup;
  modmem: any;

  constructor(
    private memoryService: MemoryService
  ) { }

  ngOnInit() {
    this.loadMemoryModules();
  }

  loadMemoryModules() {
    this.memoryService.getAll()
      .pipe(first())
      .subscribe(rammodules => this.memorymodules = rammodules);
  }

  submitMem() {
    console.log(this.ordForm.get('memoryStep').get('memorymodules').valueChanges);
    this.ordForm.get('memoryStep').get('memorymodules').markAsTouched();
    this.ordForm.get('memoryStep').get('memorymodules').updateValueAndValidity();
  }

}
