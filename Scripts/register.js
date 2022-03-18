let userList = []

class User{
    constructor(fName, lName, email, password, age, address, cardNumber, phone, color){
        this.firstName = fName;
        this.lastName = lName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.address = address;
        this.cardNumber = cardNumber;
        this.phone = phone;
        this.color = color;
    }    
}

function register(){
    let inputFirstName = jQuery('#txtfname').val();
    let inputLastName = jQuery('#txtlName').val();
    let inputEmail = jQuery('#txtemail').val();
    let inputPassword = jQuery('#txtpassword').val();
    let inputAge = jQuery('#txtage').val();
    let inputAddress = jQuery('#txtaddress').val();
    let inputCardNumber = jQuery('#txtCardNumber').val();
    let inputPhone = jQuery('#txtphone').val();
    let inputColor = jQuery('#txtcolor').val();

    console.log(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputAge,inputAddress,inputCardNumber,inputPhone,inputColor);
//create the user
    let theUser = new User(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputAge,inputAddress,inputCardNumber,inputPhone,inputColor)
//validate the user

    console.log(theUser);
//clear inputs
    $('input').val('');
}

function init(){
    console.log("Registration");
}

window.onload=init