$(function(){
  function appendMessage(data){
      let img_tag = (data.image.url ) ? `<img src="${data.image.url}">` : ("");
      let message =  `<li class="message-list__message">
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
  // }
});