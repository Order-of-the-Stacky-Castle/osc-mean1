import { HttpClientModule } from '@angular/common/http';
import { TemplateService } from './services/template.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WordsComponent } from './words/words.component';
import { WordFormComponent } from "./word-form/word-form.component";
import { TemplateComponent } from './template/template.component';
import { StoryComponent } from './story/story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordService } from "./services/word.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent,
    WordsComponent,
    WordFormComponent,
    TemplateComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TemplateService, WordService],
  bootstrap: [AppComponent]
})
export class AppModule {}
