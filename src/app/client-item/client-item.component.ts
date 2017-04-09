import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {
  @Input() client: {name: string, description: string};
  constructor() { }

  ngOnInit() {
  }

}
