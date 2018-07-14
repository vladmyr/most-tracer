import { just } from "./Tracables/Source/Core"
// import { from }

const const$ = just(0)
  .constant(true)
  .map(x => !x)

const$.observe(x => console.log("const.observe", x));
