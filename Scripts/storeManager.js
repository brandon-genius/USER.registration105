const LS_KEY = 'users';

function saveUser(user){
    //load old data
    let data=readUsers();
    //merge old data
    data.push(user);
    //save
    let val= JSON.stringify(data);//pars into JSON string
    localStorage.setItem(LS_KEY,val);//send string to local storage
}

function readUsers(){
    let data= localStorage.getItem(LS_KEY);
    console.log(data);
    if(!data){
        return [];
    }else{
        let list = JSON.parse(data);
        return list;
    }
}

function remove(index){
    let data=readUsers();
    //we remove the iser in the given index from the array data 
    data.splice(index, 1);
    //save
    let val= JSON.stringify(data);//pars into JSON string
    localStorage.setItem(LS_KEY,val);//sedn string into local storage
}