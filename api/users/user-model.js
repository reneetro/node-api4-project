let id = 0

function getId() {
  return ++id
}

let users = [
  { id: getId(), username: 'Captain', password: '1234' },
  { id: getId(), username: 'Doggo', password: 'abcd' },
]

module.exports = {

    async findAll() {
        // SELECT * FROM dogs;
        return users;
      },

    async create({ username, password }) {
      const newUser = {id: getId(), username: username, password: password};
      users.push(newUser);
      return newUser;
    },

    async login({username,  password}) {
      const checkedUser = users.filter(user => user.username === username);
      console.log(checkedUser);
      if(checkedUser.length === 1 && checkedUser[0].password === password){
          return checkedUser;
        }
      

    }
}