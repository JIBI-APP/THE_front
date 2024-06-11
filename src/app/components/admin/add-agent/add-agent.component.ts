import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService, Agent } from '../../services/agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {
  backoffice!: FormGroup;
  selectedFiles: { [key: string]: File } = {};

  constructor(private fb: FormBuilder, private agentService: AgentService, private router: Router) {
    this.backoffice = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      idNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      patentNumber: ['', Validators.required],
      idType: ['', Validators.required],
      registrationNumber: ['', Validators.required]
    }, { validators: this.emailsMatchValidator });
  }

  emailsMatchValidator(group: FormGroup) {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    return email === confirmEmail ? null : { emailMismatch: true };
  }

  onFileSelected(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFiles[field] = input.files[0];
    }
  }

  onSubmit() {
    if (this.backoffice.valid) {
      const agent: Agent = this.backoffice.value;
      this.agentService.addAgent(agent);
      alert('Agent added successfully');
      this.router.navigate(['/agents']);
    }
  }

  onCancel() {
    this.backoffice.reset();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}