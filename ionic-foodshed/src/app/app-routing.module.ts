import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MapPageModule } from './map/map.module';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'fridges', loadChildren: './fridges/fridges.module#FridgesPageModule' },
  { path: 'fridge-info', loadChildren: './fridges/fridge-info/fridge-info.module#FridgeInfoPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'members', loadChildren: './members/members.module#MembersPageModule' },
  // Temp fix to redirect
  { path: 'map/map', redirectTo: 'map', pathMatch: 'full' },
  { path: 'about/map', redirectTo: 'map', pathMatch: 'full' },
  { path: 'fridges/map', redirectTo: 'map', pathMatch: 'full' },
  { path: 'fridge-info/map', redirectTo: 'map', pathMatch: 'full' },
  { path: 'login/map', redirectTo: 'map', pathMatch: 'full' },
  { path: 'members/map', redirectTo: 'map', pathMatch: 'full' },

  { path: 'map/about', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about/about', redirectTo: 'about', pathMatch: 'full' },
  { path: 'fridges/about', redirectTo: 'about', pathMatch: 'full' },
  { path: 'fridge-info/about', redirectTo: 'about', pathMatch: 'full' },
  { path: 'login/about', redirectTo: 'about', pathMatch: 'full' },
  { path: 'members/about', redirectTo: 'about', pathMatch: 'full' },

  { path: 'map/fridges', redirectTo: 'fridges', pathMatch: 'full' },
  { path: 'about/fridges', redirectTo: 'fridges', pathMatch: 'full' },
  { path: 'fridges/fridges', redirectTo: 'fridges', pathMatch: 'full' },
  { path: 'fridge-info/fridges', redirectTo: 'fridges', pathMatch: 'full' },
  { path: 'login/fridges', redirectTo: 'fridges', pathMatch: 'full' },
  { path: 'members/fridges', redirectTo: 'fridges', pathMatch: 'full' },

  { path: 'map/fridge-info', redirectTo: 'fridge-info', pathMatch: 'full' },
  { path: 'about/fridge-info', redirectTo: 'fridge-info', pathMatch: 'full' },
  { path: 'fridges/fridge-info', redirectTo: 'fridge-info', pathMatch: 'full' },
  { path: 'fridge-info/fridge-info', redirectTo: 'fridge-info', pathMatch: 'full' },
  { path: 'login/fridge-info', redirectTo: 'fridge-info', pathMatch: 'full' },
  { path: 'members/fridge-info', redirectTo: 'fridge-info', pathMatch: 'full' },
  
  { path: 'map/login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'about/login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'fridges/login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'fridge-info/login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login/login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'members/login', redirectTo: 'members', pathMatch: 'full' },
];

// const routes: Routes = [
//   {
//     path: 'home',
//     // component: MapPageModule,
//     children: [
//       {
//         path: 'about',
//         children: [
//           {
//             path: '',
//             // loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule),
//             loadChildren: './about/about.module#AboutPageModule',
//           }
//         ]
//       },
//       {
//         path: 'map',
//         children: [
//           {
//             path: '',
//             // loadChildren: () => import('./map/map.module').then(m => m.MapPageModule),
//             loadChildren: './map/map.module#MapPageModule',
//           },
//         ]
//       },
//       {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: 'home/about',
//     pathMatch: 'full',
//   },
//   { path: 'home', loadChildren: './home/home.module#HomePageModule' },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
