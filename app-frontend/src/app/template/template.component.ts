import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';
import Template from '../models/template.model';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(private templateService: TemplateService) {
  }

  public newTemplate: Template = new Template(
    'default',
    'default',
    false,
    'default',
    ['Hello',
      '{type: "noun", subtype: "name", word: "Mr. Default"}']
  );
  templatesList: Template[];
  editTemplates: Template[];

  ngOnInit(): void {
    // Component initialization
    this.templateService.getTemplates().subscribe(templates => {
      this.templatesList = templates;
    });
  }

  create(title: string, createdBy: string, isProfane: boolean, category: string, body: [string]) {
    this.templateService.createTemplate(this.newTemplate)
      .subscribe((res) => {
        // this.templatesList.push(res);
        this.newTemplate = new Template(title, createdBy, isProfane, category, body);
      });
  }

  editTemplate(template: Template) {
    if (this.templatesList.includes(template)) {
      if (!this.editTemplates.includes(template)) {
        this.editTemplates.push(template);
      } else {
        this.editTemplates.splice(this.editTemplates.indexOf(template), 1);
        this.updateTemplate(template);
      }
    }
  }

  updateTemplate(template: Template) {
    this.templateService.editTemplate(template).subscribe(
      res => {
        console.log('Update successful');
      },
      err => {
        console.log('Update unsuccessful');
      }
    );
  }

  deleteTemplate(template: Template) {
    this.templateService.deleteTemplate(template._id).subscribe(res => {
      this.templatesList.splice(this.templatesList.indexOf(template), 1);
    });
  }
}
