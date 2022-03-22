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

function isValid(user){
    let valid=true;

    $('input').removeClass('input-error');
    if(user.email.length==0){
        valid=false;
        $('#txtemail').addClass('input-error');
    }
    if(user.password.length==0){
        valid=false;
        $('#txtpassword').addClass('input-error');
    }

    if(!valid){
        console.error('Missing Data');
        $('#alertError').removeClass("hide");
    }

    return valid;
}

function register(){
    let inputFirstName = $('#txtfname').val();
    let inputLastName = $('#txtlName').val();
    let inputEmail = $('#txtemail').val();
    let inputPassword = $('#txtpassword').val();
    let inputAge = $('#txtage').val();
    let inputAddress = $('#txtaddress').val();
    let inputCardNumber = $('#txtCardNumber').val();
    let inputPhone = $('#txtphone').val();
    let inputColor = $('#txtcolor').val();

    console.log(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputAge,inputAddress,inputCardNumber,inputPhone,inputColor);
//create the user
    let theUser = new User(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputAge,inputAddress,inputCardNumber,inputPhone,inputColor)
    if(isValid(theUser)){
        saveUser(theUser);
        //clear the inputs
        $('input').val('');
    }
}

function init(){
    console.log("Registration");
}

window.onload=init