var resumeform = document.getElementById("form");
var display = document.getElementById("resumedisplay");
function updateresume() {
    var Name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var exp = document.getElementById("experience").value;
    var sk1 = document.getElementById("skill1").value;
    var sk2 = document.getElementById("skill3").value;
    var sk3 = document.getElementById("skill2").value;
    var refre = document.getElementById("ref").value;
    var refre2 = document.getElementById("ref2").value;
    var resumedom = "\n<h2><b>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;&#160; MY RESUME</b></h2> \n<h3>&#9734; &#160; PERSONAL INFORMATION </h3>\n<p><b>&#160;&#160; &#160; &#160; &#8226; Name:</b>".concat(Name, "</p> \n<p><b>&#160;&#160; &#160; &#160; &#8226; Email:</b>").concat(email, "</p>\n<p><b>&#160;&#160; &#160; &#160; &#8226; Phone:</b>").concat(phone, "</p> <br>\n<h3>&#9734; &#160; EDUCATION</h3>\n<p><b>&#160;&#160; &#160; &#8226; Edcation:</b>").concat(education, "</p>  <br>\n<h3>&#9734; &#160; EXPERIENCE</h3>\n<p><b>&#160; &#160; &#160;&#160; &#8226; Experience:</b>").concat(exp, "</p> <br>\n<h3>&#9734; &#160; SKILLS</h3> \n<p><b>&#160;&#160; &#160; &#160; &#8226; skill#01:</b>").concat(sk1, "</p>\n<p><b>&#160;&#160; &#160; &#160; &#8226; skill#02:</b>").concat(sk2, "</p>\n<p><b>&#160;&#160; &#160; &#160; &#8226;  skill#03:</b>").concat(sk3, "</p> <br>\n<h3>&#9734; &#160; REFERENCES</h3> \n<p><b>&#160;&#160; &#160; &#160; &#8226;   ref#01:</b>").concat(refre, "</p>\n<p><b>&#160;&#160; &#160;&#160;&#160; &#8226;   ref#02</b>").concat(refre2, "</p>");
    if (display) {
        display.innerHTML = resumedom;
    }
}
if (resumeform) {
    resumeform.addEventListener("submit", function (event) {
        event.preventDefault();
        updateresume();
    });
}
// if (display) {
//     display.innerHTML=resumedom
// }
// else{
//     console.error("something wrong")
// }
// })
// resumeform.addEventListener("submit",showresume)
// let dname = document.getElementById("dname") as HTMLElement
// let damal= document.getElementById("dmail") as HTMLElement
// let vodaphone = document.getElementById("dphone") as HTMLElement
// let deedi = document.getElementById("dedu") as HTMLElement
// let dexpa = document.getElementById("dexp") as HTMLElement
// let hunar1 = document.getElementById("sk1") as HTMLElement
// let hunar2 = document.getElementById("sk2") as HTMLElement
// let hunar3 = document.getElementById("sk3") as HTMLElement
// let spras1 = document.getElementById("ref1") as HTMLElement
// let soras2 = document.getElementById("ref2") as HTMLElement
// dname.textContent=`Name : ${Name}`
// damal.textContent=`Email :${email}`
// vodaphone.textContent=`Contact :${phone}`
// deedi.textContent=`Education: ${education}`
// dexpa.textContent=` Experience: ${exp}`
// hunar1.textContent=`skill set-1 :${sk1}`
// hunar2.textContent= `skill set-3 : ${sk2}`
// hunar3.textContent= `skill-set-2: ${sk3}`
// spras1.textContent= `reference-2 ${refre}`
// soras2.textContent= `ref-2: ${refre2}`
