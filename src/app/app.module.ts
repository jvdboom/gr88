import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { MenubarModule, ButtonModule, PanelModule, DataTableModule, SharedModule, InputTextareaModule } from "primeng/primeng";
import { InputTextModule, DialogModule } from "primeng/primeng";
import { DropdownModule, CalendarModule } from "primeng/primeng";
import {CheckboxModule} from "primeng/primeng";

import { MessageService } from "primeng/components/common/messageservice";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { AppSettingsService } from "./shared/app-settings.service";
import { CommentsComponent } from "./components/placeholder/comments/comments.component";
import { JsonPlaceholderService } from "./shared/json-placeholder.service";
import { ErrorService } from "./shared/error.service";
import { EditableTableComponent } from "./components/editable-table/editable-table.component";
import { CarService } from "./shared/car.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductDetailComponent,
    CommentsComponent,
    EditableTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    DialogModule,
    PanelModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    CheckboxModule
  ],
  providers: [AppSettingsService, ErrorService, JsonPlaceholderService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
