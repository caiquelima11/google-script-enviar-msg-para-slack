function postToSlack() {
  var webhookUrl = "URL DO WEBHOOK DE ENTRADA GERADA NO SLACK"
  
  var payload = {
    "channel" : "NOME DO CANAL QUE RECEBERÁ AS MENSAGENS",
    "username" : "NOME DO USUÁRIO QUE ENVIARA AS MENSAGENS",
    "icon_url" : "",
    "text" : "TÍTULO DA MENSAGEM",
    "attachments": [{
      "text": "TEXTO QUE SERÁ ENVIADO",
      "footer": "",
      "mrkdwn_in": ["text"]
    }]
  }
 
  var options = {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : JSON.stringify(payload)
  };
 
  return UrlFetchApp.fetch(webhookUrl, options)
}