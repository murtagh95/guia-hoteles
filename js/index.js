$(function () {
  // Activamos los tooltip y popover
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  // Cambiamos la config de los carousel
  $('.carousel').carousel({
    interval: 3500
  })

  // Activamos en evento que se realizara cuando inice la carga del modal
  $('#contacto').on('show.bs.modal', function (e) {
    console.log('El modal se esta cargando');

    // Le sacamos una clase al boton de contacto
    $('#contactoBtn').removeClass("btn-outline-success");
    // Le agregamos otra clase al boton
    $('#contactoBtn').addClass("btn-primary");

    // Desabiitamos el boton
    $('#contactoBtn').prop("disabled", true);
  });
  // Lo activamos cuando se termina de cargar
  $('#contacto').on('shown.bs.modal', function (e) {
    console.log('El modal se esta mostrando');
  });
  // Lo activamos cuando se inicie el cierre
  $('#contacto').on('hide.bs.modal', function (e) {
    console.log('El modal se esta ocultando');
  });
  // Lo activamos cuando se termina el cierre
  $('#contacto').on('hidden.bs.modal', function (e) {
    console.log('El modal se oculto');
    // Habilitamos el boton
    $('#contactoBtn').prop("disabled", false);
  });

});