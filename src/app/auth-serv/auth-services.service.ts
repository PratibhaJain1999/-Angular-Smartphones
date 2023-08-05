import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http:HttpClient) { }
  signingUpForm(email:string ,password:string){
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDWK_YFuLMXPY9MJWoVmQp4YoImrV5AdmY',{
     email:email,
     password:password,
     returnSecureToken:true
    }).pipe(catchError(restError =>{
     let errorMessage='An unknown error occured!';
     if(restError.error.error.code==200){
      
     }
    else if(restError.error.error.message =='EMAIL_EXISTS'){
       errorMessage ='This email exists already';
       
     }
     else{
      Swal.fire(
        'Error!!',
        'You are not registerd successfully.',
        'error'
      )
     }
     return throwError(errorMessage);

    
     
    }
    )
    
    )
   }
}
