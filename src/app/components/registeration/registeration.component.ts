import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  name ="";
  age=0
  @Output() myEvent = new EventEmitter();

get nameValidate(){
  return this.validate.controls["userName"].valid
}
get ageValidate(){
  return this.validate.controls["userAge"].valid
}

  Add(){
    let data = {Name:this.name, Age:this.age}
    if(this.nameValidate && this.ageValidate)
    {
      this.myEvent.emit(data);
    }
    console.log(this.nameValidate)
  }
  validate = new FormGroup({
    userName: new FormControl("0",Validators.required),
    userAge: new FormControl(0,[Validators.min(20), Validators.max(40)])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
