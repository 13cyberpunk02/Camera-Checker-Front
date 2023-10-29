import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';
import { CameraComponent } from './camera/camera.component';
import { authorizationGuard } from './shared/guards/authorization.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //Lazy loading by this format
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authorizationGuard],
    children: [
      { path: 'camera', component: CameraComponent }
    ]
  },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
