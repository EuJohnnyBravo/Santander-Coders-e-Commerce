import { IProduct } from "../interfaces/IProduct";

function convertPrice(price: number): number {
  return price * 5.7;
}

export function cardProductComponent(product: IProduct): string {
  return `
    <div class="flex flex-col p-5 rounded-lg m-4 bg-ada_navyblue-50 w-80 h-96">
      <div class="flex justify-center bg-white items-center rounded-lg py-2">
        <img src="${product.image}" alt="imagem ${
    product.title
  }" class="w-32 h-32 object-contain rounded-md">
      </div>
      <h2 class="font-livvic text-white text-lg my-2">${product.title}</h2>
      <p class="font-livvic text-white text-base my-2">R$${convertPrice(
        product.price
      ).toFixed(2)}</p>
      <a href="/product.html?id=${
        product.id
      }" class="mt-auto flex justify-center py-2 px-4 items-center bg-ada_green font-livvic rounded-lg text-ada_navyblue-100">Adicionar ao Carrinho</a>
    </div>
  `;
}
