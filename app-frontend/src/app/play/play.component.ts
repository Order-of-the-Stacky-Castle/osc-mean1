import {Component, OnInit, ViewChild} from '@angular/core';
import Template from '../models/template.model';
import {PlayService} from '../services/play.service';
import {FormControl, NgForm} from '@angular/forms';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor(private playService: PlayService) { }
  @ViewChild('play') playForm: NgForm;

  wordList: String[] = [];
  templatesList: Template[];
  showTemplateSelect: boolean;
  currentTemplate: Template;
  showGetWordsForm: boolean;
  showMadLib: boolean;
  ngOnInit() {
    this.playService.getTemplates().subscribe( templates => {
      this.templatesList = templates.data.docs;
      console.log(templates);
    });
    this.showTemplateSelect = true;
    this.showGetWordsForm = false;
    this.showMadLib = false;
  }

  getWords(id) {
    for ( const t of this.templatesList) {
      if ( t._id === id) {
        this.currentTemplate = t;
      }
    }
    // console.log("current template is", this.currentTemplate);
    this.currentTemplate.body.forEach(x => {
      if(typeof x === 'object') {
        this.wordList.push(x);
      }
    });
    console.log(this.wordList);
    // for(let part of this.currentTemplate.body){
    //   console.log(part);
    // }
    this.showTemplateSelect = false;
    this.showGetWordsForm = true;
  }

  generateMadlib(p){
    this.showGetWordsForm = false;
    this.showMadLib = true;
    let enteredWords = document.querySelectorAll('.bigballerword');
    console.log(this.wordList);
    console.log(enteredWords);
    console.log(p);
  }

}
