import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gift',
  imports: [],
  templateUrl: './gift.component.html',
})
export class GiftComponent {
  title = signal('Regalo');
  subtitle = signal('¿Quieres hacernos un regalo?');
  subtitle2 = signal('Tu presencia es el mejor regalo que podríamos pedir. Sin embargo, si deseas contribuir a nuestro fondo para la luna de miel, aquí tienes nuestras opciones de transferencia.');
  copiedMessage = signal('');

  bankAccount = signal({
    bank: 'Banco Itaú',
    rut: '17.333.422-2',
    accountHolder: 'MARIA JOSE GONZALEZ RODRIGUEZ',
    accountType: 'Cuenta Corriente',
    accountNumber: '0223049072',
    email: 'MAJOSE.GON.ROD@GMAIL.COM'
  });

  async copyBankDetails(): Promise<void> {
    const details = this.bankAccount();
    const text = [
      `Banco: ${details.bank}`,
      `RUT: ${details.rut}`,
      `Titular: ${details.accountHolder}`,
      `Tipo de Cuenta: ${details.accountType}`,
      `Cuenta: ${details.accountNumber}`,
      `Email: ${details.email}`,
    ].join('\n');

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      this.copiedMessage.set('Datos bancarios copiados.');
    } catch {
      this.copiedMessage.set('No se pudo copiar. Intenta nuevamente.');
    }
  }
}
