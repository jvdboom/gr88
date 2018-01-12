import { Component, OnInit } from "@angular/core";
import { JsonPlaceholderService } from "../../../shared/json-placeholder.service";
import { Observable } from "rxjs/Observable";

import { Comment } from "../../../models/comment";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {

  public comments$: Observable<Comment[]>;
  public events: any[] = [];
  public testing: string = "testing";

  selectedComment: Comment;
  comment: Comment;

  public baseForm: FormGroup;

  formErrors = {
    "id": "",
    "postId": "",
    "name": "",
    "email": "",
    "body": ""
  };

  validationMessages = {
    "id": {
      "required": "Name is required.",
      "minlength": "Name must be at least 2 characters long.",
      "maxlength": "Name cannot be more than 50 characters long."
    },
    "postId": {
      "required": "CustomberNumber is required.",
      "minlength": "CustomberNumber must be at least 2 characters long.",
      "maxlength": "CustomberNumber cannot be more than 15 characters long."
    },
    "name": {
      "required": "Country is required."
    },
    "email": {
      "required": "Active is required."
    }
  };

  constructor(private jsonPlaceholderService: JsonPlaceholderService,
    private baseFormBuilder: FormBuilder) {
    this.comment = new Comment();
    this.comments$ = jsonPlaceholderService.getRows("comment");
    this.initializeForm();
    // this.baseForm.valueChanges
    // .subscribe(data => this.subcribeToFormChanges(data));
  }

  ngOnInit() {

  }

  onRowSelect(event: any) {
    this.comment = event.data;
    this.initializeForm();
  }

  initializeForm() {
    this.baseForm = this.baseFormBuilder.group({
      "id": [this.comment.id, [Validators.required, Validators.min(1)]],
      "postId": [this.comment.postId, [Validators.required, Validators.min(1), Validators.minLength(1)]],
      "name": this.comment.name,
      "email": this.comment.email,
      "body": this.comment.body,
      // "TaskTypeDefinitionID": this.cSystemTaskDefinition.TaskTypeDefinitionID,
      // "TaskType": this.cSystemTaskDefinition.TaskType,
      // "Name": [this.cSystemTaskDefinition.Name, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      // // tslint:disable-next-line:max-line-length
      // "Description": [this.cSystemTaskDefinition.Description, [Validators.required, Validators.maxLength(250)]],
      // "Schedule": [this.cSystemTaskDefinition.Schedule, [Validators.required, Validators.maxLength(50)]],
      // "CosmosWorkflowID": [this.cSystemTaskDefinition.CosmosWorkflowID, Validators.required],
      // "Active": [this.cSystemTaskDefinition.Active]
    });

    this.baseForm.valueChanges
      .subscribe(data => this.subcribeToFormChanges(data));
  }

  onclick(){
    this.testing = "hallooo";
  }

  subcribeToFormChanges(data?: any): void {
    // Use this for debugging
    const myFormStatusChanges$ = this.baseForm.statusChanges;
    const myFormValueChanges$ = this.baseForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: "STATUS_CHANGED", object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: "VALUE_CHANGED", object: x }));

    if (!this.baseForm) {
      return;
    }

    const form: FormGroup = this.baseForm;

    for (const field of Object.keys(this.formErrors)) {
      // clear previous error message (if any)
      this.formErrors[field] = "";
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages: any = this.validationMessages[field];
        for (const key of Object.keys(control.errors)) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }
}

