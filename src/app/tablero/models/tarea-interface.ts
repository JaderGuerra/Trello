export class Tarea {
  id: number;
  taskItem: string;

  constructor(taskItem:string){
    this.id = new Date().getTime()
    this.taskItem = taskItem;
  }
}