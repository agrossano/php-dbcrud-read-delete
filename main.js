function printPaganti(paganti) {
  const target = $(".paganti");
  const template = $("#paganti-template").html();
  const compiled = Handlebars.compile(template);

  for (let pagante of paganti) {
    //console.log(pagante)
    const pagantiHTML = compiled(pagante);
    target.append(pagantiHTML);
  }
}


function getPagamenti() {
  $.ajax({
    url: "getPagamenti.php",
    method: "GET",
    success: function (data) {
      //console.log(data)

      printPaganti(data)
    },
    error: function (err) {
      console.log(err)
    }
  })
}


removePagante() {
  const thisParent = $(this).parent();
  const dataId = thisParent.data("id");

  $.ajax({
    url: "deletePagamento.php",
    method: "POST",
    data: { "id": dataId },
    success: function (data) {
      removeAnim(thisParent);
    },
    error: function (err) {
      console.log(err)
    }
  })
}


function removeAnim(el) {
  el.animate({ opacity: '0' }, 150, function () {
    el.animate({ height: '0' }, 150, function () {
      el.remove();
    });
  });
}


function init() {
  getPagamenti();
  $(document).on("click", "i", removePagante);
}


$(document).ready(init);