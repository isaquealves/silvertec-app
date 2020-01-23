import { GraphicboardsService } from '@/_services/graphicboards.service';

import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.sass']
})
export class GraphicsComponent implements OnInit {
  graphicboards: any;
  gboard: any;
  @Input() ordForm: FormGroup;
  constructor(
    private graphicboardsService: GraphicboardsService
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.graphicboardsService.getAll()
      .pipe(first())
      .subscribe(
        boards => this.graphicboards = boards
      );
  }

  submitGraphics() {
    this.ordForm.get('graphicsStep').get('graphicboard').markAsTouched();
    this.ordForm.get('graphicsStep').get('graphicboard').updateValueAndValidity();
  }
}
