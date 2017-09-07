import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownDirective } from './directives/dropdown.directive';

// Services
import { GitApiService } from './services/git-api.service';
import { ModalComponent } from './components/modal/modal.component';
import { HttpModule } from "@angular/http";
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { UserComponent } from './views/user/user.component';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
import { BlankDirective } from './directives/blank.directive';

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
    BlankDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
