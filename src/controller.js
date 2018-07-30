(function(exports) {
  function ChitterController() {};

  window.onload = function() {
    viewPeeps();
  };

  function viewPeeps() {
    Controller.prototype.getHTML = function() {
        var id = document.getElementById('viewpeeps');
        id.innerHTML = seePeeps();
      }

  exports.ChitterController = ChitterController;
})(this);
