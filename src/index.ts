import { justT as just } from "./Tracables/Source/Core"

const just$ = just(0);
const constant$ = just$.constant(true);
const map$ = constant$.map(x => !x);

// const listener$ = map$
//   .tap(x => {
//     console.log(`[${map$.getId()}]`, x)
//   })
//   .constant(false)

map$.observe(x => console.log("map$.observe", x));
