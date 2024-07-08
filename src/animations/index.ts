import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
} from "@angular/animations";

export const toggleTreatmentOffers = trigger("openClose", [
  state(
    "open",
    style({
      gridTemplateRows: "min-content 1fr",
      overflow: 'visible'
    })
  ),
  state(
    "closed",
    style({
      gridTemplateRows: "min-content 0fr",
      overflow: 'hidden'
    })
  ),
  transition("open => closed", [animate("0.25s ease-in")]),
  transition("closed => open", [animate("0.25s ease-out")]),
]);
