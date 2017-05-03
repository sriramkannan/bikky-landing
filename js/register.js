


var poolData = { 
    UserPoolId : 'us-west-2_gh9N06W7s', // Your user pool id here
    ClientId : '7cptg227a5boenhl117qk2sudm' // Your client id here
};

var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);


function register() {

    var attributeList = [];

    var dataEmail = {
        Name : 'email',
        Value : ''+$('input.email').val()
    };

/*    var dataPhoneNumber = {
        Name : 'phone_number',
        Value : '+12121112222'
    };*/
    
    var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
    //var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);

    attributeList.push(attributeEmail);
    //attributeList.push(attributePhoneNumber);

    console.log(attributeList);

    var emailToUserName = "user-" + (Math.floor((Math.random() * 10000000) + 1));
    console.log(emailToUserName);

    userPool.signUp(emailToUserName, 'Temporary123', attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        $('div#alert-thankyou').show();
        $('input.email').val()='';
    });
}