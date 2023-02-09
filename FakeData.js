const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
  },

  {
    id: 2,
    name: "Pedro",
    username: "pedroTech",
    age: 22,
    nationality: "BRAZIL",
  },

  {
    id: 3,
    name: "Bholu",
    username: "bholu",
    age: 23,
    nationality: "INDIA",
    friends: [
      {
        id: 4,
        name: "Putul",
        username: "putul",
        age: 26,
        nationality: "GERMANY",
      },
      {
        id: 5,
        name: "Bhavna",
        username: "bhavna",
        age: 39,
        nationality: "USA",
      },
    ],
  },

  {
    id: 4,
    name: "Putul",
    username: "putul",
    age: 26,
    nationality: "GERMANY",
  },

  {
    id: 5,
    name: "Bhavna",
    username: "bhavna",
    age: 39,
    nationality: "USA",
    friends: [
      {
        id: 3,
        name: "Bholu",
        username: "bholu",
        age: 23,
        nationality: "INDIA",
      },
    ],
  },
];

// Movies Data

const MovieList = [
  {
    id: 1,
    name: "Shehzada",
    yearOfPublication: 2002,
    isInTheaters: false,
  },

  {
    id: 2,
    name: "Pathan",
    yearOfPublication: 2002,
    isInTheaters: true,
  },

  {
    id: 3,
    name: "Pushpa",
    yearOfPublication: 2003,
    isInTheaters: true,
  },

  {
    id: 4,
    name: "Ved",
    yearOfPublication: 2004,
    isInTheaters: false,
  },

  {
    id: 5,
    name: "KGF2",
    yearOfPublication: 2005,
    isInTheaters: false,
  },

  {
    id: 6,
    name: "Raksha Bandhan",
    yearOfPublication: 2006,
    isInTheaters: true,
  },

  {
    id: 7,
    name: "Kartikeya 2",
    yearOfPublication: 2022,
    isInTheaters: true,
  },

  {
    id: 8,
    name: "Avatar",
    yearOfPublication: 2023,
    isInTheaters: true,
  },
];

module.exports = { UserList, MovieList };
