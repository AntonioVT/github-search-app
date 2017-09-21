import { UserDetailComponent } from './views/user/user-detail/user-detail.component';
import { GitApiRouteActivatorService } from './services/git-api-route-activator.service';
// Angular libs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AllmedicalrecordsComponent } from './views/allmedicalrecords/allmedicalrecords.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'user/:id', component: UserComponent, canActivate: [GitApiRouteActivatorService], children: [
            { path: '', component: UserDetailComponent },
        ]
    },
    { path: 'medicalrecords', component: AllmedicalrecordsComponent },
    { path: 'medicalrecords/:id', component: UserComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
