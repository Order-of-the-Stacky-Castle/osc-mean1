import { Component, OnInit, ViewChild } from '@angular/core';
import { WordService } from '../services/word.service';
import { Word } from '../models/words.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.scss"]
})
export class WordsComponent implements OnInit {
  constructor(private wordService: WordService) {}
  @ViewChild("w") wordForm: NgForm;
  formVisible = false;

  //  // Declaring the new Word Object and initilizing it
  newWord: Word = new Word();
  types = ["noun", "verb", "adjective", "adverb"];

  //  // An Empty list for the visible Word list
  wordsList: Word[];
  editWords: Word[] = [];

  //  wordsList = [
  //    {
  //      word: "Bojack",
  //      type: "Noun",
  //      plural: false,
  //      profane: true
  //    },
  //    {
  //      word: "Cry",
  //      type: "Verb",
  //      plural: false,
  //      profane: false
  //    },
  //    {
  //      word: "Fuzzies",
  //      type: "Noun",
  //      plural: true,
  //      profane: false
  //    }
  //  ];

  ngOnInit() {
    this.wordService.getWords().subscribe(words => {
      //  assign the Wordlist property to the proper http response
      this.wordsList = words.data.docs;
      console.log(words);
    });
  }

  getAll() {
    this.wordService.getWords().subscribe(words => {
      // assign the Wordlist property to the proper http response
      this.wordsList = words.data.docs;
      console.log(words);
    });
  }

  getNouns() {
    this.wordService.getWords().subscribe(words => {
      let allWords = words.data.docs;
      this.wordsList = allWords.filter(word => word.type === "noun");
    });
    //  this.wordsList = this.wordsList.filter(word => word.type === "noun");
  }

  getVerbs() {
    //  this.wordsList = this.wordsList.filter(word => word.type === "verb");
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
    //  this.wordsList = this.wordsList.filter(word => word.type === "verb");
    this.wordService.getWords().subscribe(words => {
      let allWords = words.data.docs;
      this.wordsList = allWords.filter(word => word.type === "adverb");
    });
  }

  // create(e) {
  //   let nWord = new Word();
  //   nWord.word = e.form.value.word;
  //   nWord.type = e.form.value.type;
  //   this.wordService.createWord(nWord).subscribe(res => {
  //     console.log("res data says... ", res.data);
  //     this.wordsList.push(res.data);
  //     // this.newWord = new Word();
  //     // this.newWord.word = e.form.value.word
  //     // let newWord = this.newWord;
  //     // this.wordsList.push(newWord)
  //   });
  // }

  create() {
    console.log('newwordis',this.newWord)
    this.wordService.createWord(this.newWord)
      .subscribe((res) => {
        console.log("sponsy", res.data)
        this.wordsList.push(res.data)
        this.newWord = new Word()
      })
  }

  deleteWord(word: Word) {
    this.wordService.deleteWord(word._id).subscribe(res => {
      this.wordsList.splice(this.wordsList.indexOf(word), 1);
    });
  }

  showForm() {
    if (this.formVisible === true) {
      this.formVisible = false;
    } else {
      this.formVisible = true;
    }
  }
}
