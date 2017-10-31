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

Address.prototype.fullAddress = function() {
  return this.street + ', ' + this.city + ', ' + this.state;
};

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    debugger;
    event.preventDefault();
    var inputtedfirstName = $("input#new-first-name").val();
    var inputtedlastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#street").val();
    var inputtedCity = $("input#city").val();
    var inputtedState = $("input#state").val();
    var newContact = new Contact(inputtedfirstName, inputtedlastName);
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    newContact.addresses.push(newAddress);
    alert(newContact.addresses)
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      newContact.addresses.forEach(function(address){
        $(".fullAddress").text(address.fullAddress());
      });

    });
  });

});
