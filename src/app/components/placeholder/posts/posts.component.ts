import { Component, OnInit } from "@angular/core";
import { Post } from "../../../models/post";
import { Observable } from "rxjs/Observable";
import { JsonPlaceholderService } from "../../../services/json-placeholder.service";
import { SelectItem } from "primeng/primeng";
import { Message } from "primeng/components/common/message";
import { GrowlService } from "../../../services/growl.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {

  /** p-growl */
  public _error: any;
  msgs: Message[] = [];

  public posts$: Observable<Post[]>;
  public editedPosts: Post[];
  public users$: Observable<Object[]>;
  public events: any[] = [];
  public testing: string = "testing";

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
    // this.jsonPlaceholderService.getRows("user")
    //   .subscribe(users => {
    //     users.forEach(user => {
    //       this.selectItems.push({ label: user.name, value: user.id });
    //     });
    //   });
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
    this.growlService.addSingleMessage({ severity: "info", summary: "Posts", detail: JSON.stringify(this.addedPost)});
  }

  delete() { }

  save() { }

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
