import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "productdetail", component: ProductDetailComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
