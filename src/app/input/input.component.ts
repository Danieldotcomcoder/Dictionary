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
  wordData: any
  ngOnInit(): void {
    this.getWordInfo('Happy')
  }

  getWordInfo(word: string) {
       this.fetchData.getWordDetails(word).subscribe({
        next: (response: any) => {
          this.wordData = response
          console.log(this.wordData);
      
        }
      })
  }
}
