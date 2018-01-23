import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { CommentsComponent } from "./components/placeholder/comments/comments.component";
import { EditableTableComponent } from "./components/editable-table/editable-table.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { SimpleHttpComponent } from "./components/simple-http/simple-http-component";
import { PostsComponent } from "./components/placeholder/posts/posts.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "productdetail", component: ProductDetailComponent },
  { path: "comments", component: CommentsComponent },
  { path: "posts", component: PostsComponent },
  { path: "editabletable", component: EditableTableComponent },
  { path: "pokedex", component: PokedexComponent },
  { path: "simplehttp", component: SimpleHttpComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
