export function dataFactory() {
  let fields = [
    {
      dbName: "nome-colaborador",
      fieldId: "name",
    },
    {
      dbName: "data-requisicao",
      fieldId: "reqDate",
    },
    {
      dbName: "endereco-evento",
      fieldId: "adress",
    },
    {
      dbName: "data-inicio",
      fieldId: "start-date",
    },
    {
      dbName: "data-termino",
      fieldId: "end-date",
    },
    {
      dbName: "preco-unitario",
      fieldId: "unityCost",
    },
    {
      dbName: "quantidade-pessoas",
      fieldId: "muchPeople",
    },
    {
      dbName: "preco-estimado",
      fieldId: "extimatedCost",
    },
  ];

  let Data = {};
  fields.map((element) => {
    try {
      Data[element.dbName] = document.getElementById(`${element.fieldId}`).value;
    } catch (e) {
      console.log(`err: 500 (campo ${element.fieldId} não encontrado)`);
    }
  });
  return Data;
}
