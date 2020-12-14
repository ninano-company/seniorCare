import { Component, OnInit } from '@angular/core';

export interface Task {
  name: string;
  completed: string;
  subtasks?: Task[];
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  task: Task = {
    name: '전체',
    completed: '',
    subtasks: [
      {name: '응급상황', completed: '' },
      {name: '기타', completed: '' },
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed = 'checked');
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = 'checked');
  }

  constructor() {}

  ngOnInit(): void {
  }

}
