import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit,OnChanges {


  MyForm !:FormGroup;
  @Output() donald : EventEmitter<any> = new EventEmitter<any>();
  @Output() trump : EventEmitter<any> = new EventEmitter<any>();
  @Input() data!:any;

  constructor() { }

  ngOnInit(): void {
    this.MyForm = new FormGroup({
      name:new FormControl(''),
      age:new FormControl(''),
      city:new FormControl('')
    })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
    this.MyForm.patchValue(this.data)
  }
  save():void {
    console.log(this.MyForm.value);
    this.donald.emit(this.MyForm.value)
    this.MyForm.reset();  
  }

  update() :void {
    console.log(this.MyForm.value);
    this.trump.emit(this.MyForm.value);
    this.MyForm.reset();
  }
}
