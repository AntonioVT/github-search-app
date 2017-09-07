// Angular libs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}