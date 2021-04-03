import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.css']
})
export class FormBasicComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })

    this.myForm = this.fb.group({
      email: '',
      message: '',
      career: '',
      cellPhone: phone,
      homePhone: phone,
      tasks: this.fb.array([])
    })
  }

  get taskForms() {
    return this.myForm.get('tasks') as FormArray
  }

  addTask() {
    const task = this.fb.group({
      message: [],
      type: []
    })

    this.taskForms.push(task);
  }

  deleteTask(index) {
    this.taskForms.removeAt(index);
  }

}
