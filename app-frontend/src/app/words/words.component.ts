import { Component, OnInit } from '@angular/core';
import { WordService } from "../services/word.service";
import { Word } from "../models/words.model";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.scss"]
})
export class WordsComponent implements OnInit {
  constructor(private wordService: WordService) {}

  // //Declaring the new todo Object and initilizing it
  newWord: Word = new Word();

  // //An Empty list for the visible Word list
  wordsList: Word[];
  editWords: Word[] = [];

  // wordsList = [
  //   {
  //     word: "Bojack",
  //     type: "Noun",
  //     plural: false,
  //     profane: true
  //   },
  //   {
  //     word: "Cry",
  //     type: "Verb",
  //     plural: false,
  //     profane: false
  //   },
  //   {
  //     word: "Fuzzies",
  //     type: "Noun",
  //     plural: true,
  //     profane: false
  //   }
  // ];

  ngOnInit() {
    this.wordService.getWords().subscribe(words => {
      //assign the todolist property to the proper http response
      this.wordsList = words.data.docs;
      console.log(words);
    });
  }

  getAll() {
    this.wordService.getWords().subscribe(words => {
      //assign the todolist property to the proper http response
      this.wordsList = words.data.docs;
      console.log(words);
    });
  }

  getNouns() {
    this.wordService.getWords().subscribe(words => {
      let allWords = words.data.docs;
      this.wordsList = allWords.filter(word => word.type === "noun");
    });
    // this.wordsList = this.wordsList.filter(word => word.type === "noun");
  }

  getVerbs() {
    // this.wordsList = this.wordsList.filter(word => word.type === "verb");
    this.wordService.getWords().subscribe(words => {
      let allWords = words.data.docs;
      this.wordsList = allWords.filter(word => word.type === "verb");
    });
  }

  getAdjectives() {
    this.wordService.getWords().subscribe(words => {
      let allWords = words.data.docs;
      this.wordsList = allWords.filter(word => word.type === "adjective");
    });
  }

  getAdverbs() {
    // this.wordsList = this.wordsList.filter(word => word.type === "verb");
    this.wordService.getWords().subscribe(words => {
      let allWords = words.data.docs;
      this.wordsList = allWords.filter(word => word.type === "adverb");
    });
  }

  create() {
    this.wordService.createWord(this.newWord).subscribe(res => {
      this.wordsList.push(res.data);
      this.newWord = new Word();
    });
  }
}