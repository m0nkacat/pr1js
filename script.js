const users = [
{ id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
{ id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
{ id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
{ id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
] 

function getActiveUsers(users){
    var i = 0;
    var ActiveUsers = []
    while(i < users.length){
        if(users[i].isActive == true){
            ActiveUsers.push(users[i])
        }
        i+=1
    }
    return(ActiveUsers);
}
const getUserNames = (users) => {
  let names = []
  for (let i = 0; i < users.length; i++) {
    names.push(users[i].name)
  }
  return names;
}
function findUserById(users, id) {
    for(let i = 0; i < users.length; i++){
       if(users[i].id === users[id].id){
        return (users[id])
       }
    }
    return (null)
}
function getUsersStatistics(users){
    UsersStatistics = {total: users.length, active: 0, inactive: 0}
    for(let i = 0; i < users.length; i++){
        if(users[i].isActive){
            UsersStatistics.active++
        }else {
            UsersStatistics.inactive++
        }
    }
}
function getAverageAge(users){
    let count = 0
    for(let i = 0; users.length; i++){
        count += users[i].age        
    }
    return (count / users.length)
}
function groupUsersByCity(users) {
    let result = {};
    for (let i = 0; i < users.length; i++) {
    const city = users[i].city;
    if (!result[city]) {
      result[city] = [];
    }
    result[city].push(users[i]);
  }
  return result;
}

console.log(getUserNames(users));
console.log(findUserById(users, 2));
console.log( getUsersStatistics(users));
console.log(getAverageAge(users));
console.log(groupUsersByCity(users));



