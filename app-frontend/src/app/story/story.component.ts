import {Component, OnInit} from '@angular/core';
import {Template} from '../models/template.model';
import {StoryService} from '../services/story.service';
import { Story  } from '../models/story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  public templates: Template[];
  constructor(private storyService: StoryService) {
  }

  templatesList: Template[];
  storiesList: Story[];

  ngOnInit() {
    this.storyService.getStories()
      .subscribe(template => {
      this.templatesList = template.data.docs;
      console.log(template);
    });
  }

  getAll() {
    this.storyService.getStories().subscribe(story => {
      // assign the todolist property to the proper http response
      this.storiesList = story.data.docs;
      console.log(story);
    });
  }
}
