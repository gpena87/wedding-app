(customer, filter) => {
  if (customer.hasOwnProperty("type")) {
    const {
      type,
      rut,
      names,
      paternalSurname,
      maternalSurname,
      segment,
      operation,
      dates,
      channel,
      note
    } = customer;

    const { issue, expiration } = dates;

    filter = {
      numeroOperacion: operation,
      tipo: type,
      fechaEmision: issue,
      fechaVigencia: expiration,
      canal: channel.alphanumeric,
      glosa: note
    };

    customer = {
      segmento: segment,
      rut,
      nombres: names,
      apellidoPaterno: paternalSurname,
      apellidoMaterno: maternalSurname
    };
  }

  const {
    numeroOperacion,
    tipo = "DEFAULT",
    fechaEmision,
    fechaVigencia,
    canal = "DEFAULT",
    glosa = "VENTA CREDITO SALESFORCE"
  } = filter;

  const {
    segmento = "DEFAULT",
    rut,
    nombres: nombreClienteORazonSocial,
    apellidoPaterno: apellidoPaternoCliente,
    apellidoMaterno: apellidoMaternoCliente
  } = customer;

  const DB = {
    PRODUCT: {
      "CREDITO COMERCIAL": "PDT003",
      "CREDITO CONSUMO": "PDT004",
      "DEFAULT": "PDT003",
      "CREDITO DE CONSUMO": "PDT004"
    },
    CHANNEL: {
      SUCURSAL: "CNL006",
      APP: "CNL010",
      WEB: "CNL002",
      DEFAULT: "CNL006"
    },
    FOLDERTYPE: {
      PERSO: "TDC002",
      PERSONAS: "TDC002",
      PEQUE: "TDC202",
      INSTI: "TDC302",
      MICRO: "TDC501",
      EMPRE: "TDC401",
      DEFAULT: "TDC501"
    }
  };

  const get = (target, name) => DB[target][name.toUpperCase()] || DB[target].DEFAULT;

  const base = {
    DocumentTitle: "ANEXO CONTRATACION DE PRODUCTOS",
    estadoDocumento: "EDD001",
    glosa,
    producto: get("PRODUCT", tipo),
    fechaCustodiaFisica: "2099-12-30",
    estadoNegocio: "Generado",
    selloSernac: "SS002",
    tipoRegistro: "AR",
    fechaVigencia: fechaVigencia || "",
    canal: get("CHANNEL", canal),
    tipoDeCarpeta: get("FOLDERTYPE", segmento),
    fechaEmision: fechaEmision || "",
    fechaSuscripcion: fechaEmision || "",
    numeroOperacion,
    comentarios: "",
    subtipoContrato: "SCON07",
    rutCliente: rut,
    nombreClienteORazonSocial,
    apellidoPaternoCliente,
    apellidoMaternoCliente
  };

  return Object.keys(base).reduce((f, k) => {
    if (base[k]) f += `${k}=${base[k]};`;
    return f;
  }, "");
};
