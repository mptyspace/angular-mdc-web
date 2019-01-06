import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Api, Examples, Sass, MenuSurfaceDemo } from './menu-surface-demo';

export const ROUTE_DECLARATIONS = [
  Api,
  Examples,
  Sass,
  MenuSurfaceDemo
];

const ROUTES: Routes = [
  {
    path: '', component: MenuSurfaceDemo,
    children: [
      { path: '', redirectTo: 'api' },
      { path: 'api', component: Api },
      { path: 'sass', component: Sass },
      { path: 'examples', component: Examples }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }
