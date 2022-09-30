import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["dataFromParent"].currentValue)
    this.students.push(this.dataFromParent)
  }
  @Input() dataFromParent:any
  students:{Name:string, Age:number}[]= []


}
