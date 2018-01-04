import { Component, OnInit } from "@angular/core";
import { AppSettingsService } from "../../shared/app-settings.service";
import { Product } from "../../models/product";
import { AppSettings } from "../../shared/app-settings";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  settings: AppSettings;
  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    this.appSettingsService.getSettings()
      .subscribe(settings =>
        this.settings = settings,
      () => null,
      () => {
        this.product = new Product();
        this.product.price =
          this.settings.defaultPrice;
        this.product.url =
          this.settings.defaultUrl;
      });
  }

  saveSettings(): void {
    this.settings.defaultPrice =
      this.product.price;
    this.settings.defaultUrl = this.product.url;
    this.appSettingsService
      .saveSettings(this.settings);
  }

  deleteSettings(): void {
    this.appSettingsService.deleteSettings();
  }
}
