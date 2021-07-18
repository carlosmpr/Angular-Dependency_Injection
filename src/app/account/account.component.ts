import { Component, Input,  } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from "../login.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private logginService: LoggingService, 
    
    private accountsService: AccountService
    ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
   
    this.logginService.logStatus(status);
  }
}
