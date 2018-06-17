const friends = require('../data/friend.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        console.log(req.body);
        let scoreTotal = 0;
        for (i in req.body.friends.scores){
            scoreTotal += req.body.friends.scores[i];
        }
    });
}