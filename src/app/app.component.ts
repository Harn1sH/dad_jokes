import { Component, OnInit } from '@angular/core';
import { JokesService } from './service/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jokes !: any
  constructor(private jokeService: JokesService) { }
  
  ngOnInit(): void {
    this.handleAnother()
   }

  handleAnother() {
    this.jokeService.getJokes().subscribe(data => {
      console.log(data);
      this.jokes = data
      console.log(this.jokes.joke);
      
    })
  }

}
