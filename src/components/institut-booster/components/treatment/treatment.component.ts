import {
  ChangeDetectionStrategy,
  Component,
  Input
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-treatment",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./treatment.component.html",
  styleUrls: ["./treatment.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreatmentComponent {
  @Input() type: string = "";
  @Input() duration: string = "";
  @Input() price: string = "";
  @Input() description: string = "";
  @Input() isLast!: boolean;

  public isOpen = false;

  toggleItem() {
    this.isOpen = !this.isOpen;
  }
}
