import { formateDate } from "../js/index.js";

this.workflowCockpit = workflowCockpit({
    init: _init,
})

async function _init(data, info) {
  let date = new Date();
  let userdata = await info.getUserData()
  let fields = [{field: "Date", value: formateDate(date)},{field: "nomFun", value: userdata.fullname}]
  fields.map((element) => {
    try {
      document.getElementById(element.field).setAttribute("value", element.value)
    } catch (e) {
      console.log(`the element ${element.field} was not found (error: 500)`)
    }
  })
}


(function () {
    "use strict";
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add("was-validated");
        },
        false
      );
    });
  })(); 