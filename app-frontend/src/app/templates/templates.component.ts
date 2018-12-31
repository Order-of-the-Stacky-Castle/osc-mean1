import { TemplateService } from '../services/templates.service';
import Template from '../models/templates.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  constructor(
    //Private templateservice will be injected into the component by Angular Dependency Injector
    private templateService: TemplateService
  ) {}

  //An Empty list for the visible template list
  templatesList: Template[];

  ngOnInit(): void {
    //At component initialization the
    this.templateService.getTemplates().subscribe(templates => {
      //assign the templateslist property to the proper http response
      this.templatesList = templates;
      console.log(templates);
    });
  }
}
