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
  ngOnInit() {
    this.playService.getTemplates().subscribe( templates => {
      this.templatesList = templates.data.docs;
      console.log(templates);
    });
  }
}
