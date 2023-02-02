import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from '../core/guards/permissions.guard';

const routes: Routes = [{
    path:'login',
    loadChildren: ()=> import('../pages/auth-login/auth-login.module').then(m=> m.AuthLoginModule)
    },
    {
        path:'auth-registro',
        loadChildren: ()=> import('../pages/auth-registro/auth-registro.module').then(m=> m.AuthRegistroModule),
    },
    {
        path:'page-not-found',
        loadChildren: ()=> import('../pages/page-not-found/page-not-found.module').then(m=> m.PageNotFoundModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }