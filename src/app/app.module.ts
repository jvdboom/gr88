import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";

import { MenubarModule, ButtonModule, PanelModule } from "primeng/primeng";
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
import {PaginatorModule} from "primeng/paginator";
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
    TableTurboComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ContextMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
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
    MessageModule
  ],
  providers: [AppSettingsService, ErrorService,
    JsonPlaceholderService, CarService, PokedexService,
    GrowlService,
    StandardService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
