import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  private values:number[] = [6, 2];
  private total:number = this.values[0] * this.values[1];
  private somevar:string = 'Example';
}
