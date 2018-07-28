import { justT as just } from "./Tracables/Source/Core"
import EventBus from "./Infrastructure/EventBus";

EventBus.AddListener((recordEvent) => {
  console.log(recordEvent.toJSON());
})

const just$ = just(0);
const constant$ = just$.constant(true);
const map$ = constant$.map(x => !x);

map$.subscribe({
  next: Function.prototype as any,
  error: Function.prototype as any,
  complete: Function.prototype as any
});
