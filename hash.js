var unsecuredPlainTextPassword="password";

var bcrypt=require('bcrypt');
bcrypt.genSalt(10,function(err, salt){
    bcrypt.hash(unsecuredPlainTextPassword,salt,function(err, hash){
        console.log(hash);
    });
});
