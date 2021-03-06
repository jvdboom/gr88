import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { CommentsComponent } from "./components/placeholder/comments/comments.component";
import { EditableTableComponent } from "./components/editable-table/editable-table.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { SimpleHttpComponent } from "./components/simple-http/simple-http-component";
import { PostsComponent } from "./components/placeholder/posts/posts.component";
import { EditablePostTableComponent } from "./shared/editable-post-table/editable-post-table.component";
import { KiteLyComponent } from "./components/kite-ly/kite-ly.component";
import { TableTurboComponent } from "./components/primeng/table-turbo/table-turbo.component";
import { AccordionComponent } from "./components/primeng/accordion/accordion.component";
import { ValidationComponent } from "./components/primeng/validation/validation.component";
import { MarvelMockComponent } from "./components/marvel/marvel-mock/marvel-mock.component";
import { DragAndDropComponent } from "./components/primeng/drag-and-drop/drag-and-drop.component";
import { PickListComponent } from "./components/primeng/pick-list/pick-list.component";
import { MarvelDataViewComponent } from "./components/marvel/marvel-data-view/marvel-data-view.component";
import { MarvelAccordionComponent } from "./components/marvel/marvel-accordion/marvel-accordion.component";
import { DataViewComponent } from "./components/primeng/data-view/data-view.component";
import { PrimengMockComponent } from "./components/primeng/primeng-mock/primeng-mock.component";
import { DragAndDropComponent as PrototypeDragAndDropComponent } from "./components/prototype/drag-and-drop/drag-and-drop.component";
import { DragAndDropItemsComponent } from "./components/prototype/drag-and-drop-items/drag-and-drop-items.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "productdetail", component: ProductDetailComponent },
  { path: "comments", component: CommentsComponent },
  { path: "posts", component: PostsComponent },
  { path: "editableposttable", component: EditablePostTableComponent },
  { path: "editabletable", component: EditableTableComponent },
  { path: "pokedex", component: PokedexComponent },
  { path: "simplehttp", component: SimpleHttpComponent },
  { path: "kitely", component: KiteLyComponent },
  { path: "tableturbo", component: TableTurboComponent },
  { path: "primengmock", component: PrimengMockComponent },
  { path: "picklist", component: PickListComponent },
  { path: "dataview", component: DataViewComponent },
  { path: "accordion", component: AccordionComponent },
  { path: "draganddrop", component: DragAndDropComponent },
  { path: "validation", component: ValidationComponent },
  { path: "marvelmock", component: MarvelMockComponent },
  { path: "marvelmock/:id", component: MarvelMockComponent },
  { path: "marveldataview", component: MarvelDataViewComponent },
  { path: "marvelaccordion", component: MarvelAccordionComponent },
  { path: "prototypedraganddrop", component: PrototypeDragAndDropComponent },
  { path: "draganddropitems", component: DragAndDropItemsComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
