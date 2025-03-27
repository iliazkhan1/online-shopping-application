import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private phoneService = inject(PhoneService);
  
  phone = this.phoneService.getPhoneById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}