import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptService } from '../opt.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  constructor(private opt:OptService,
    private route:Router) { }
  age:null;
  famille:null;
  race:null;
  nourriture:null;
  ngOnInit(): void {
    this.opt.afficher().then(res=>{
      this.age=this.opt.user.age;
      this.famille=this.opt.user.famille;
      this.race=this.opt.user.race;
      this.nourriture=this.opt.user.nourriture
    })
  
  }
  modifier(){
    this.route.navigate(['/update']);
  }
  liste(){
    this.route.navigate(['/liste']);
  }
  deconnexion(){
    this.route.navigate(['/connexion']);
  }

}
