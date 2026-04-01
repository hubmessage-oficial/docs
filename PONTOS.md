o que precisamos arrumar:

- criacao de instancia quebra.
- delayMessage, delayTyping precisam ser revistos. (https://developers.facebook.com/documentation/business-messaging/whatsapp/typing-indicators)
- imagem, audio, video de visualização unica nao ta funcionando. (viewOnce)
- envio de imagem não funciona com base64.
- envio de audio não funciona com base64.
- envio de audio atributo waveform não precisa mais existir.
- envio de audio não tem opcao "ptt" para parecer que eu gravei o audio e enviei. (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/audio-messages) atributo "voice": true
- envio de sticker não funciona. (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/sticker-messages)
- envio/remover reação não funciona (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/reaction-messages)
- no envio de documento quando passo no filename "meu documento.pdf" chega no whatsapp "meu documento.pdf.pdf" se passo apenas "meu documento" chega no whatsapp "meu documento.null"
- enviar mensagem de link não funciona, poderia ser enviado um templateMessage.
- envio de localização não funciona copiando body exato da z-api, {
  "error": "json: cannot unmarshal string into Go struct field SendMessageInput.latitude of type float64"
  }, caso eu passe numero ao inves de string, nao da erro porem a mensagem não é enviada. (ideal é aceitar string tb não forcar number).
- enviar contato funcionou (send-contact) mais enviar varios contatos não funcionou (send-contacts) (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contacts-messages)
- enviar texto com botões não funcionou. (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages)
- enviar botoes de acao não funcionou (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-cta-url-messages)
- enviar botoes com imagem nao funcionou (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages)
- enviar botoes com video nao funcionou (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages)
- enviat lista de opcoes (option-list) não funcionou (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-list-messages)
- enviar produto não ta funcionando (https://www.postman.com/meta/whatsapp-business-platform/example/13382743-d630e536-f57b-4d4c-b2d4-f7c1f43d7495?sideView=agentMode)
- enviar catlalogo nao ta funcionando (https://www.postman.com/meta/whatsapp-business-platform/request/13382743-ecf9332f-19fc-4cb1-a674-caf69bc3e766?sideView=agentMode&tab=body)
- enviar botão pix não está funcionando (https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix)
- enviar carousel não está funcionando (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-media-carousel-messages)
- responder mensagem não está funcionadno (https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contextual-replies)
- enviar pedido não ta funcionando (https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#order-details-example)
- enviar status do pedido nao funciona (https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#order-status-example)
- enviar status do pagamento (https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#paymentstatussupported)

Envios que não temos:

- deletar mensagem não existe na api oficial.
- edição de mensagem nao não existe. (editMessageId) dos envios.
- Encaminhar mensagem não existe.
- Envio de gif não existe.
- Enviar PTV não existe.
- no envio de documento não tem a opcao para editar descricao o atributo editDocumentMessageId do send-document.
- envio de otp agora só é possivel via template
- responder mensagens funciona, apenas responder mensagens privado da pessoa quando é mensagem em grupo, ai nao funciona.
- enviar enquete, voto de enquete não existe na api oficial.
- fixar mensagens não existe.
- enviar, editar, responder evento não existe.
- enviar convite de admin do canal

oq nao teve como validar pois documentacao da meta nao mostra e ta com bug:

- enviar produto
- enviar catalogo
