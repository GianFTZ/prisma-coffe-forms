this.workflowCockpit = workflowCockpit({
  init: _init,
  onSubmit: _saveData,
});

async function _init(data, info) {
  let dataVariables = await info.getInfoFromProcessVariables();
  dataVariables.map((element) => {
    try {
      document.getElementById(element.key).value = element.value;
    } catch (error) {
      console.log(
        `a chave ${element.key} não foi encontrada, por favor de uma olhada na sua base de dados`
      );
    }
  });
}

async function _saveData() {
        let data = {}
        data.parecer = document.getElementById("parecer").value
        return {
            formData: data,
        }
}