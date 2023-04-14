
let mybutton = document.getElementById("back-to-top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0; 
}

//6 
function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

return {
  name,
  city,
  email,
  zipCode,
  status
  };
}


//7
function isNumber(string) {
  if (isNaN(string) == false) {
    return true;

  } else {
    return false;
  }

}

//8
function checkboxIsChecked() {
  if(input == check) {
    return true;
    }else {
    return false;
    }
}

//9
const handleGetFormData = () => ({
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  city: document.getElementById("city").value,
  zipCode: document.getElementById("zip-code").value,
  status: document.getElementById("status").checked,
});

//10
function submit() { 
let data = validateFormData(getFormData());

  let warning = document.getElementById('warning');

  if (data == false){

    warning.innerHTML = "<div style='color:#FF0000'>Periksa form anda sekali lagi</div>";

  }else{

    warning.innerHTML = "";

  }
}


 
