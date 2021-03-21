import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptService } from '../opt.service';

@Component({
  selector: 'app-liste-amis',
  templateUrl: './liste-amis.component.html',
  styleUrls: ['./liste-amis.component.css']
})
export class ListeAmisComponent implements OnInit {

  constructor(private opt:OptService,private route:Router) { }
  liste:any;
  amis:any;
  ngOnInit(): void {
    this.opt.listeAmis().then(res=>this.liste=res)
    this.amis=this.opt.amis;
  }
  verifAmis(id){
    if(this.amis){
      return this.amis.find(e=>e==id)==undefined?false:true;
    }
    return false;
  }
  ajouter(id){
    this.opt.ajouterAmi(id).then(res=>console.log(res)).then(()=>{
      this.opt.afficher().then(()=>{
        this.amis=this.opt.user.friend;
      })
      
    })
  }
  supprimer(id){
    this.opt.supprimerAmi(id).then(res=>console.log(res)).then(()=>{
      this.opt.afficher().then(()=>{
        this.amis=this.opt.user.friend;
      })
    })
  }
  deconnexion(){
    this.route.navigate(['/connexion']);
  }

}
