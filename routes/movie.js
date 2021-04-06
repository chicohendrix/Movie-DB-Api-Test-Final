var axios = require('axios').default; //importing axios
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=0ab27e683c2919bf1dd6c8f1dbfdf041').then(function(response){
        res.send(response.data);
    });
});

module.exports = router;
