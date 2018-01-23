import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { SelectItem } from "primeng/primeng";
import { Message } from "primeng/components/common/message";
import { JsonPlaceholderService } from "../../services/json-placeholder.service";
import { GrowlService } from "../../services/growl.service";
import { Post } from "../../models/post";


@Component({
  selector: "app-editable-post-table",
  templateUrl: "./editable-post-table.component.html"
})
export class EditablePostTableComponent implements OnInit {
  /** p-growl */
  public _error: any;
  msgs: Message[] = [];

  public posts$: Observable<Post[]>;
  public editedPosts: Post[];
  public users$: Observable<Object[]>;
  public events: any[] = [];

  selectedUser: any;
  selectedPost: Post;
  addedPost: Post;
  selectItems: SelectItem[];
  post: Post;

  constructor(private jsonPlaceholderService: JsonPlaceholderService, private growlService: GrowlService) {
    growlService.clear();
    this.post = new Post();
    this.selectedPost = new Post();
    this.selectItems = [];
    this.posts$ = jsonPlaceholderService.getRows("post");

    this.users$ = jsonPlaceholderService.getRows("user");
    /** Find better solution. Maybe mapping oid */
    this.selectItems.push({ label: "Select Name", value: "0" });
    this.users$.subscribe(users => {
      users.forEach(user => {
        this.selectItems.push({ label: user["name"], value: user["id"] });
      });
    });
  }

  ngOnInit() {
    this.editedPosts = [];
    this.addedPost = new Post();
  }

  onRowSelect(event: any) {
    console.log(`onRowSelect: ${event}=>`, event);
  }

  onRowClick(event: any) {
    console.log(`onRowclick: ${event}=>`, event);
    this.selectedPost = event.data;
    const post = event.data;
    console.log(`find ${this.editedPosts.find(pst => pst.id === post.id)}`, this.editedPosts.find(pst => pst.id === post.id));
    if (this.editedPosts.find(pst => pst.id === post.id) === undefined) {
      this.editedPosts.push(post);
    }
  }

  onEdit(event: any) {
    console.log(`onEdit: ${event}=>`, event);
  }

  onEditInit(event: any) {
    console.log(`onEditInit: ${event}=>`, event);
    // this.selectedPost = event.data;
  }

  add() {
    this.growlService.addSingleMessage({ severity: "info", summary: "Add Post", detail: JSON.stringify(this.editedPosts[0]) });
  }

  delete() {
    this.growlService.addSingleMessage({ severity: "warn", summary: "Delete Post", detail: JSON.stringify(this.selectedPost) });
  }

  save() {
    this.growlService.addSingleMessage({ severity: "info", summary: "Save changed Posts", detail: JSON.stringify(this.addedPost) });
  }

  onChangeUserId(event: number) {
    if (event > 0) {
      this.selectedPost.userId = event;
    }
  }

  onChangeAddedUserId(event: number) {
    if (event > 0) {
      this.addedPost.userId = event;
    }
  }
}
