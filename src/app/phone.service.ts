import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PhoneService {
  private phones = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 999.99,
      description: 'The latest iPhone with A17 Bionic chip and Dynamic Island',
      imageUrl: 'https://www.dxomark.com/wp-content/uploads/medias/post-157467/Apple-iPhone-15-Pro_natural_Yoast-image-packshot-review.jpg',
      specifications: ['6.1-inch OLED', 'A17 Bionic Chip', '48MP Camera']
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      price: 899.99,
      description: 'Powerful Android smartphone with Snapdragon 8 Gen 3',
      imageUrl: 'https://www.livemint.com/lm-img/img/2024/01/11/600x338/Samsung_Galaxy_S23_series_1675280781761_1704973663009.jpeg',
      specifications: ['6.8-inch AMOLED', 'Snapdragon 8 Gen 3', '200MP Camera']
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      price: 799.99,
      description: 'AI-powered camera and pure Android experience',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGS2-BNTiqECtHXs9dyngY89NfTqKYxG9ovQ&s',
      specifications: ['6.7-inch OLED', 'Google Tensor G3', '50MP Camera']
    },
    {
      id: 4,
      name: 'OnePlus 12',
      price: 749.99,
      description: 'Premium performance with OxygenOS and fast charging',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKoymh7aAN0aj4j8rACar_E53MZQXaRQJUQ&s',
      specifications: ['6.7-inch AMOLED', 'Snapdragon 8 Gen 3', '50MP Camera']
    },
    {
      id: 5,
      name: 'Xiaomi 14 Ultra',
      price: 899.99,
      description: 'Flagship specs with Leica-powered cameras',
      imageUrl: 'https://www.financialexpress.com/wp-content/uploads/2024/02/xiaomi-14-ultra.jpg',
      specifications: ['6.8-inch AMOLED', 'Snapdragon 8 Gen 3', '108MP Camera']
    },
    {
      id: 6,
      name: 'Sony Xperia 1 V',
      price: 1099.99,
      description: 'Cinematic display and pro-level photography',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oz1eqCKnttSuehRmyskZ16D5JS0PPz2zfA&s',
      specifications: ['6.5-inch 4K OLED', 'Snapdragon 8 Gen 2', '48MP Camera']
    }
  ];

  getAllPhones() {
    return this.phones;
  }

  getPhoneById(id: number) {
    return this.phones.find(phone => phone.id === id);
  }
}
