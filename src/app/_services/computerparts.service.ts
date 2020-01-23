import { Injectable } from '@angular/core';
import { Processor, Mainboard, MemoryModule, GraphicBoard } from '@/_models';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ComputerPartsService {

  private processor: BehaviorSubject<Processor>;
  private mainboard: BehaviorSubject<Mainboard>;
  private memory: BehaviorSubject<MemoryModule>;
  private graphicboard: BehaviorSubject<GraphicBoard>;
  private memoryArray: Array<BehaviorSubject<MemoryModule>>;

  currentProcessor: Observable<Processor>;
  currentMainboard: Observable<Mainboard>;
  currentGraphicboard: Observable<GraphicBoard>;

  constructor() {}

  selectProcessor(processor: Processor) {
    this.processor = new BehaviorSubject<Processor>(processor);
    this.currentProcessor = this.processor.asObservable();
  }
  selectMainboard(mainboard: Mainboard) {
    this.mainboard = new BehaviorSubject<Mainboard>(mainboard);
    this.currentMainboard = this.mainboard.asObservable();
  }

  selectGraphicboard(graphicboard) {
    this.graphicboard = new BehaviorSubject<GraphicBoard>(graphicboard);
    this.currentGraphicboard = this.graphicboard.asObservable();
  }
  getProcessor() {
    return this.processor.value;
  }
  getMainboard() {
    return this.mainboard.value;
  }

  getGraphicBoard() {
    return this.graphicboard.value;
  }

}
