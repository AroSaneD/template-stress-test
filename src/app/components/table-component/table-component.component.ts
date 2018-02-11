import { element } from 'protractor';
import { TestChildObject } from './../../model/testChildObject';
import { TestObject } from './../../model/testObject';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor() {
    for (let i = 0; i < 15; i++) {
      var children = [];

      for (let j = 0; j < 10; j++) {
        children.push(new TestChildObject(`test${j}`, j, j % 2 == 0));
      }

      this.elements.push(new TestObject(`hello${i}`, 1, 2, children));
    }

  }

  elements: TestObject[] = [];

  ngOnInit() {
  }

}
