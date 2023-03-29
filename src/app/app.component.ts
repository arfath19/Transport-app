import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'transport-app';
  public onCellValueChanged(event:any){
    console.log(event)

  }
}

// transport-app firebase app name