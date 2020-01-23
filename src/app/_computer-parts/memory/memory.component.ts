import { Component, OnInit, Input } from '@angular/core';
import { MemoryService } from '@/_services/memory.service';
import { first } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { AlertService, ComputerPartsService } from '@/_services';

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
    private memoryService: MemoryService,
    private cpService: ComputerPartsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loadMemoryModules();
  }

  checkMainboard(event) {

    const mainBoard = this.cpService.getMainboard();
    const memorySizesArray = event.value.map(x => x.size);
    if (memorySizesArray.length > 0) {
      if (memorySizesArray.reduce((acc, val) => acc + val) > mainBoard.maxRamTotal) {
        this.alertService.error(`A quantidade máxima de memória da placa selecionada é ${mainBoard.maxRamTotal}GB`);
      } else if (memorySizesArray.length > mainBoard.ramSlots) {
        this.alertService.error(`A quantidade de módulos de memória suportada pela placa é ${mainBoard.ramSlots}`);
      }
    } else {
      this.alertService.clear();
    }
  }

  loadMemoryModules() {
    this.memoryService.getAll()
      .pipe(first())
      .subscribe(rammodules => this.memorymodules = rammodules);
  }

  submitMem() {
    this.ordForm.get('memoryStep').get('memorymodules').markAsTouched();
    this.ordForm.get('memoryStep').get('memorymodules').updateValueAndValidity();
  }

}
