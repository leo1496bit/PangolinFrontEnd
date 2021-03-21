import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptService } from '../opt.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  constructor(private fb:FormBuilder,
    private route:Router,
    private opt:OptService) { }
  inscriptionForm=this.fb.group({
    login:['',Validators.required],
    pass:['',Validators.required],
    age:[''],
    famille:[''],
    race:[''],
    nourritures:this.fb.array([
      this.fb.control('')
    ])
  })
  get nourritures(){
    return this.inscriptionForm.get('nourritures') as FormArray;
  }
  addNourriture(){
    this.nourritures.push(this.fb.control(''));
  }
  onSubmit(){
    let init ={
      method:'POST',
      body:new Blob([JSON.stringify(this.inscriptionForm.value)],{type:'application/json'})
    }
    fetch('http://localhost:3000/inscription',init).then(resp=>{
      
      resp.json().then(data=>{
        this.opt.id=data.data.insertedId;
        this.opt.amis=data.data.friend;
        this.route.navigate(['/infos'])
      })
    })
  }
  annuler(event){
    event.preventDefault();
    this.route.navigate(['/connexion']);
  }
  ngOnInit(): void {
  }

}
