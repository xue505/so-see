$(function(){

  $('.year a').click(function(){

    $('.years:first-child').text($(this).text());
    $('.years:first-child').val($(this).text());
  });

  $('.model a').click(function(){

    $('.models:first-child').text($(this).text());
    $('.models:first-child').val($(this).text());
  });

  $(".all_br").click(function() {
    //$('.info-body').css("visibility", "hidden");
    $(".info-body").animate({height: "hide"}, 500, function() {
      $('.search').removeClass('col-md-8').animate({width: "default" }, 500, "linear");
    });
  });
    
    //$('.search').switchClass("col-md-8", "col-md-12", 300, "easeInOutQuad");

  $(".search-btn").on('click', function() {
    $('.models').attr('disabled');
    $('.models').text('model ');
    $('.field').removeClass('selected');
    $('.years').text('from year ');
  });

  $(".field").on('click', function() {
    $('.field').removeClass('selected');
    $(this).find('h4').css({"color": "black"});
    $(this).addClass('selected');
    $('.models').removeAttr('disabled');
  });

});

var app = new Vue({
  el: ".all",
  data() {
    return {
      make: '',
      model: '',
      mazda_model: '',
      errors: []
    }
  },
  methods: {
    postMake() {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.mazda_model = response.data.bpi));
    },
    postPost() {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        carMake: this.make,
        carModel: this.model
      })
      .then(response => {})
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
})
