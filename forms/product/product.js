product = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
let totalProduct = 1

function productFunction(num1, num2) {
  return (num1* num2);
}
for(i=0; i< product.length; i++) {
  totalProduct = productFunction(totalProduct , product[i])
  }
  
  console.log(totalProduct)
  

  
  