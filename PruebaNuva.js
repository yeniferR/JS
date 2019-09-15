let URL = "https://accounts.zoho.com";
//URL += "&jsoncallback=?";
let peticionAT = {
  refresh_token:
    "1000.913197dc01429b0410117c0a0af13e7f.4b33a1d794f4b72580777ef336a20db5",
  client_id: "1000.PR0URF6X99AC910661OC10WWN04WXH",
  client_secret: "ca1608b58116e1995caf1a9857e1c2b762d3d8e60e",
  grant_type: "refresh_token"
};

$.post(`${URL}/oauth/v2/token?`, $.param(peticionAT), function(datos_acceso) {
  console.log(datos_acceso);
  let tokenAcceso = datos_acceso.access_token;
  // let peticionRegistros = {
  //   headers: { Authorization: "Zoho-oauthtoken " + tokenAcceso }
  // };
  $.ajax({
    url: "https://www.zohoapis.com/crm/v2/Candidatos/3141754000002799090",
    type: "get",
    data: {},
    headers: {
      Authorization: "Zoho-oauthtoken " + tokenAcceso
    },
    dataType: "json",
    success: function(data) {
      console.info(data);
      datosRegistro = {
        data: [
          {
            Name: "Yenifer Rivas",
            Email: "yenniyo2@hotmail.com",
            Movil: "3206122014",
            Descripcion: "Candidato"
          }
        ]
      };

      $.post(
        "https://www.zohoapis.com/crm/v2/Candidatos",
        datosRegistro,
        function name(recibido) {
          console.log(recibido);
        }
      );
    }
  });
});
