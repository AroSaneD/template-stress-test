import { Component, OnInit, Input } from '@angular/core';
import { TestChildObject } from '../../model/testChildObject';

@Component({
  selector: 'app-child-tabs-component',
  templateUrl: './child-tabs-component.component.html',
  styleUrls: ['./child-tabs-component.component.css']
})
export class ChildTabsComponentComponent implements OnInit {

  constructor() { }

  @Input() objects: TestChildObject[];

  ngOnInit() {
  }

}
