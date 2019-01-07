import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss']
})
export class WordFormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}

  word: object;

  ngOnInit() {
    // this.route.params
    //   .subscribe((params: Params) => {
    //     (+params['id']) ? this.getRecordForEdit() : null;
    //   });
  }

}
