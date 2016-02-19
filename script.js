$(document).on('ready page:load', ready)

function ready() {
  
  $('#new-message-button').click(addMessage);
  
  // function addMessage(){
  //   $('ol').append(<li>);
  // }

 function addMessage() {
 var message = $('#new-message-body').val();
 
 $('ol').append('<li class="message"><a class=\'delete\' href=\'#\'>Delete</a><h3 class="author">Me</h3><p class="message-body">' + message + '</p><span class="timestamp">01:12</span></li>');
 }
 
 

$(function () {
   $('#new-message-body').keypress(function (e) {
       if (e.keyCode === 13) {
         e.preventDefault();
         alert("Send message?");
         $('#new-message-button').trigger('click');
       }
   });
});
 
 

}
