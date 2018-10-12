const $main = $('main')
const $selector = $('#image-filter')

const apiURL = `https://raw.githubusercontent.com/CodePartnersMD/MD301-01/master/02-jquery-selectors-events/lab/page-1.json`



const Unicorn =function (imageObj) {
  this.title = imageObj.title;
  this.image_url = imageObj.image_url;
  this.description = imageObj.description;
  this.keyword =  imageObj.keyword;
  this.horns = imageObj.horns;

}

let allUnicorns = []


Unicorn.prototype.renderUnicorn = imgObj => {
  let $unicornClone = $('#image-template').clone()
  $main.append($unicornClone)
  $unicornClone.attr('id', imgObj.keyword)
  $unicornClone.find('img').attr('src', imgObj.image_url)
  $unicornClone.find('p').text(imgObj.title)
}



$($selector).on('change', () => {
  $('section').hide()
  $(`section[id=${event.target.value}]`).show()
  
})


$.getJSON(apiURL, response => {
  response.forEach((val) => {
    let newUnicorn = new Unicorn(val)
    allUnicorns.push(newUnicorn)
    newUnicorn.renderUnicorn(val)
    $selector.append(`<option value=${newUnicorn.keyword}>${newUnicorn.keyword}</option>`)
  })
})

  
