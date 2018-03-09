import { Component, OnInit, Input } from "@angular/core";
import { Validators, FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Message, SelectItem } from "primeng/components/common/api";
import { Tenant } from "../../../models/tenant";

@Component({
  selector: "app-validation",
  templateUrl: "./validation.component.html",
  styleUrls: ["./validation.component.css"]
})
export class ValidationComponent implements OnInit {
  @Input() tenant: Tenant;
  msgs: Message[] = [];
  userform: FormGroup;
  submitted: boolean;
  genders: SelectItem[];
  description: string;

  constructor(private fb: FormBuilder) {
    if (!this.tenant) {
      this.tenant = new Tenant();
      this.tenant.Name = "Name not passed via @input()";
    }
  }

  ngOnInit() {
    this.userform = this.fb.group({
      "firstname": new FormControl(this.tenant.Name, Validators.required),
      "lastname": new FormControl("", Validators.required),
      "password": new FormControl(this.tenant.CustomerNumber, Validators.compose([Validators.required, Validators.minLength(6)])),
      "description": new FormControl(""),
      "gender": new FormControl("", Validators.required)
    });

    this.genders = [];
    this.genders.push({ label: "Select Gender", value: "" });
    this.genders.push({ label: "Male", value: "Male" });
    this.genders.push({ label: "Female", value: "Female" });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({ severity: "info", summary: "Success", detail: "Form Submitted" });
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }



}
