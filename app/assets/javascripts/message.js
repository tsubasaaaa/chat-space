$(function(){
  function buildHTML(message){
    var insertImage = '';
    if (message.image){
      insertImage = `<img src="${message.image}">`;
    }
    var html = `<div class="message">
                  <div class="message__upper-info">
                    <div class="message__upper-info__talker">
                      ${message.name}
                    </div>
                    <div class="message__upper-info__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="meesage__text">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      ${insertImage}
                  </div>
                </div>`
        return html;
  }
  $('form').on('submit', function(e){
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
      alert('error');
    })
  })
});