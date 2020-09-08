const validateName = (name) => {
  var regName = /^[a-zA-Z ]{2,40}$/;

  if (name.length == 0) {
    return "Please Enter User Name";
  }
  else if (!regName.test(name)) {
    return "Please Enter Valid User Name";
  }
  else {
    return "";
  }
}

const validateEmail = (email) => {

  return true;
}


export { validateName, validateEmail }