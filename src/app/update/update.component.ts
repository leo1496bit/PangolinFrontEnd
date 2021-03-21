import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptService } from '../opt.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,private opt:OptService,
    private route: Router) { }
    message=null;
  updateForm=this.fb.group({
    age:[this.opt.user.age],
    famille:[this.opt.user.famille],
    race:[this.opt.user.race],
  })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.updateForm.value)
    let form={};
    if(this.updateForm.get('age').value!=""){
      form['age']=this.updateForm.get('age').value;
    }
    if(this.updateForm.get('famille').value!=""){
      form['famille']=this.updateForm.get('famille').value;
    }
    if(this.updateForm.get('race').value!=""){
      form['race']=this.updateForm.get('race').value;
    }
    console.log(form);
    let init ={
      method:'PUT',
      body:new Blob([JSON.stringify(form)],{type:'application/json'})
    }
    fetch('http://localhost:3000/update/'+this.opt.id,init).then(resp=>{
      resp.json().then(()=>{
        this.message="Modification(s) réuissie(s)"
      })
    })
  }
  modifier(){
    this.route.navigate(['/updateFood']);
  }

}
