const friendData = require("../data/friend");

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {
        console.log(req.body);
        
        const newScore = req.body.scores;

        let scoreArr = [];
        for (let i in friendData){
            let count = 0
            for (let x in newScore){
                count += Math.abs(newScore[x] - friendData[i].scores[x]);
            }
            scoreArr.push(count);
        }
        console.log(scoreArr);











        res.json(true);
        friendData.push(req.body);





    });
}