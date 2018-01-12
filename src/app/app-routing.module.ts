import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { CommentsComponent } from "./components/placeholder/comments/comments.component";
import { EditableTableComponent } from "./components/editable-table/editable-table.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "productdetail", component: ProductDetailComponent },
  { path: "comments", component: CommentsComponent },
  { path: "editabletable", component: EditableTableComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
