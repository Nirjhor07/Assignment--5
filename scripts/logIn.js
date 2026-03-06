// add event lintener
document.getElementById("sign-btn").addEventListener("click", () => {
  const adminName = document.getElementById("enter-user-name").value;
  //   console.log(adminName)

  const adminPassword = document.getElementById("sign-password").value;
  //   console.log(adminPassword);

  if (adminName == "admin" && adminPassword == "admin123") {
    alert("Sign in succesfull");
    window.location.assign("../homePage.html");
  } else if (adminName.length !== 5) {
    alert("invalid user name");
  } else if (adminPassword !== 8) {
    alert("invalid password");
  } else {
    alert("invalid credential");
  }
});
