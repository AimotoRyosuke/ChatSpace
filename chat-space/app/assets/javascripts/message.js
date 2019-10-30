$(function(){
  function appendMessage(data){
      let img_tag = (data.image.url ) ? `<img src="${data.image.url}">` : ("");
      let message =  `<li class="message-list__message" data-id = ${data.id}>
                        <p class="message-list__message__user">
                          ${data.user}
                        </p>
                        <p class="message-list__message__date">
                          ${data.date}
                        </p>
                        <p class="message-list__message__text">
                          ${data.body}
                        </p>
                        ${img_tag}
                      </li>`
      return message;
    
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let href = window.location.href ;
    $.ajax({
      url : href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let new_message = appendMessage(data);
      $('.message-list').append(new_message)
      $('#new_message')[0].reset();
      $('.send-box__form__submit-btn').removeAttr('disabled');
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight})
    })
    .fail(function(){
      alert('メッセージを入力してください');
      $('.send-box__form__submit-btn').removeAttr('disabled');
    })
  }) 

  var reloadMessages = function() {
    function appendBuild(message) {
    let img_tag = (message.image.url ) ? `<img src="${message.image.url}">` : ("");
    let add_message =  `<li class="message-list__message" data-id = ${message.id}>
                          <p class="message-list__message__user">
                            ${message.user}
                          </p>
                          <p class="message-list__message__date">
                            ${message.date}
                          </p>
                          <p class="message-list__message__text">
                            ${message.body}
                          </p>
                          ${img_tag}
                        </li>`  ;
    $(".message-list").append(add_message)
    }
    last_message_id = $('.message-list__message:last').data('id');
    group_id = $('.group-field__name').data('group-id');
    $.ajax({
      url: `http://localhost:3000/groups/${group_id}/api/messages`,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('success');
      messages.forEach(function(message) {
        appendBuild(message);
      });
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight})
    })
    .fail(function() {
      console.log('error');
    });
  };
  if(!($('.group-field__name').data('group-id') === undefined)) {
    setInterval(reloadMessages, 5000);
  }
});