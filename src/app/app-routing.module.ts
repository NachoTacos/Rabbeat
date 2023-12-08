import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'artistas',
    loadChildren: () => import('./artistas/artistas.module').then( m => m.ArtistasPageModule)
  },
  {
    path: 'eliminarartista',
    loadChildren: () => import('./eliminarartista/eliminarartista.module').then( m => m.EliminarartistaPageModule)
  },
  {
    path: 'anadirartista',
    loadChildren: () => import('./anadirartista/anadirartista.module').then( m => m.AnadirartistaPageModule)
  },
  {
    path: 'ambrosia',
    loadChildren: () => import('./ambrosia/ambrosia.module').then( m => m.AmbrosiaPageModule)
  },
  {
    path: 'daltonico',
    loadChildren: () => import('./daltonico/daltonico.module').then( m => m.DaltonicoPageModule)
  },
  {
    path: 'madrileno',
    loadChildren: () => import('./madrileno/madrileno.module').then( m => m.MadrilenoPageModule)
  },
  {
    path: 'grow',
    loadChildren: () => import('./grow/grow.module').then( m => m.GrowPageModule)
  },
  {
    path: 'puberty2',
    loadChildren: () => import('./puberty2/puberty2.module').then( m => m.Puberty2PageModule)
  },
  {
    path: 'dos',
    loadChildren: () => import('./dos/dos.module').then( m => m.DosPageModule)
  },
  {
    path: 'queen',
    loadChildren: () => import('./queen/queen.module').then( m => m.QueenPageModule)
  },
  {
    path: 'virginia',
    loadChildren: () => import('./virginia/virginia.module').then( m => m.VirginiaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
