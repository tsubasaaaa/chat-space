$(function(){
  function buildHTML(message){
    var insertImage = message.image ? `<img src="${message.image}">` : '';
    var html = '<div class="message" data-id=' + message.id + '>' +
                  '<div class="message__upper-info">' +
                    '<div class="message__upper-info__talker">' +
                      message.name +
                    '</div>' +
                    '<div class="message__upper-info__date">' +
                      message.created_at +
                    '</div>' +
                  '</div>' +
                  '<div class="meesage__text">' +
                      '<p class="lower-message__content">' +
                        message.content +
                      '</p>' +
                      insertImage +
                  '</div>' +
                '</div>'
        return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('form')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.submit-btn').removeAttr('disabled'); 
    })
    .fail(function(){
      alert('errorだよん');
    })
  })
  var reloadMessages = function() {
    last_message_id = $(".message").last().data();
    $.ajax({
      url: '/api/messages',
      type: 'get',
      dataType: 'json',
      data: last_message_id
    })
    .done(function(messages) {
      var insertHTML = '';
      if (messages.length !== 0) {
        messages.forEach(function(message){
          console.log(message)
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML)
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      }
    })
    .fail(function() {
      alert('errorだよ〜');
    });
  };
  if (location.pathname.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 5000);
   }
});