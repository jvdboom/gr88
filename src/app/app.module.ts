import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { MenubarModule, ButtonModule } from "primeng/primeng";
import { MessageService } from "primeng/components/common/messageservice";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { AppSettingsService } from "./shared/app-settings.service";
import { FormsModule } from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
