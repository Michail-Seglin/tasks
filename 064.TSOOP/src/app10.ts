// 10. Создайте класс Product, который содержит свойства name (название продукта) и
// price (цена продукта). Реализуйте метод displayProductInfo(), который выводит
// массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите
// метод displayProductInfo().
interface iProduct {
    name: string;
    price: number;
}

interface iPrice {
    product: iProduct[];
    displayProductInfo(): iProduct[];
}


class Product {

    product: iProduct[] = [{ name: 'tv', price: 10 }, { name: 'phone', price: 21 }];
    
    displayProductInfo() {
        const filtered: iProduct[] = this.product.filter((el: iProduct) => {
            if (el.price > 20) {
                return true
            }
        })
        return filtered
    }
}

const product: iPrice = new Product();
console.log(product.displayProductInfo());
