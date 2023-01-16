$('a.scrollto').click(function () {
  var elementClick = $(this).attr('href');
  var destination = $(elementClick).offset().top;
  jQuery('html:not(:animated),body:not(:animated)').animate(
    {
      scrollTop: destination,
    },
    1000
  );
  return false;
});
