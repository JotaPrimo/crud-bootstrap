import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'button-voltar',
  standalone: true,
  imports: [RouterLink],
  template: `<a
    class="btn btn-sm btn-secondary"
    [routerLink]="['/' + link]"
    routerLinkActive="router-link-active"
    >Voltar</a
  >`,
  styleUrl: './button-voltar.component.css',
})
export class ButtonVoltarComponent {
  @Input() link: string = '#';
}
