const router = require('express').Router();
var url = require('url');
const download = require('download-git-repo')

router.post('/', (req, res) => {
  console.log(req.body.id)
  const url2 =  req.body.id 

try {
    var result = url.parse(url2).pathname.substring(1)

} catch (error) {
    return   res.render('error', {error:"Empty input"})
}













try {
    download(result, 'uploads/'+result, function (err) {
        //   console.log(err ? 'Error' : 'Succesis')
    if(err){
        res.render('error', {error:"Link is not valid"})
    
    }
    else{
        let link = 'your link is '+"https:/www.gitwebsite.com"+result || 'error'
        res.render('success',{link:link})
        // send('your link is'+"http://localhost:3000/"+result)
    
    }
        })
    
    
    
} catch (error) {
    res.render('error', {error:"Link is not valid"})
}





 });
 
 
 module.exports = router;