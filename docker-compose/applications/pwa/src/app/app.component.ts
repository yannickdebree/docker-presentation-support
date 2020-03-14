import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public message = "Loading...";

  constructor(private readonly http: HttpClient) { }

  public ngOnInit(): void {
    this.http.get(environment.apiUrl, { responseType: "text" }).pipe(first()).subscribe((message: string) => {
      this.message = message;
    })
  }
}
