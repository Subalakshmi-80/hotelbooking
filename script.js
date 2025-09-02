var  explore = document.getElementById("explore")

explore.addEventListener("click",()=>{
    window.location.href="rooms.html"
})

var  book = document.getElementById("book")
var book1 = document.getElementById("book1")
book.addEventListener("click",()=>{
    window.location.href="booking.html"
})

book1.addEventListener("click",()=>{
    window.location.href="booking.html"
})

var contact = document.getElementById("contact")
contact.addEventListener("click",()=>{
    window.location.href="contact.html"
})


// booking.html
 const bookingForm = document.getElementById('bookingForm');
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reservation Completed! Thank you.');
    // Add more logic for form submission here
  });