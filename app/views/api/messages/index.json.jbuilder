json.array! @messages do |message|
  json.body    message.body
  json.image      message.image
  json.date message.created_at
  json.user  message.user.name
  json.id         message.id
end