var shopper = {
    firstName: 'Jeff',
    lastName: 'Smith',
    age: 27,
    isShopping: true,
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
    
    
};
shopper.shoppingcart = ['Apple', 'Pear', 'Lasanga', 'Ham']


console.log(shopper)