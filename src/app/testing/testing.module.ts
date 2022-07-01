import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestingComponent],
  imports: [
    CommonModule,
    TestingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[TestingComponent]
})
export class TestingModule { }
