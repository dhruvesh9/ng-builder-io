import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuilderBlock } from '@builder.io/angular';
@Component({
  selector: 'app-api-tester',
  templateUrl: './api-tester.component.html',
  styleUrls: ['./api-tester.component.css'],
})
export class ApiTesterComponent {
  apiUrl: string = 'https://dummyjson.com/products/1';
  responseCode: string = "";
  responseBody: any;

  constructor(private http: HttpClient) {}

  sendRequest() {
    this.http.get(this.apiUrl).subscribe(
      (data) => {
        this.responseBody = data;
        this.responseCode = "200"; // You can update this based on the actual response
      },
      (error) => {
        this.responseBody = error;
        this.responseCode = error.status; // Display the error status code
      }
    );
  }
}


BuilderBlock({
  tag: 'app-api-tester', // <-- use the component selector here
  name: 'REST API Tester Component',
  inputs: [
    {
      name: 'colorOptions', // <-- this name matches the Angular @Input() above
      type: 'array',
    },
  ],
})(ApiTesterComponent);