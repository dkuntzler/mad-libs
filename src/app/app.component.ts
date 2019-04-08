import { Component } from '@angular/core';


/*function myFunction() {
  const x = document.getElementById("slotOne").value;
  document.getElementById("noun").innerHTML = x;

  const y = document.getElementById("slotTwo").value;
  document.getElementById("adverb").innerHTML = y;

}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Dana';
  noun = 'noun';
  adverb = adverb;
  appInput: string = null;
  hideTitle: boolean = true;
}

appInput: object = {
};

toggleHeader = () => {
  this.hideTitle = !this.hideTitle;

}