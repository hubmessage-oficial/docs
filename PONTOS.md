## O que precisamos arrumar

### Infraestrutura
- [ ] Dashboards da interface não refletem as coisas.
- [ ] Criação de instância (canal) quebra.

### Envio de texto
- [ ] `delayMessage`, `delayTyping` precisam ser revistos. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/typing-indicators
- [ ] Responder mensagem não está funcionando. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contextual-replies

### Envio de mídia
- [ ] Imagem, áudio, vídeo de visualização única não funciona (`viewOnce`).
- [ ] Envio de imagem não funciona com Base64.
- [ ] Envio de áudio não funciona com Base64.
- [ ] Envio de áudio não tem opção `ptt` para parecer áudio gravado. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/audio-messages (atributo `"voice": true`)
- [ ] Envio de sticker não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/sticker-messages
- [ ] Envio de documento: quando passa `fileName: "meu documento.pdf"` chega como "meu documento.pdf.pdf". Se passa `"meu documento"` chega como "meu documento.null".

### Envio de link
- [ ] Enviar mensagem de link não funciona. Poderia ser enviado um `templateMessage`.

### Envio de localização
- [ ] Não funciona copiando body exato da Z-API: `{"error": "json: cannot unmarshal string into Go struct field SendMessageInput.latitude of type float64"}`. Se passa number ao invés de string, não dá erro mas a mensagem não é enviada. Ideal aceitar string também.

### Envio de contato
- [ ] Enviar vários contatos não funciona (`send-contacts`), apenas um (`send-contact`). Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contacts-messages

### Reações
- [ ] Enviar/remover reação não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/reaction-messages

### Botões e listas
- [ ] Enviar texto com botões não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages
- [ ] Enviar botões de ação não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-cta-url-messages
- [ ] Enviar botões com imagem não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages
- [ ] Enviar botões com vídeo não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-reply-buttons-messages
- [ ] Enviar lista de opções (`option-list`) não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-list-messages
- [ ] Enviar botão Pix não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix
- [ ] Enviar carrossel não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-media-carousel-messages

### Catálogo e produtos
- [ ] Enviar produto não funciona. Ref: https://www.postman.com/meta/whatsapp-business-platform/example/13382743-d630e536-f57b-4d4c-b2d4-f7c1f43d7495?sideView=agentMode
- [ ] Enviar catálogo não funciona. Ref: https://www.postman.com/meta/whatsapp-business-platform/request/13382743-ecf9332f-19fc-4cb1-a674-caf69bc3e766?sideView=agentMode&tab=body

### Pedidos e pagamentos
- [ ] Enviar pedido não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#order-details-example
- [ ] Enviar status do pedido não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#order-status-example
- [ ] Enviar status do pagamento não funciona. Ref: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/orders#paymentstatussupported

---

## Em desenvolvimento (funcionalidades que a API oficial suporta e precisam ser implementadas)

### Grupos
- [ ] Criar grupo — Z-API: `POST /create-group` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Metadados do grupo — Z-API: `GET /group-metadata/{phone}` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Remover participantes — Z-API: `POST /remove-participant` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Aprovar participantes — Z-API: `POST /approve-participant` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Rejeitar participantes — Z-API: `POST /reject-participant` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Obter link de convite — Z-API: `GET /group-invitation-link/{id}` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Redefinir link de convite — Z-API: `POST /redefine-invitation-link/{id}` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Alterar descrição do grupo — Z-API: `POST /update-group-description` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Atualizar nome do grupo — Z-API: `POST /update-group-name` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference
- [ ] Atualizar imagem do grupo — Z-API: `POST /update-group-photo` — Ref oficial: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/reference

### Perfil da empresa
- [ ] Dados da conta business — Z-API: `GET /business/profile` — Ref oficial: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles
- [ ] Alterar descrição da empresa — Z-API: `POST /business/company-description` — Ref oficial: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles
- [ ] Alterar email da empresa — Z-API: `POST /business/company-email` — Ref oficial: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles
- [ ] Alterar endereço comercial — Z-API: `POST /business/company-address` — Ref oficial: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles
- [ ] Alterar websites da empresa — Z-API: `POST /business/company-websites` — Ref oficial: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles
- [ ] Atribuir categorias — Z-API: `POST /business/categories` — Ref oficial: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles

### Catálogo e produtos
- [ ] Criar/editar produto — Z-API: `POST /products` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/products/
- [ ] Listar produtos — Z-API: `GET /catalogs` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/products/
- [ ] Buscar produto por ID — Z-API: `GET /products/{productId}` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/products/
- [ ] Deletar produto — Z-API: `DELETE /products/{productId}` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/products/
- [ ] Configuração do catálogo — Z-API: `POST /catalogs/config` — Ref oficial: https://developers.facebook.com/docs/whatsapp/cloud-api/guides/sell-products-and-services/
- [ ] Criar coleção — Z-API: `POST /catalogs/collection` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/product-sets/
- [ ] Listar coleções — Z-API: `GET /catalogs/collection` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/product-sets/
- [ ] Deletar coleção — Z-API: `DELETE /catalogs/collection/{id}` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/product-sets/
- [ ] Editar coleção — Z-API: `POST /catalogs/collection-edit/{id}` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/product-sets/
- [ ] Listar produtos da coleção — Z-API: `GET /catalogs/collection-products/{phone}` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/product-sets/
- [ ] Adicionar produto à coleção — Z-API: `POST /catalogs/collection/add-product` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/product-sets/
- [ ] Remover produto da coleção — Z-API: `POST /catalogs/collection/remove-product` — Ref oficial: https://developers.facebook.com/docs/marketing-api/reference/product-catalog/product-sets/

---

## Itens já removidos da doc (atributos que não existem na oficial)

- `waveform` removido do envio de áudio.
- `editMessageId` removido dos envios (edição de mensagem não existe).
- `editDocumentMessageId` removido do envio de documento.
- `privateAnswer` removido do reply-message (resposta privada em grupo não existe).

---

## Envios que não existem na API oficial (documentados em Limitações)

- Deletar mensagem — https://developer.z-api.io/message/delete-message
- Encaminhar mensagem — https://developer.z-api.io/message/forward-message
- Envio de GIF — https://developer.z-api.io/message/send-message-gif
- Enviar PTV — https://developer.z-api.io/message/send-message-ptv
- Envio de OTP via botão (apenas via template) — https://developer.z-api.io/message/send-button-otp
- Enviar enquete / voto — https://developer.z-api.io/message/send-poll
- Fixar mensagem — https://developer.z-api.io/message/send-pin-message
- Enviar / editar / responder evento — https://developer.z-api.io/message/send-event
- Convite de admin de canal — https://developer.z-api.io/message/send-newsletter-admin-invite
- APIs de contatos — https://developer.z-api.io/contacts/introduction
- Status (stories) — https://developer.z-api.io/status/introduction
- Canais (newsletter) — https://developer.z-api.io/newsletter/introduction
- Chats — https://developer.z-api.io/chats/introduction
- Comunidades — https://developer.z-api.io/communities/introduction
- Chamadas — https://developer.z-api.io/calls/introduction
- Privacidade — https://developer.z-api.io/privacy/introduction
- Etiquetas (tags) — https://developer.z-api.io/business/tags
