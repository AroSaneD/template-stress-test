import { TestChildObject } from './../../model/testChildObject';
import { TestObject } from './../../model/testObject';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor() { }

  elements: TestObject[] = [
    new TestObject('hello', 1, 2, [
      new TestChildObject('test1', 0, null),
      new TestChildObject('test2', 1, true),
      new TestChildObject('test3', 2, false),
    ]),
    new TestObject('there', 1, 2, [
      new TestChildObject('test1', 0, null),
      new TestChildObject('test2', 1, true),
      new TestChildObject('test3', 2, false),
    ]),
    new TestObject('world', 1, 2, [
      new TestChildObject('test1', 0, null),
      new TestChildObject('test2', 1, true),
      new TestChildObject('test3', 2, false),
    ]),
  ];

  ngOnInit() {
  }

}
