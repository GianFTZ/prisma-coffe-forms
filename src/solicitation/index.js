import { dataFactory, formateDate } from "../../js/index.js";

this.workflowCockpit = workflowCockpit({
  init: _init,
  onSubmit: _saveData,
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
      console.log(`o elemento ${element.field} não foi encontrado (error: 500)`);
    }
  });
}
function _saveData() {
  let newData = dataFactory();
  try {
    return {
      formData: newData,
    };
  } catch (error) {
    return console.log(`
     talvez tenha um erro no lado do servidor, verifique ele.
    `);
  }
}
