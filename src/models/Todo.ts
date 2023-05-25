// export class Todo {
//   constructor(public name: string, public isDone: boolean, public id: number) {}
// }

export class Todo {
  isDone: boolean;
  constructor(public name: string, public id: number) {
    this.isDone = false;
  }
}
