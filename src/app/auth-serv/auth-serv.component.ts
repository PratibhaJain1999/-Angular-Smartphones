import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServicesService } from './auth-services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auth-serv',
  templateUrl: './auth-serv.component.html',
  styleUrls: ['./auth-serv.component.css']

})
export class AuthServComponent {
  register = true;
  loading = false;
  success = false;
  error = false;
  errorMsg = 'any';
  isLoading = false;
  constructor(private authserv: AuthServicesService){}
  formAdded(addForm: NgForm) {
    const email = addForm.value.email;
    const password = addForm.value.password;
    console.log(addForm);

    addForm.reset();
    this.isLoading = true;
    this.authserv.signingUpForm(email, password).subscribe(dataResponse => {

      console.log(dataResponse);
      this.error = false;
      this.success = true;
      this.isLoading = false;
      Swal.fire(
        'Succes!!',
        'You are successfully registerd.',
        'success'
      )



    },
    errorMeesage =>{
      this.error=true,
     this.success=false 
     this.errorMsg=errorMeesage
     this.isLoading=false
    
     }



    )

  }




  changeMode() {
    this.register = !this.register


  }



}


