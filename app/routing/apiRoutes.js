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
        const findMatch = scoreArr.sort(function(a, b){return a-b}); 
        let yourMatch = 0;
        for (let i in scoreArr){
            if(scoreArr[i] === findMatch[0]){
                yourMatch = i;
            }
        }
        console.log(yourMatch);









        res.json(true);
        friendData.push(req.body);





    });
}