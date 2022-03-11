import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'phone-number',
    loadChildren: () => import('./pages/phone-number/phone-number.module').then( m => m.PhoneNumberPageModule)
  },
  {
    path: 'code-number/:phone_number',
    loadChildren: () => import('./pages/code-number/code-number.module').then( m => m.CodeNumberPageModule)
  },
  {
    path: 'data-client',
    loadChildren: () => import('./pages/data-client/data-client.module').then( m => m.DataClientPageModule)
  },
  {
    path: 'terms-contidion',
    loadChildren: () => import('./pages/terms-contidion/terms-contidion.module').then( m => m.TermsContidionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
