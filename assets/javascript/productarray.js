// Data produk dalam bentuk objek
const products = [
    {
      name: 'Acer Aspire 3 Slim A315',
      imageSrc: '../assets/img/produk1.jpg',
      price: 'Rp.9.000.000',
      link: '#'
    },
    {
      name: 'Lenovo IdeaPad Slim D330 Flex',
      imageSrc: '../assets/img/produk2.jpg',
      price: 'Rp.9.000.000',
      link: '#'
    },
    {
      name: 'ASUS VivoBook 15 A516MAO N4020',
      imageSrc: '../assets/img/produk3.jpg',
      price: 'Rp.9.000.000',
      link: '#'
    },
    {
      name: 'HP Laptop 14s dq0508TU',
      imageSrc: '../assets/img/produk4.jpg',
      price: 'Rp.9.000.000',
      link: '#'
    },
    {
      name: 'Xiaomi RedmiBook 15',
      imageSrc: '../assets/img/produk5.jpg',
      price: 'Rp.9.000.000',
      link: '#'
    },
    {
      name: 'Lenovo V14 G2 ITL',
      imageSrc: '../assets/img/produk6.jpg',
      price: 'Rp.9.000.000',
      link: '#'
    },
    {
      name: 'ASUS VivoBook 14 A416FA',
      imageSrc: '../assets/img/produk7.jpg',
      price: 'Rp.9.000.000',
      link: '#'
    },
    {
      name: 'ASUS VivoBook Go 14 Flip TP1400KA',
      imageSrc: '../assets/img/produk8.jpg',
      price: 'Rp.9.000.000',
      link: '#'
    }
  ];

  const productList = document.getElementById('product-list');

 
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('gambar');
    
    const productTitle = document.createElement('h4');
    productTitle.textContent = product.name;
    
    const productImage = document.createElement('img');
    productImage.src = product.imageSrc;
    productImage.alt = product.name;
    
    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;
    
    const productLink = document.createElement('a');
    productLink.href = product.link;
    productLink.textContent = 'Detail';
    
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productLink);
    productList.appendChild(productDiv);
  });