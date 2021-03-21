import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OptService } from '../opt.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private opt:OptService) { }
    addForm=this.fb.group({
      login:['',Validators.required]
    })
    repas:any
  ngOnInit(): void {
    this.repas=this.opt.user.nourriture;
  }
  supprimer(id){
    console.log(id)

    this.opt.supprimerRepas(id).then(resultat=>console.log(resultat))
        this.repas.splice(id,1)
  }
  onSubmit(){
    this.opt.addRepas(this.addForm.get('login').value)
    this.repas.push(this.addForm.get('login').value)
  }
}
