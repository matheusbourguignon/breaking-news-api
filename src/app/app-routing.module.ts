import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // Altere para redirecionar à home
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/countries/countries.module').then(m => m.CountriesPageModule),
  },
  {
    path: 'details/:name',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
