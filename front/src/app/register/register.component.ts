import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent{
  public signUpForm: FormGroup<{
    pseudo: FormControl<string | null>,
    email: FormControl<string | null>,
    password: FormControl<string | null>,
  }> = this.formBuilder.group(
    {
      pseudo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/i)]]
    })
  private destroyed: Subject<boolean> = new Subject<boolean>()

  constructor(private formBuilder: FormBuilder) {
    
  }
  /**
   * onSubmit
   */
  public onSubmit() {
    console.log('handle Submit')
  }
  
}
