$(document).ready(function () {
  const testimonials = [
    {
      name: "Sophia Carter",
      position: "Project Manager",
      photo: "https://randomuser.me/api/portraits/women/46.jpg",
      text: "I've had the pleasure of working with countless developers, and this one stands out for their professionalism and attention to detail.",
    },
    {
      name: "Alex Johnson",
      position: "Senior Developer",
      photo: "https://randomuser.me/api/portraits/men/44.jpg",
      text: "This developer has an exceptional ability to turn complex problems into elegant solutions. Highly recommended!",
    },
    {
      name: "Emily Davis",
      position: "UI/UX Designer",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Their work ethic and creativity are truly impressive. Every project is handled with care and professionalism.",
    },
    {
      name: "John Doe",
      position: "Data Scientist",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "A brilliant developer who is able to understand the most difficult challenges and find simple solutions.",
    },
    {
      name: "Emma Brown",
      position: "Marketing Specialist",
      photo: "https://randomuser.me/api/portraits/women/60.jpg",
      text: "I’ve never worked with someone so dedicated to delivering top-quality results. Absolutely fantastic!",
    },
  ];

  let idx = 0;

  function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    $(".testimonial").fadeOut(500, function () {
      $(this).html(text).fadeIn(500);
    });
    $(".user-image").fadeOut(500, function () {
      $(this).attr("src", photo).fadeIn(500);
    });
    $(".username").fadeOut(500, function () {
      $(this).html(name).fadeIn(500);
    });
    $(".role").fadeOut(500, function () {
      $(this).html(position).fadeIn(500);
    });

    idx++;

    if (idx > testimonials.length - 1) {
      idx = 0;
    }
  }

  setInterval(updateTestimonial, 10000);
});
