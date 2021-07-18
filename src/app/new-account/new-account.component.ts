import { Component, Output } from "@angular/core";
import { AccountService } from "../account.service";
import { LoggingService } from "../login.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private logginService: LoggingService,

    private accountsService: AccountService
  ) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.logginService.logStatus(accountStatus);
  }
}
