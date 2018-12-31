import { TemplateService } from '../services/template.service';
import Template from '../models/template.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  constructor(
    // Private templateservice will be injected into the component by Angular Dependency Injector
    private templateService: TemplateService
  ) {}

  // An Empty list for the visible template list
  templatesList: Template[];

  ngOnInit(): void {
    // At component initialization the
    this.templateService.getTemplates().subscribe(templates => {
      // assign the templateslist property to the proper http response
      this.templatesList = templates;
      console.log(templates);
    });
  }
}
