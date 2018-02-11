import { Component, OnInit, Input } from '@angular/core';
import { TestObject } from '../../model/testObject';


@Component({
  selector: 'app-cell-component',
  templateUrl: './cell-component.component.html',
  styleUrls: ['./cell-component.component.css']
})
export class CellComponentComponent implements OnInit {

  @Input() inputObject: TestObject;

  constructor() { }

  ngOnInit() {
  }

}
