import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {name: 'server name', description: 'ddsds'},
    {name: 'server name', description: 'ddsds'}
  ];

  clientElements = [
    {name: 'client name', description: 'client description'},
    {name: 'client name', description: 'client description'},
  ];
}