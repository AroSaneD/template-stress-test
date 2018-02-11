import { Component, OnInit, Input } from '@angular/core';
import { TestObject } from '../../model/testObject';


@Component({
  selector: 'app-cell-component',
  templateUrl: './cell-component.component.html',
  styleUrls: ['./cell-component.component.css']
})
export class CellComponentComponent implements OnInit {

  @Input() inputObject: TestObject;
  public collapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    console.log("new collapsed value: ", this.collapsed);
  }

}
