import { Observable, interval, timer, fromEvent, of, from, take } from "rxjs";
import {
  map,
  pluck,
  filter,
  reduce,
  scan,
  tap,
  mergeMap,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// const observable = new Observable((subscriber) => {
//   //   subscriber.next("hello world");
//   //   subscriber.error("Error");
//   //   subscriber.next("test");
//   //   subscriber.complete(); // to manually terminate observables

//   const id = setInterval(() => {
//     subscriber.next("text");
//     console.log("leak");
//   }, 1000);

//   subscriber.complete();

//   return () => {
//     clearInterval(id);
//   };
// });

// interval ========>
// const observable = fromEvent(document, "keydown").pipe(
//   map((event) => event.code)
// );

// const observable = fromEvent(document, "keydown").pipe(pluck("code")); // getting specific object key value like event.code

// const numbersWithSymbols = observable.pipe(map((value) => `$${value}`));

// console.log('before');

// const observable = fromEvent(document, "keydown").pipe(
//   pluck("code"),
//   filter((code) => code === "Space")
//   map((event) => {
//     return event.code === "Space" ? event.code : null;
//   })
// );

// const observable = of(1, 2, 3, 4, 5).pipe(reduce((acc, val) => acc + val, 0)); // reduce

// const observable = interval(500).pipe(
//   take(5),
//   tap({
//     next(val) {
//       console.log(val);
//     },
//   }),
//   reduce((acc, val) => acc + val, 0)
// );

const button = document.querySelector("#btn");
const observable = fromEvent(button, "click").pipe(
  mergeMap(() => {
    return ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1");
  })
);

// const subscription = observable.subscribe(console.log);

const subscription = observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("complete called!!");
  },
  error: (error) => {
    console.error(error);
  },
});

// setTimeout(() => {
//   subscription.unsubscribe();
// },1000);

// console.log("after");

console.log("hello");
