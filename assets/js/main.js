// owl carousel
$('.clients-carousel').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        991: {
            items: 5
        },
        1200: {
            items: 5
        },
        1920: {
            items: 5
        }
    }
});

// validate code

    // return true - form is valid
    // return false - form is not valid
    function validate() {
        let flag = false;
        // name feild
        let name = $('.name-feild').val();
        if (name == "" || name == undefined) {
            $(".name-feild-msg").html("Name is required!").addClass("text-danger");
            f = false;
        }
        else{
            $(".name-feild-msg").removeClass("text-danger").addClass(".form-text");
            f = true;
        }

        // email validation
        let email = $('.email-feild').val();
        let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email == "" || email == undefined) {
            $(".email-feild-msg").html("Email is required!").addClass("text-danger");
            f = false;
        }
        else if (exp.test(email) == false) {
            $(".email-feild-msg").html("Invalid Email, email must contain @ , . (example@gmail.com) !").addClass("text-danger");
            f = false;
        }
        else{
            $(".email-feild-msg").removeClass("text-danger").addClass(".form-text");
            f = true;
        }

        return f;
    }