$(document).on('knack-scene-render.any', function(event, scene) {
  var user = Knack.getUserAttributes();
  if (user.email == null) {
    window.location.replace("/cs-course/login");
  };
});
