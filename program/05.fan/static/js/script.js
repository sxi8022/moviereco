$(document).ready(function () {
listing();
});
// Read 읽기
function listing() {
fetch('/movie').then((res) => res.json()).then((data) => {
  let rows = data['result']
  $('#cards-box').empty()
  rows.forEach((a) => {
    
    let comment = a['comment']
    let title = a['title']
    let desc = a['desc']
    let image = a['image']
    let star = a['star']
    let genre = a['genre']
    
    let star_repeat = '⭐'.repeat(star)

    let temp_html = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-4">
                              <div class="card h-100">
                                <img src="${image}"
                                      class="card-img-top" >
                                  <div class="card-body">
                                      <h5 class="card-title">${title}</h5>
                                      <p class="card-text">${genre}</p>
                                      <p class="card-text">${desc}</p>
                                      <p class="star">${star_repeat}</p>
                                      <p class="mycomment">${comment}</p>
                                  </div>
                              </div>
                          </div>`
    $('#cards-box').append(temp_html)
  });
})
}
// Create 등록
function posting() {
let url = $('#url').val()
let comment = $('#comment').val()
let star = $('#star').val()
let genre = $('#genre').val()

let formData = new FormData();
formData.append("url_give", url);
formData.append("comment_give", comment); 
formData.append("star_give", star);
formData.append("genre_give", genre);

fetch('/movie', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
  alert(data['msg'])
})
}

// 박스 열기 닫기
function open_box() {
$('#post-box').show()
}
function close_box() {
$('#post-box').hide()
}


