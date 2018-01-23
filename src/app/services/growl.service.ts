import { Injectable } from "@angular/core";
import { Component } from "@angular/core";
import { Message } from "primeng/components/common/api";
import { MessageService } from "primeng/components/common/messageservice";

@Injectable()
export class GrowlService {

  constructor(private messageService: MessageService) { }
  //
  /**
   * @param aSeverity  success,  info,  warn or error
   * @param aSummary  summeray of the message
   * @param aDetail detail information of the message
   */
  addSingle(aSeverity: string = "error", aSummary: string = "Summary", aDetail: string = "Detail") {
    this.messageService.add({
      severity: aSeverity,
      summary: aSummary,
      detail: aDetail
    });
  }

  /**
   * @param aMessage i.e { severity: `severity here`, summary: `summary here`, detail: `detail here` }    
   * severity: success,  info,  warn or error
   */
  addSingleMessage(aMessage: Message) {
    this.messageService.add(aMessage);
  }

  addMultiple() {
    this.messageService.addAll(
      [{ severity: "success", summary: "Service Message", detail: "Via MessageService" },
      { severity: "info", summary: "Info Message", detail: "Via MessageService" }]);
  }

  clear() {
    this.messageService.clear();
  }
}