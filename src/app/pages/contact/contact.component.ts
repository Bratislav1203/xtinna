import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData = {
    from_name: '',
    reply_to: '',
    message: ''
  };

  onSubmit() {
    emailjs.send(
      'service_vsv60ih',
      'template_sda2m34',
      this.formData,
      '4AWGm8fn5C-LsHyMy'
    ).then(() => {
      alert('Poruka uspešno poslata!');
      this.formData = { from_name: '', reply_to: '', message: '' };
    }).catch((error) => {
      alert('Greška pri slanju poruke.');
      console.error('EmailJS error:', error);
    });
  }
}
