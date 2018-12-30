import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  templates: string[] = [];

  add(template: string) {
    this.templates.push(template);
  }

  clear() {
    this.templates = [];
  }
}
