const express =  require('express');
const router = express.Router();


//Get
router.get('/',(req, res)=>{
	res.send("postworks");
});


module.exports =  router;