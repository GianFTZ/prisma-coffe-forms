export function dataFactory() {
    let fields = [
      {
        dbName: "nome-colaborador",
        fieldId: "name",
      },
      {
        dbName: "data-requisicao",
        fieldId: "",
      },
      {
        dbName: "endereco-evento",
        fieldId: "",
      },
      {
        dbName: "motivo",
        fieldId: "",
      },
      {
        dbName: "data-inicio",
        fieldId: "",
      },
      {
        dbName: "data-termino",
        fieldId: "",
      },
      {
        dbName: "preco-unitario",
        fieldId: "",
      },
      {
        dbName: "quantidade-pessoas",
        fieldId: "",
      },
      {
        dbName: "preco-estimado",
        fieldId: "",
      },
    ];
  
    let Data = {};
    try {
      fields.map((element) => {
        let dbName = element.dbName;
        Data.dbName = document.getElementById(`${element.fieldId}`).value;
      });
    } catch (e) {
      console.log(`err: 500 (the field ${element.fieldId} isnt found)`);
    }
  }