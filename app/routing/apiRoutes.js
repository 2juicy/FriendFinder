const friendData = require("../data/friend");

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {
        console.log(req.body);
        
        const newScore = req.body.scores;
        let scoreTotal = 0;
        let scoreArr = [];
        for (let i in friendData){
            scoreTotal += req.body.friends.scores[i].parseInt();
        }
        res.json(true);
        friendData.push(req.body);
        console.log(friendData);













    });
}