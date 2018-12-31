import { HttpClientModule } from '@angular/common/http';
import { TemplateService } from './services/templates.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayComponent } from './play/play.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent,
    PlayComponent,
    TemplatesComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
