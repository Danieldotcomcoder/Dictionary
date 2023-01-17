import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient  ) { }

  getWordDetails(word: string) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };
    return this.http.get('https://wordsapiv1.p.rapidapi.com/words/'+word, options)
  }

  getWordSynonyms(word: string) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '03518c50f0mshb2f93a5c3fbb56fp1a5e6ajsn175d3c928506',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };
    return this.http.get('https://wordsapiv1.p.rapidapi.com/words/'+word+'/synonyms', options)
  }
}
