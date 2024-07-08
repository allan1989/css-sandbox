import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TreatmentComponent } from "./components/treatment/treatment.component";

@Component({
  selector: "app-institut-booster",
  standalone: true,
  imports: [TreatmentComponent],
  templateUrl: "./institut-booster.component.html",
  styleUrls: ["./institut-booster.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstitutBoosterComponent {
  public data = [
    {
      type: "Gommage Dos",
      duration: "20min",
      price: "30",
      description:
        " Gommage au sel marin et huiles essentielles. Ce soin enlève les cellules mortes à la surface de la peau et purifie l’épiderme. Il l’assouplit et le lisse pour plus de douceur et de confort, lui donnant un aspect moins sec et rugueux. Le gommage est suivi de l’application d’un baume hydratant, nourrissant et apaisant.",
    },
    {
      type: "Enveloppement Dos",
      duration: "",
      price: "16,00",
      description:
        "Les bienfaits de la mer sur votre peau. Les enveloppements à la boue revitalisent votre peau. Appliquée en couche épaisse, la boue, riche en minéraux et oligoéléments, apaise et reminéralise. L’enveloppement est très efficace après l’épilation pour calmer l’échauffement de la peau.",
    },
    {
      type: "Soins complet du visage",
      duration: "1h.",
      price: "77,00",
      description:
        "Un soin de base qui nettoie en profondeur, hydrate et unifie le teint. Tout type de peau. Permet d’éliminer les points noirs et impuretés pour une peau nette et fraîche. Ce soin est réalisé avec les produits suisses Task Essential.",
    },
    {
      type: "Pro Power Peel - Peeling Profond",
      duration: "1h.",
      price: "120,00",
      description:
        "Procure un effet peau neuve en déclenchant la régénération de la peau et augmente l'éclat du teint. Réduit : pigmentation, rugosités, boutons, rides et ridules. Basé sur une exfoliation profonde et adaptée à votre peau, ce peeling Dermalogica haute performance, puissant et efficace, répond aux besoins spécifiques de votre peau. Il comporte des contre-indications et nécessite des précautions après soin. Convient aux peaux acnéiques. Recommandé en cure de 3 ou 6 suivant l’état initial de la peau. Pour plus de confort, évitez de vous raser avant le soin.",
    },
  ];
}
