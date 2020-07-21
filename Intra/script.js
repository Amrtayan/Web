setTimeout(function rochet_load() {
  var logo = document.getElementById("logomation");
  var anim = setInterval(frame, 500);
  var opa = document.getElementById("go").opacity;
  var source = "Web_imgs/logo";
  var source_no = 1;

  function frame() {
    if (opa == "1") {
      clearInterval("anim");
    } else if (source_no < 4) {
      logo.src = source + source_no + ".png";
      source_no++;
    } else if (source_no >= 4) {
      source_no = 1;
      logo.src = source + source_no + ".png";
      source_no++;
    }
  }
}, 2000);
function focus() {
  document.getElementById("email").style.borderBottom =
    " 3px solid rgb(0,0,0,0.6)";
}

const txt_email = document.getElementById("email");
const txt_pass = document.getElementById("pass");
const confirm_btn = document.getElementById("confirm");
const confirm_btn2 = document.getElementById("pakka");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  confirm_btn.addEventListener("click", (e) => {
    const email = txt_email.value;
    const pass = txt_pass.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);

    promise.catch((e) => {
      console.log(e.message);
    });
  });

  confirm_btn2.addEventListener("click ", (e) => {
    const email = txt_email.value;
    const pass = txt_pass.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.catch((e) => {
      console.log(e.message);
    });
  });

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log("not logged in");
    }
  });

  if (
    document.getElementById("email").value !== "" ||
    document.getElementById("email").value !== ""
  ) {
    document.getElementById("email").style.width = "0";

    document.getElementById("pass").style.width = "0";

    document.getElementById("submit_text").style.display = "block";
    document.getElementById("submit_text").style.opacity = "1";
  }
});
function plswork() {
  alert("You logged in! Please be patient for updates.");
}
window.onscroll = function () {
  scrolling();
};
function scrolling() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  if (scrolled > 39) {
    document.getElementById("rochet_info1").style.animation =
      "ping1 1.5s steps(13)";
  }
  if (scrolled > 39) {
    document.getElementById("rochet_info2").style.animation =
      "ping2 1.5s steps(15)";
  }
  if (scrolled > 39) {
    document.getElementById("rochet_info3").style.animation =
      "ping3 1.5s steps(15)";
  }
  if (scrolled > 39) {
    document.getElementById("rochet_info4").style.animation =
      "ping4 1.5s steps(16)";
  }
  if (scrolled > 39) {
    document.getElementById("rochet_info5").style.animation =
      "ping5 1.5s steps(15)";
  }
}

var x = 1;

document.getElementById("planet_info_container1").style.opacity;
document.getElementById("planet_info_container2").style.opacity;
document.getElementById("planet_info_container3").style.opacity;

function opt_dearth() {
  if (x !== 1) {
    x = 1;
    document.getElementById("planet_info_container1").style.opacity = "1";
    document.getElementById("planet_info_container2").style.opacity = "0";
    document.getElementById("planet_info_container3").style.opacity = "0";

    change1();
  }
}
function opt_pyrous() {
  if (x !== 2) {
    x = 2;
    document.getElementById("planet_info_container1").style.opacity = "0";
    document.getElementById("planet_info_container2").style.opacity = "1";
    document.getElementById("planet_info_container3").style.opacity = "0";

    change2();
  }
}
function opt_witheria() {
  if (x !== 3) {
    x = 3;
    document.getElementById("planet_info_container1").style.opacity = "0";
    document.getElementById("planet_info_container2").style.opacity = "0";
    document.getElementById("planet_info_container3").style.opacity = "1";

    change3();
  }
}
function change1() {
  document.getElementById("planet_head").style.borderBottomColor = "#775db5";
  document.getElementById("planet_head").style.borderRightColor = "#775db5";
  document.getElementById("select").style.backgroundColor = "#775db5";
  document.getElementById("footer_head").style.borderBottomColor = "#775db5";
  document.getElementById("footer_register").style.backgroundColor = "#775db5";
  document.getElementById("select").style.backgroundColor = "#775db5";
  document.getElementById("confirm").style.backgroundColor = "#775db5";
  document.getElementById("pakka").style.backgroundColor = "#775db5";
  document.getElementById("foot").src = "Web_imgs/foot1.png";
}
function change2() {
  document.getElementById("planet_head").style.borderBottomColor = "#ef8943";
  document.getElementById("planet_head").style.borderRightColor = "#ef8943";
  document.getElementById("select").style.backgroundColor = "#ef8943";
  document.getElementById("footer_head").style.borderBottomColor = "#ef8943";
  document.getElementById("footer_register").style.backgroundColor = "#ef8943";
  document.getElementById("select").style.backgroundColor = "#ef8943";
  document.getElementById("confirm").style.backgroundColor = "#ef8943";
  document.getElementById("pakka").style.backgroundColor = "#ef8943";
  document.getElementById("foot").src = "Web_imgs/foot2.png";
}
function change3() {
  document.getElementById("planet_head").style.borderBottomColor = "#68ad61";
  document.getElementById("planet_head").style.borderRightColor = "#68ad61";
  document.getElementById("select").style.backgroundColor = "#68ad61";
  document.getElementById("footer_head").style.borderBottomColor = "#68ad61";
  document.getElementById("footer_register").style.backgroundColor = "#68ad61";
  document.getElementById("select").style.backgroundColor = "#68ad61";
  document.getElementById("confirm").style.backgroundColor = "#68ad61";
  document.getElementById("pakka").style.backgroundColor = "#68ad61";
  document.getElementById("foot").src = "Web_imgs/foot3.png";
}
