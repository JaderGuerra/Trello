import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';


const routes: Routes = [
  { 
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
   {
     path: 'usuario', loadChildren: () => import('./auth/auth.module').then(m => m.LoginModule) 
  },
  { 
    path: 'tablas', 
    loadChildren: () => import('./tablero/pages/tablas/tablas.module').then(m => m.TablasModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
