json.id @message.id
json.user @message.user.name
json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
json.body @message.body
json.image @message.image
# binding.pry