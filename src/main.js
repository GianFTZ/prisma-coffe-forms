import { formateDate } from "../js/index.js";

this.workflowCockpit = workflowCockpit({
  init: _init,
  // onSubmit: _saveData
});

async function _init(data, info) {
  let date = new Date();
  let userdata = await info.getUserData();
  let fields = [
    { field: "reqDate", value: formateDate(date) },
    { field: "name", value: userdata.fullname },
  ];
  fields.map((element) => {
    try {
      document
        .getElementById(element.field)
        .setAttribute("value", element.value);
    } catch (e) {
      console.log(`the element ${element.field} was not found (error: 500)`);
    }
  });
}



// function _init(data, info) {

//   // Caso seja executado algum serviço externo ao abrir o formulário e o retorno dele seja atribuído a variáveis de execução
//   // essas variáveis serão preenchidas
//   const { initialVariables } = data.loadContext;
//   console.log(initialVariables);

//   info
//     .getUserData()
//     .then(function (user) {
//       // Usuário logado
//       document.getElementById("nomFun").setAttribute("value", user.fullname);
//       document.getElementById("emaFun").setAttribute("value", user.email);
//     })
//     .then(function () {
//       info.getPlatformData().then(function (platformData) {
//         // Informações da G7
//         console.log(platformData);
//       });
//     });
