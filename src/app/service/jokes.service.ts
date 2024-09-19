import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class JokesService {
  constructor(private http: HttpClient) {}

  getJokes() {
    return this.http.get(
      "https://icanhazdadjoke.com",
      {
        headers: { Accept: "application/json" }
      }
    );
  }
}
