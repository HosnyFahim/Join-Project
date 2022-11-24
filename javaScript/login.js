
/**
    * @description      : 
    * @author           : hosny
    * @group            : 
    * @created          : 14/11/2022 - 18:44:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/11/2022
    * - Author          : hosny
    * - Modification    : 
**/


/**
 * It takes the email and password from the login form, checks if the user exists in the users array,
 * if it does, it saves the user's name and email in the sessionStorage and redirects to the summary
 * page.
 */
async function login() {
    let actualUser;
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let user = users.find( u => u.email == email.value && u.password == password.value);
    if (user) {
        actualUser = user.name;
        actualUser = JSON.stringify(actualUser);
        sessionStorage.setItem('sessionUser', actualUser);
        window.location.href = 'summary.html';
    } else {
        alert('User not found. Please try again or sign up!');
    }
 }

 /**
  * Set the sessionUser to 'Guest' so a guest can see the website behind the login. 
  * 
  */
function guestLogin() {
    actualUser = 'Guest';
    actualUser = JSON.stringify(actualUser);
    sessionStorage.setItem('sessionUser', actualUser);
    window.location.href = 'summary.html';
}