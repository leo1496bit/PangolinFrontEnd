import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptService } from '../opt.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private fb:FormBuilder, private opt:OptService,
     private route:Router) { }
     error=null;
  connexionForm=this.fb.group({
    login:['',Validators.required],
    pass:['',Validators.required]
  })
  ngOnInit(): void {
    this.opt.id=null;
  }
  onSubmit(){
    console.log(this.connexionForm.value)
    let init ={
      method:'POST',
      body:new Blob([JSON.stringify(this.connexionForm.value)],{type:'application/json'})
    }
    fetch('http://localhost:3000/connexion',init).then(resp=>{
      resp.json().then(data=>{
        if(data.statut==200){
        console.log(data)
        this.opt.id=data.data._id;
        this.opt.amis=data.data.friend
        this.route.navigate(['/infos'])
        }
        else{
          this.error='Login ou pass incorrect';
        }
      })
    })
  }
  redirect(event){
    event.preventDefault();
    this.route.navigate(['/inscription']);
  }

}
