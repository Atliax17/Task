import { Component, OnInit } from '@angular/core';
import { TaskService } from "../services/task.service";
import { Task } from '../models/task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: string;
  description: string;

  model: FormGroup

  constructor(public taskService: TaskService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.model = this.formBuilder.group({
      titre: ['', [
        Validators.required
      ]]
    })
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    return false;
  }

  get titre(){
    return this.model.get('titre')
  }


}
