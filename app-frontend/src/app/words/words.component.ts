import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.scss"]
})
export class WordsComponent implements OnInit {
  constructor() {}

  wordsList = [
    {
      word: "Bojack",
      type: "Noun",
      plural: false,
      profane: true
    },
    {
      word: "Cry",
      type: "Verb",
      plural: false,
      profane: false
    },
    {
      word: "Fuzzies",
      type: "Noun",
      plural: true,
      profane: false
    }
  ];

  ngOnInit() {}
}
