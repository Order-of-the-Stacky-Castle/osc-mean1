export class Template {
  _id: string;
  title: string;
  createdBy: string;
  isProfane: boolean;
  category: string;
  body: [string];

  constructor(title, createdBy, isProfane, category, body){
    this.title = title;
    this.createdBy = createdBy;
    this.isProfane = isProfane;
    this.category = category;
    this.body = body;
  }
}
export default Template;
