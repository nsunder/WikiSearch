$(function(){

$("#search").on("click",function(){
var query=  $("#searchTerm").val();
var Url= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+query+"&format=json&callback=?";

//   $.ajax({
//   async: false,
//   type: 'GET',
//   url: Url,
//   success: function(data) {
//    api = data;
//   }
//   }).done(function(data){
//    $.ajax({
//     url:Url,
//      type:'GET',
//      async:false,
//      contentType:"application/json; charset=utf-8",
//      dataType:"json",
//      success: function(status,data){
//        console.log(data);
//      }
//
//    }).done(function(){console.log("success");})
//   console.log(data);
//
// }).fail(function(err){console.log(err)})
//   .always(function(){console.log("complete");})
//
//
//

$.getJSON(Url, function(data){

for(var i=0; i< data[1].length; i++){
    $('.output').append(

        "<div class='appendedelem'> <div class='titleelem'>"+data[1][i]+"</div>"+
        "<div>"+data[2][i]+"</div>"+
         "<div>"+"<a href='"+data[3][i]+"' target='blank'>"+"For more information please click here "+"</a>"+"</div></div>"

    )
  }
});
});



});
