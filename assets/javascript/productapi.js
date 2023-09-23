const apiUrl = "https://650c441b47af3fd22f676191.mockapi.io/product";

// mengambil data produk dari API dan menampilkannya
async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Bersihkan daftar sebelum menambahkan data baru

    // Loop melalui data produk dan tampilkan dalam daftar
    data.forEach((product) => {
      const listItem = document.createElement("div");

      // untuk menambahkan gambar produk
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;
      listItem.appendChild(productImage);

      // Tambahkan informasi produk (nama dan harga)
      const productInfo = document.createElement("div");
      productInfo.innerHTML = `
        <h3>${product.name}</h3>
        <p>Harga: ${product.harga}</p>
    `;
      listItem.appendChild(productInfo);

      productList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchProducts();
