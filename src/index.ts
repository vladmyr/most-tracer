import { just } from "./Tracables/Source/Core"

const const$ = just(0).constant(true);

const$.observe(x => console.log("const.observe", x));
