import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WordsComponent } from './words/words.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoryComponent } from './story/story.component';
import { TemplateComponent } from './template/template.component';
import {PlayComponent} from './play/play.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'words', component: WordsComponent },
  { path: 'play', component: PlayComponent },
  { path: 'templates', component: TemplateComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
