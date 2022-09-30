import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id=""
  constructor(myActivated:ActivatedRoute) {
    this.id = myActivated.snapshot.params["id"]
   }

  ngOnInit(): void {
  }

}
