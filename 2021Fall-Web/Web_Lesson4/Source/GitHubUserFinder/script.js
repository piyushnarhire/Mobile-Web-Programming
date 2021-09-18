function getGithubInfo(user, callback) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // Request finished and response returns the status number of a request "OK"
        if (this.readyState == 4) {
            callback(this);             //Callback function which will return the response to the calling function
        }
    }
    xhttp.open("GET", "https://api.github.com/users/" + user, true); //Specifying Request
    xhttp.send();
}

function showUser(user) {
    var div3 = document.getElementById('link');
    div3.innerHTML='';
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content

    //To show the user login information
    $("#heading").text(user.login)

    //Display picture of user from Github
    var div = document.getElementById('avatar');
    div.innerHTML = '<img src="'+user.avatar_url+'" width="300px" height="300px"/>';
    var obj = $("#information").text("Name: "+user.name +"\n Github Id: "+user.id +"\n Followers: "+user.followers +"\n Following: "+user.following +"\n created at "+user.created_at)
    obj.html(obj.html().replace(/\n/g,'<br/>'));

    //Github link of user
    $('#link').append("Github Link:").append('<a href="'+user.html_url+'" + target="_blank" +>' + user.html_url + '</a>');

}

function noSuchUser(username) {

    //3. set the elements such that a suitable message is displayed
    $("#heading").text("No such profile")

    //The previous set the elements of picture, details and github links are cleared
    var div = document.getElementById('avatar');
    div.innerHTML = '';
    var div2 = document.getElementById('information');
    div2.innerHTML = '';
    var div3 = document.getElementById('link');
    div3.innerHTML='';


}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the response

            // A JavaScript Callback Function is a function that is passed as a parameter to another
            //JavaScript function, and the callback function will run inside the function, it was passed into.
            getGithubInfo(username, function(response)
            {
                if (response.status == 200) {       //If the status code is 200:OK then showUser function is called which displays the user details
                    showUser(JSON.parse(response.responseText));
                    //else display suitable message
                } else {
                    noSuchUser(username);   //Else no such user is displayed on the screen
                }
            });
        }
    });
});