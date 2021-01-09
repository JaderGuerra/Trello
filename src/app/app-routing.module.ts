import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', loadChildren: () => import('./home/pages/home/home.module').then(m => m.HomeModule) 
  },
   {
     path: 'login', loadChildren: () => import('./auth/pages/login/login.module').then(m => m.LoginModule) 
  },
   {
     path: 'singup', loadChildren: () => import('./auth/pages/login/login.module').then(m => m.LoginModule) 
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
