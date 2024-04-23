function updateTotalPrice() {
    let totalPrice = 0;

    // Loop through each item div
    const itemDivs = document.querySelectorAll('.item');
    itemDivs.forEach((itemDiv) => {
        // Get price per item from the item's span with class "itemPrice"
        const itemPriceElement = itemDiv.querySelector('.itemPrice');
        const pricePerItem = parseFloat(itemPriceElement.textContent);

        // Get quantity input for the item
        const quantityInput = itemDiv.querySelector('input[type="tel"]');
        const quantity = parseInt(quantityInput.value) || 0;

        // Calculate subtotal for the item (quantity * pricePerItem)
        const subtotal = quantity * pricePerItem;

        // Add subtotal to the total price
        totalPrice += subtotal;
    });

    // Update the displayed total price
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

const plus = document.getElementById("plus")
plus.addEventListener("click",()=>{
    const  itemPrice = parseInt(document.getElementById("itemPrice").innerHTML)
    const subtotal = document.getElementById("subtotal")
   const quantityInput2 = document.getElementById("quantityInput2")
   let value_ = document.getElementById("quantityInput2").value
   let math = parseInt (value_ )+1
    quantityInput2.value = math 
    subtotal.innerHTML = itemPrice * quantityInput2.value


})


const minus = document.getElementById("minus")
minus.addEventListener("click",()=>{
  const  itemPrice = parseInt(document.getElementById("itemPrice").innerHTML)
  const subtotal = document.getElementById("subtotal")
    
   const quantityInput2 = document.getElementById("quantityInput2")
   let value_ = document.getElementById("quantityInput2").value
   if(value_ ==0){

   }else{
    let math = parseInt (value_ )-1
    quantityInput2.value = math 
    subtotal.innerHTML = itemPrice * quantityInput2.value
    
   }
  

})



