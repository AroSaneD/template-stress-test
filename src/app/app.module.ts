import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { CellComponentComponent } from './components/cell-component/cell-component.component';
import { InformationComponentComponent } from './components/information-component/information-component.component';
import { ChildTabsComponentComponent } from './components/child-tabs-component/child-tabs-component.component';
import { ChildTabComponentComponent } from './components/child-tab-component/child-tab-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    CellComponentComponent,
    InformationComponentComponent,
    ChildTabsComponentComponent,
    ChildTabComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
