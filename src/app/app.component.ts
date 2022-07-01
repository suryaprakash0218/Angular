import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curd';
  OutputData:any[]=[];
  update:any;
  index!:number;

  outputData(data:any) {
    console.log(data)
    this.OutputData.push(data);
  }

  deleteData(data:any) {
    const index = this.OutputData.indexOf(data);
    this.OutputData.splice(index,1);
  }

  updateData(data:any,i:number) {
    console.log(data);
    this.update = data;
    this.index = i;
  }
  updateHandler(data:any) {
    console.log(data)
    this.OutputData[this.index]=data;
  }
}
