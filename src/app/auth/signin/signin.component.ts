import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  userID: any = '';
  password: any = '';

  // constructor(private authService: AuthService) { }


  constructor(
    private contractService: ContractService,
    private router: Router,
    private api: AuthService,
    private spinnerService: NgxSpinnerService
  ) {
    // this.getAddress();
  }

  // onSubmit() {
  //   debugger
  //   this.authService.loginMLM(this.userID, this.password).then(
  //     response => {
  //       window.alert("Login Succesfully");
        
  //       // Handle successful login, such as navigating to the dashboard
  //     },
  //     error => {
  //       console.error('Login failed', error);
  //       // Handle login failure, such as showing an error message
  //     }
  //   );
  // }

  async onSubmit() {
    this.spinnerService.show();
   
    
    if (this.userID != "" && this.password != "") {
      var res: any = await this.api.loginMLM(this.userID, this.password);
      console.log(res);
      if (res.status) {
        sessionStorage.setItem('address', this.userID);
        sessionStorage.setItem('token', res.data.token);
        console.log(res.data.token);

        this.spinnerService.hide();
        
        this.router.navigate(['/usershop-navbar']);
      } else {
        this.spinnerService.hide();
        Swal.fire(res.message, '', 'error');
      }
    }
  }
}
