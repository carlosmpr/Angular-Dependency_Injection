import { Injectable } from "@angular/core";
import { LoggingService } from "./login.service";
@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private logginService: LoggingService) {}

      addAccount(name: string, status: string){
        this.accounts.push({name, status});
        this.logginService.logStatus(status)
      }

      updateStatus(id: number, status:string){
        this.accounts[id].status = status;
        this.logginService.logStatus(status)
      }
}