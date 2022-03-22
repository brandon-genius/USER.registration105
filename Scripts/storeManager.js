const LS_KEY = 'users';
function saveUser(user){
    let val= JSON.stringify(user);//pars into JSON string
    localStorage.setItem(LS_KEY,val);//send string to local storage
}