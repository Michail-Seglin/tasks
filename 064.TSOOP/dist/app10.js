var Product = /** @class */ (function () {
    function Product() {
        this.product = [{ name: 'tv', price: 10 }, { name: 'phone', price: 21 }];
    }
    Product.prototype.displayProductInfo = function () {
        var filtered = this.product.filter(function (el) {
            if (el.price > 20) {
                return true;
            }
        });
        return filtered;
    };
    return Product;
}());
var product = new Product();
console.log(product.displayProductInfo());
