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
import { WordFormComponent } from './word-form/word-form.component';
import { TemplateComponent } from './template/template.component';
import { StoryComponent } from './story/story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordService } from './services/word.service';
import { StoryService } from './services/story.service';
import { PlayComponent } from './play/play.component';
import { PlayService } from './services/play.service';
import { PlayMadlibComponent } from './play-madlib/play-madlib.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent,
    WordsComponent,
    WordFormComponent,
    TemplateComponent,
    StoryComponent,
    PlayComponent,
    PlayMadlibComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TemplateService, WordService, StoryService, PlayService],
  bootstrap: [AppComponent]
})
export class AppModule {}
