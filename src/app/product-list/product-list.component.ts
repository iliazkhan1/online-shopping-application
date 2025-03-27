import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  private phoneService = inject(PhoneService);
  phones = this.phoneService.getAllPhones();
}