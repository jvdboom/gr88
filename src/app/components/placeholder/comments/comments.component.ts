import { Component, OnInit } from "@angular/core";
import { JsonPlaceholderService } from "../../../shared/json-placeholder.service";
import { Observable } from "rxjs/Observable";

import { Comment } from "../../../models/comment";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {

  public comments$: Observable<Comment[]>;
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
    "Name": {
      "required": "Name is required.",
      "minlength": "Name must be at least 2 characters long.",
      "maxlength": "Name cannot be more than 50 characters long."
    },
    "CustomerNumber": {
      "required": "CustomberNumber is required.",
      "minlength": "CustomberNumber must be at least 2 characters long.",
      "maxlength": "CustomberNumber cannot be more than 15 characters long."
    },
    "CountryCodeID": {
      "required": "Country is required."
    },
    "Active": {
      "required": "Active is required."
    }
  };

  constructor(private jsonPlaceholderService: JsonPlaceholderService,
    private baseFormBuilder: FormBuilder) {
    this.comment = new Comment();
    this.comments$ = jsonPlaceholderService.getRows("comment");
  }

  ngOnInit() {
    this.initializeForm();
  }

  onRowSelect(event: any) {
    this.comment = event.data;
    this.initializeForm();
  }

  initializeForm() {
    this.baseForm = this.baseFormBuilder.group({
      "id": this.comment.id,
      "postId": this.comment.postId,
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
  }
}
