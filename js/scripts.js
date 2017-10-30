function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedfirstName = $("input#new-first-name").val();
    var inputtedlastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedfirstName, inputtedlastName);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      alert("click!")
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });

});
