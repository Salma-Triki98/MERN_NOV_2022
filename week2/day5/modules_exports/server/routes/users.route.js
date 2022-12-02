module.exports = (app, users) => {
    //Routes
    // Getting all the users
    app.get("/api/users", (request, response) => {
        response.json(users);
    })

    // adding a user
    app.post("/api/users", (request, response) => {
        // req.body will contain the form data from Postman or from React
        // console.log("this is req body", request.body);
        console.log(request);
        // later on this will be inserted into a database
        users.push(request.body);
        // we always need to respond with something
        response.json({ status: "ok, user is pushed" });

    })

    // Get user by id 
    // if we want to get a user with a specific id, we can make the id a part of the url
    // be sure to preface the id variable with a `:` colon
    app.get("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        console.log(req.params.id);
        // assuming this id is the index of the users array we could return one user this way
        res.json(users[req.params.id]);
    });

    app.put("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        const id = req.params.id;
        // assuming this id is the index of the users array we can replace the user like so
        users[id] = req.body;
        // we always need to respond with something
        res.json({ status: "ok" });
    });

    app.delete("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        const id = req.params.id;
        // assuming this id is the index of the users array we can remove the user like so
        users.splice(id, 1);
        // we always need to respond with something
        res.json({ status: "ok" });
    });
}




// module.exports = (app) => {
//     console.log("Hello from route !!!🛣", name);
