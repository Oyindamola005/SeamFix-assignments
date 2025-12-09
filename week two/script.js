const productbutton = document.querySelectorAll('.cta')
productbutton.forEach(button => {
    button.addEventListener('click', () => 
        {
            const productName = button.closest('.product_cards').querySelector('h4').innerText;
        alert(`${productName} has been added to cart, continue shopping!`)
        });
});