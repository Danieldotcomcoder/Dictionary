import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private fetchData: FetchDataService) {
    
   }

  Word:string = 'Dictionary'
  wordData: any
  WordSynonyms: any
  ngOnInit(): void {
    this.getWordInfo(this.Word)
    this.getSynonyms(this.Word)
  }

  getWordInfo(word: string) {
       this.fetchData.getWordDetails(word).subscribe({
        next: (response: any) => {
          this.wordData = response
          console.log(this.wordData);
      
        }
      })
  }
  getSynonyms(word: string) {
       this.fetchData.getWordSynonyms(word).subscribe({
        next: (response: any) => {
          this.WordSynonyms = response.synonyms
          console.log(this.WordSynonyms);
      
        }
      })
  }

  onSubmit() {
    this.getWordInfo(this.Word)
    this.getSynonyms(this.Word)
  }
}
