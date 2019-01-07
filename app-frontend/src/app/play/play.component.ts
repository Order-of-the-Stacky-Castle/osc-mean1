import { Component, OnInit } from '@angular/core';
import Template from '../models/template.model';
import {PlayService} from '../services/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor(private playService: PlayService) { }

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
    for ( const template of this.templatesList) {
      if ( template._id === id) {
        this.currentTemplate = template;
      }
    }
    this.showTemplateSelect = false;
    this.showGetWordsForm = true;
  }
}
