const express = require("express");
const app = express();
const PORT = 1337;

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

require("./routes/users.route")(app, users)
// console.log(test);
// we can hard code some users like this
// later on we will want to store users in a database

//MIDDLWARE
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This line comes last
app.listen(PORT, () => {
    console.log(`My server is running on PORT ${PORT}`);
})