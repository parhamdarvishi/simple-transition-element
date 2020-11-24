import { animate, style, transition, trigger } from "@angular/animations";
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  toggle: boolean = true;
  name = "Angular " + VERSION.major;
}
