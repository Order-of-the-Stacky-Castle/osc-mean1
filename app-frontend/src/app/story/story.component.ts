import {Component, OnInit} from '@angular/core';
import {StoryService} from '../services/story.service';
import {Story} from '../models/story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor(private storyService: StoryService) {
  }

  newStory: Story = new Story();

  storiesList: Story[];

  ngOnInit() {
    this.storyService.getStories().subscribe(story => {
      //assign the todolist property to the proper http response
      this.storiesList = story.data.docs;
      console.log(story);
    });
  }
}
