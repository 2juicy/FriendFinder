const friendData = require("../data/friend");

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {
        console.log(req.body);
        // let scoreTotal = 0;
        // let scoreArr = [];
        // for (i in req.body.friends.scores){
        //     scoreTotal += req.body.friends.scores[i].parseInt();
        // }
        res.json(true);
        friendData.push(req.body);
    });
}