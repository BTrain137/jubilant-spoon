const createFriend = `
mutation {
  createFriend(input: {firstName: "Bryan", lastName: "Tran", gender: "Male", language: "English", email: "bryan89tran@yahoo.com"}) {
    id
    firstName
    lastName
  }
}
`;

const returnCreateFriend = `
{
  "data": {
    "createFriend": {
      "id": "c0671d1761593c78ee71",
      "firstName": "Bryan",
      "lastName": "Tran"
    }
  }
}
`;

const queryFriend = `

`
