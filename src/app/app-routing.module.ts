import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { InfosComponent } from './infos/infos.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeAmisComponent } from './liste-amis/liste-amis.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'connexion',component:ConnexionComponent},{
  path:'inscription', component:InscriptionComponent,
}, {path:'infos', component:InfosComponent, canActivate:[AuthGuard]},
{ path: 'update',component:UpdateComponent, canActivate:[AuthGuard]},
{ path: 'liste',component:ListeAmisComponent, canActivate:[AuthGuard]},
{ path: 'updateFood',component:UpdateFoodComponent, canActivate:[AuthGuard]},
{path: 'not-found',component:NotFoundComponent},
{ path: '',   redirectTo: '/connexion', pathMatch: 'full' },
{ path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
