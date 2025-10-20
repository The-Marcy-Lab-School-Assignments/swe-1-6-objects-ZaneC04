const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  person.age += 1
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name
  person.spyHandle = spyHandle
};

const carMaker = (name, maker, year) => {
  const car = {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  }
  return car
};

const weAreNotFriends = (person) => {
  let str = person.friends[person.friends.length - 1]
  person.friends.splice(person.friends.length - 1, 1)
  return str
};

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++)
    console.log(`${person.name} likes ${person.hobbies[i]}.`)
};

const getNextOpponent = (team) => {
  return !team.matches[0] ? null : team.matches[0].teamName
};

const listAllKeys = (obj) => Object.keys(obj);

const listAllValues = (obj) => Object.values(obj);

const convertToMatrix = (arr) => {
  let newArr = [];

  if (arr[0]) {
    newArr.push(Object.keys(arr[0]))
    for (let i = 0; i < arr.length; i++) {
      newArr.push(Object.values(arr[i]))
    }
  } else {
    return newArr;
  }
  return newArr
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
