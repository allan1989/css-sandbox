import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MediplusComponent } from "../components/mediplus/mediplus.component";
import { InstitutBoosterComponent } from "../components/institut-booster/institut-booster.component";
import { ResponsiveImagesComponent } from "../components/responsive-images/responsive-images.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MediplusComponent, InstitutBoosterComponent, ResponsiveImagesComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent { }
