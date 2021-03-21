import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptService {
  user:any;
  amis:any;
  id:null;
  constructor() { }
  afficher(){
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:3000/info/'+this.id).then(resp=>{
      resp.json().then(data=>{
        this.user=data;
        console.log(this.user);
        resolve("ok")
      })
    })
    })
    
  }
  listeAmis(){
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:3000/all').then(resp=>{
      resp.json().then(data=>{
        resolve(data)
      })
    })
    })
    
  }
  ajouterAmi(id){
    return new Promise((resolve,reject)=>{
      let init ={
        method:'PUT',
        body:new Blob([JSON.stringify({id:id})],{type:'application/json'})
      }
      fetch('http://localhost:3000/addFriend/'+this.id,init).then(resp=>{
      resp.json().then(data=>{
        console.log(data);
        resolve(data)
      })
    })
    })
  }
  supprimerAmi(id){
    return new Promise((resolve,reject)=>{
      let init ={
        method:'PUT',
        body:new Blob([JSON.stringify({id:id})],{type:'application/json'})
      }
      fetch('http://localhost:3000/deleteFriend/'+this.id,init).then(resp=>{
      resp.json().then(data=>{
        console.log(data);
        resolve(data)
      })
    })
    })
  }
  supprimerRepas(id){
    return new Promise((resolve,reject)=>{
      let init ={
        method:'PUT',
        body:new Blob([JSON.stringify({food:this.user.nourriture[id]})],{type:'application/json'})
      }
      fetch('http://localhost:3000/deleteNourriture/'+this.id,init).then(resp=>{
      resp.json().then(data=>{
        console.log(data);
        resolve(data)
      })
    })
    })
  }
  addRepas(food){
    return new Promise((resolve,reject)=>{
      let init ={
        method:'PUT',
        body:new Blob([JSON.stringify({food:food})],{type:'application/json'})
      }
      fetch('http://localhost:3000/addNourriture/'+this.id,init).then(resp=>{
      resp.json().then(data=>{
        console.log(data);
        resolve(data)
      })
    })
    })
  }


}
