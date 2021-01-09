import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
   {
     path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.LoginModule) 
  },
   {
     path: 'singup', loadChildren: () => import('./auth/auth.module').then(m => m.LoginModule) 
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
