import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";

import { MenubarModule, ButtonModule, PanelModule } from "primeng/primeng";
import { TooltipModule } from "primeng/tooltip";
import { SharedModule, InputTextareaModule } from "primeng/primeng";
import { TableModule } from "primeng/table";
import { DataTableModule } from "primeng/datatable";
import { InputTextModule, DialogModule } from "primeng/primeng";
import { DropdownModule, CalendarModule } from "primeng/primeng";
import { CheckboxModule } from "primeng/primeng";
import { GrowlModule } from "primeng/growl";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MessageService } from "primeng/components/common/messageservice";
import { ContextMenuModule } from "primeng/contextmenu";
import { PaginatorModule } from "primeng/paginator";
import { AccordionModule } from "primeng/accordion";
import { DragDropModule } from "primeng/dragdrop";

import { DataViewModule } from "primeng/dataview";

// import { DataViewModule } from "primeng/components/";
// import {DataViewModule} from "primeng/components/dataview/dataview";
// import {DataViewModule} from "primeng/components/
// import { MenuItem } from "primeng/api";

import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { AppSettingsService } from "./shared/app-settings.service";
import { CommentsComponent } from "./components/placeholder/comments/comments.component";
import { EditableTableComponent } from "./components/editable-table/editable-table.component";
import { CarService } from "./shared/car.service";
/** FireBase */
import { AngularFireModule } from "angularfire2/index";
import { AngularFireDatabase } from "angularfire2/database";
import { firebaseConfig } from "../environments/firebase.config";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { CapitalizePipe } from "./shared/capitalize.pipe";
import { PokedexService } from "./services/pokedex.service";
import { StandardService } from "./services/standard.service";
import { SimpleHttpComponent } from "./components/simple-http/simple-http-component";
import { JsonPlaceholderService } from "./services/json-placeholder.service";
import { ErrorService } from "./services/error.service";
import { PostsComponent } from "./components/placeholder/posts/posts.component";
import { GrowlService } from "./services/growl.service";
import { StandardDropdownComponent } from "./shared/standard-dropdown/standard-dropdown.component";
import { EditablePostTableComponent } from "./shared/editable-post-table/editable-post-table.component";
import { KiteLyComponent } from "./components/kite-ly/kite-ly.component";
import { TableTurboComponent } from "./components/primeng/table-turbo/table-turbo.component";
import { AccordionComponent } from "./components/primeng/accordion/accordion.component";
import { ValidationComponent } from "./components/primeng/validation/validation.component";
import { MarvelMockComponent } from "./components/marvel/marvel-mock/marvel-mock.component";
import { MarvelService } from "./services/marvel.service";
import { DragAndDropComponent } from "./components/primeng/drag-and-drop/drag-and-drop.component";
import { PickListComponent } from "./components/primeng/pick-list/pick-list.component";
import { MarvelDataViewComponent } from "./components/marvel/marvel-data-view/marvel-data-view.component";
import { MarvelAccordionComponent } from "./components/marvel/marvel-accordion/marvel-accordion.component";
import { DataViewComponent } from "./components/primeng/data-view/data-view.component";
import { FieldsetModule } from "primeng/fieldset";
import { DataListModule } from "primeng/datalist";
import { PrimengMockComponent } from "./components/primeng/primeng-mock/primeng-mock.component";
import { DragAndDropComponent as PrototypeDragAndDropComponent } from "./components/prototype/drag-and-drop/drag-and-drop.component";
import { DndModule } from "ng2-dnd";

// import { YouTubeSearchComponent } from "./components/you-tube-search/you-tube-search.component";
//  import { youTubeSearchInjectables } from "./you-tube-search/you-tube-search.injectables";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductDetailComponent,
    CommentsComponent,
    EditableTableComponent,
    PokedexComponent,
    CapitalizePipe,
    SimpleHttpComponent,
    PostsComponent,
    StandardDropdownComponent,
    EditablePostTableComponent,
    KiteLyComponent,
    TableTurboComponent,
    AccordionComponent,
    ValidationComponent,
    MarvelMockComponent,
    DragAndDropComponent,
    PrototypeDragAndDropComponent,
    PickListComponent,
    MarvelDataViewComponent,
    MarvelAccordionComponent,
    DataViewComponent,
    PrimengMockComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    ContextMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    TooltipModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    AccordionModule,
    DragDropModule,
    DataViewModule,
    InputTextareaModule,
    DialogModule,
    PanelModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    DataTableModule,
    SharedModule,
    CheckboxModule,
    GrowlModule,
    MessagesModule,
    MessageModule,
    FieldsetModule,
    DataListModule
  ],
  providers: [AppSettingsService, ErrorService,
    JsonPlaceholderService, CarService, PokedexService,
    GrowlService,
    StandardService, MessageService, MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
