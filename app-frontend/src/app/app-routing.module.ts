import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WordsComponent } from "./words/words.component";
import { WordFormComponent } from "./word-form/word-form.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoryComponent } from './story/story.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "words", redirectTo: "words/all", pathMatch: "full" },
  { path: "words/all", component: WordsComponent },
  { path: "words/nouns", component: WordsComponent },
  { path: "words/verbs", component: WordsComponent },
  { path: "words/adverbs", component: WordsComponent },
  { path: "words/adjectives", component: WordsComponent },
  { path: "words/new", component: WordFormComponent },
  { path: "play", component: StoryComponent },
  { path: "templates", component: TemplateComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
