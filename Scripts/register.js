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
        displayError("Missing Data");
    }

    return valid;
}

function validatePass(){
    let txtPass=$('#txtpassword');
    let password=txtPass.val();
    if(password.length<6){
        txtPass.css("border","1px solid red");
        displayError("Pass too short"); //jquery function
    }else{
        txtPass.css("border","1px solid green");
        hideError();
    }
|\
function displayError(msg){
    $('#alertError').removeClass("hide").text(msg);
}

function hideError(){
    $('#alertError').addClass('hide');
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
    let theUser = new User(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputAddress,inputCardNumber,inputPhone,inputColor)
    if(isValid(theUser)){
        saveUser(theUser);
        //clear the inputs
        $('input').val('');
    }
}

function login(){
    let inputEmail = $('#txtemail').val();
    let inputPassword = $('#txtpassword').val();

    let users = readUsers();
    for(let i=0; i<user.length; i++){
        if(users[i].email ===inputEmail &&
            users[i].password === inputPassword){
                window.location = 'users.html'
            }
    }
}


function init(){
    console.log("Registration");
    $('#txtpassword').change(validatePass);
}

window.onload=init