this.workflowCockpit = workflowCockpit({
    init: _init,
    // onSubmit: _onSubmit,
    // onError: _onError,
})

function _init (data, info) {
    console.log("iniciei")
    const { initialVariables } = data.loadContext;
    console.log(initialVariables);

    info.getUserData().then((userData) => {
        document.getElementById("nomFun").setAttribute("value", userData.fullname)
        document.getElementById("emaFun").setAttribute("value", userData.email);
    }).then(() => {
        info.getPlatformData().then(function (platformData) {
            console.log(platformData)
        })
    })
}

function _saveData(data, info) {
    if (!isFormValid()) {
        document.getElementById("gridCheck").setAttribute("class", "form-check-input is-invalid")
        throw new Error("Os dados informados não são válidos.");
    }
    let newData = {};
    let selectEstado = document.getElementById("estDes")

    newData.desMot = document.getElementById("desMot").value;
    newData.nomDes = document.getElementById("nomDes").value;
    newData.estDes = document.getElementById("estDes").value;
    newData.numCeṕ = document.getElementById("numCep").value;
    newData.check = document.getElementById("gridCheck").value;
    console.log(newData);
    return {
        formData: newData
    };
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