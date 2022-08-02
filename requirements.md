# bdd

* Dados Gerais
# inputs
    # label: Dados do Colaborador
    {dados de solicitação (deve ser fechada, e com a data do dia em formato: DD/MM/YYYY)}
    {nome do colaborador (aberto, por padrão nome que vem do login da api)}
    # label: Local do evento
    {Local da realização do evento}
    {Motivo (dropdown: reunião, treinamento, outros)}
    if (motivo == "outros"){
        {Outros: LongText}
    }
    {Data do início do evento}
    {Valor do coffe unitário}
    {Quantidade de pessoas}
    {Custo estimado, fechado, ValorUnitario * QuantidadeDePessoas}
* Dados Gerais 2
# inputs
    ' ' '
    detalhe: deve aparecer a opinião do coordenador

* Analise do Coordenador
# inputs
    {Aprova o orçamento? (boolean)}
    {parecer do coordernador}

* Anexo
# inputs
    {Anexe a nota fiscal}


# os texts areas (nos dois) feito

# motivo bugado
# to fixed

# visibilidade do fluxo

# multiplicação na revisão de dados
# revisão do coordenador 2 
