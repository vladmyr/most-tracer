# most-tracer
Visualize and trace your most.js streams

## API Covered
1. Creating streams
    - [x] `most.just`, alias `most.of`
    - [x] `most.fromPromise`
    - [x] `most.from`
    - [x] `most.periodic`
    - [x] `most.empty`
    - [x] `most.never`
    - [ ] `most.iterate`
    - [ ] `most.unfold`
    - [ ] `most.generate`
    - [ ] `most.fromEvent`
    - [x] `startWith`
    - [x] `concat`
1. Handling errors
    - [x] `recoverWith`, alias `flatMapError`
    - [ ] `most.throwError`
1. Transforming streams
    - [x] `map`
    - [x] `constant`
    - [x] `scan`
    - [x] `chain`, alias `flatMap`
    - [x] `continueWith`, alias `flatMapEnd`
    - [x] `concatMap`
    - [x] `ap`
    - [x] `timestamp`
    - [x] `tap`
1. Filtering streams
    - [x] `filter`
    - [x] `skipRepeats`
    - [x] `skipRepeatsWith`
1. Transducer support
    - [ ] `transduce`
1. Slicing streams
    - [ ] `slice`
    - [ ] `take`
    - [ ] `skip`
    - [ ] `takeWhile`
    - [ ] `skipWhile`
    - [ ] `skipAfter`
    - [ ] `until`, alias `takeUntil`
    - [ ] `since`, alias `skipUntil`
    - [ ] `during`
1. Looping
    - [ ] `loop`
1. Adapting fluent APIs
    - [ ] `thru`
1. Consuming streams
    - [ ] `reduce`
    - [ ] `observe`, alias `forEach`
    - [ ] `drain`
    - [ ] `subscribe`
1. Combining streams
    - [ ] `merge`
    - [ ] `mergeArray`
    - [ ] `combine`
    - [ ] `combineArray`
    - [ ] `sample`
    - [ ] `sampleWith`
    - [ ] `zip`
1. Combining higher order streams
    - [ ] `switchLatest`, alias `switch`
    - [ ] `join`
    - [ ] `mergeConcurrently`
1. Awaiting promises
    - [x] `awaitPromises`, alias `await`
1. Rate limiting streams
    - [ ] `debounce`
    - [ ] `throttle`
1. Delaying streams
	- [ ] `delay`
1. Sharing stream
	- [ ] `multicast`

## License
MIT