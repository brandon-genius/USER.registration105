function displayUsers(users){
    $("#tblUsers").html("");
    let data = "";
    for (let i = 0; i < users.length; i++){
        data += createUser(users[i], i);
    }
    $("#tblUsers").html(data);
}

function createUser(user, index){
    return `<tr>
                    <td>${user.fname}</td>
                    <td>${user.lname}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.age}</td>
                    <td>${user.address}</td>
                    <td>${user.cardNumber}</td>
                    <td>${user.phone}</td>
                    <td>${user.color}</td>
                    <td><input type='button' value='remove' onclick='removeUser(${index})'/></td>
            </tr>`;
}

function removeUser(index){
    remove(index);
    let users=readUsers();
    displayUsers(users);
}

function init(){
    console.log("listing users");
    let users=readUsers();
    displayUsers(users);
}

window.onload=init;