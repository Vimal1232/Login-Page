function vali() {
  nam = /^[A-Za-z]{5,9}$/;
  email = /^[A-Za-z0-9_.-]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/;
  mob = /^[0-9]{10}$/;

  let inputElement = document.getElementById("user");
  let inputElement2 = document.getElementById("email");
  let inputElement3 = document.getElementById("phone");

  if (document.form.first.value.search(nam) == -1) {
    alert("I Need a Name To work With");
    inputElement.addEventListener("focus", function () {
      inputElement.style.border = "1px solid red";
    });
    inputElement.addEventListener("blur", function () {
      inputElement.style.border = "";
    });
    document.form.first.focus(nam);
    return false;
  } else if (document.form.second.value.search(email) == -1) {
    alert("I need A Email, Darling");
    inputElement2.addEventListener("focus", function () {
      inputElement2.style.border = "1px solid red";
    });
    inputElement2.addEventListener("blur", function () {
      inputElement2.style.border = "";
    });
    document.form.second.focus(email);
    return false;
  } else if (document.form.third.value.search(mob) == -1) {
    alert("I Need A Mobile number , Boi ");
    inputElement3.addEventListener("focus", function () {
      inputElement3.style.border = "1px solid red";
    });
    inputElement3.addEventListener("blur", function () {
      inputElement3.style.border = "";
    });
    document.form.third.focus(mob);
    return false;
  } else {
    return true;
  }
}
