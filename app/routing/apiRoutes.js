const friendData = require("../data/friend");

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });

    app.post('/api/friends', (req, res) => {
        // console.log(req.body);        
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
        // console.log(sortedArr);
        // console.log(findMatch);
        let yourMatch = 0;
        for (let i in sortedArr){
            if(sortedArr[i] === findMatch[0]){
                yourMatch = i;
            }
        }
        res.json(friendData[yourMatch]);
        friendData.push(req.body);

    });
}