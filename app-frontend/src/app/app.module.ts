import { HttpClientModule } from '@angular/common/http';
import { TemplateService } from './services/template.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateComponent } from './template/template.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent,
    TemplateComponent,
    StoryComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
