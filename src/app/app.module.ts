import { GitApiRouteActivatorService } from './services/git-api-route-activator.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownDirective } from './directives/dropdown.directive';

// Services
import { GitApiService } from './services/git-api.service';
import { BackendApiService } from './services/backendapi.service';
import { ModalComponent } from './components/modal/modal.component';
import { HttpModule } from '@angular/http';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { UserComponent } from './views/user/user.component';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
import { BlankDirective } from './directives/blank.directive';
import { AllmedicalrecordsComponent } from './views/allmedicalrecords/allmedicalrecords.component';
import { UserDetailComponent } from './views/user/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownDirective,
    ModalComponent,
    BusinessCardComponent,
    HomeComponent,
    NotFoundComponent,
    UserComponent,
    BusinessDetailComponent,
    BlankDirective,
    AllmedicalrecordsComponent,
    UserDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitApiService, BackendApiService, GitApiRouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
