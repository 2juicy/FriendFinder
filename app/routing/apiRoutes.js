const friendData = require("../data/friend");

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {    
        const newScore = req.body.scores;
        let sortedArr = [];
        let findMatch = [];
        for (let i in friendData){
            let count = 0
            for (let x in newScore){
                count += Math.abs(newScore[x] - friendData[i].scores[x]);
            }
            sortedArr.push(count);
            findMatch.push(count);
        }
        sortedArr.sort(function(a, b){return a-b}); 
        let yourMatch = 0;
        for (let i in sortedArr){
            if(findMatch[i] == sortedArr[0]){
                yourMatch = i;
            }
        }
        console.log(sortedArr, findMatch, yourMatch);
        res.json(friendData[yourMatch]);
        friendData.push(req.body);
    });
}