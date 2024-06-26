import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MediplusComponent } from "../components/mediplus/mediplus.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MediplusComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
