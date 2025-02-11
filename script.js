$(document).ready(function () {

    // e.preventDefault(); // Prevent form from submitting

    // Show form when button is clicked
    $('#showFormBtn').click(function () {
        $('#formContainer').toggle();
    });

    // ------------passowrd validation 
    $('#password').on('keyup', function () {
        passValue = $(this).val();

        console.log(passValue);

        if (passValue.match(/[a-z]/g)) {
            $(".check_lower").addClass('right right-icon');

        } else {
            $('.check_lower').removeClass('right right-icon');
        }
        if (passValue.match(/[A-Z]/g)) {
            $(".check_Capital").addClass('right right-icon');
        } else {
            $('.check_Capital').removeClass('right right-icon');
        }

        if (passValue.match(/[0-9]/g)) {
            $(".check_number").addClass('right right-icon');
        } else {
            $('.check_number').removeClass('right right-icon');
        }
        if (passValue.match(/[!@#$%^&*]/g)) {
            $(".check_special").addClass('right right-icon');
        } else {
            $('.check_special').removeClass('right right-icon');
        }

        if (passValue.length == 8 || passValue.length > 8) {
            $(".check_length").addClass('right right-icon');
            $("#password-icon").addClass(' right-icon');
        } else {
            $('.check_length').removeClass('right right-icon');
            $('#password-icon').removeClass(' right-icon');
        }

    })

    // --------Input Field validation 
    $('#name').on('keyup', function () {
        InputValue = $(this).val();
        if ((InputValue.match(/[a-z]/g) || InputValue.match(/[A-Z]/g)) && InputValue.length >= 3) {
            $("#name-icon").addClass(' right-icon');
        } else {
            $('#name-icon').removeClass(' right-icon');
        }

    })


    $('#number').on('keyup', function () {
        InputValue = $(this).val();

        if ((InputValue.length == 10) && InputValue.match(/[0-9]/g)) {
            $("#number-icon").addClass(' right-icon');
        } else {
            $('#number-icon').removeClass(' right-icon');
        }

    })

    $('#date').on('change', function () {
        InputValue = $(this).val();

        if (InputValue.length) {
            $("#date-icon").addClass(' right-icon');
        } else {
            $('#date-icon').removeClass(' right-icon');
        }

    })

    $('#imag_uploade').on('change', function () {
        InputValue = $(this).val();

        if (InputValue.length) {
            $("#image-icon").addClass(' right-icon');
        } else {
            $('#image-icon').removeClass(' right-icon');
        }

    })

    $('#email').on('change', function () {
        InputValue = $(this).val();

        if (InputValue.match('@gmail.com') && InputValue.length >= 11) {
            $("#email-icon").addClass(' right-icon');
        } else {
            $('#email-icon').removeClass(' right-icon');
        }

    })



    // Handle form submission
    $('#myForm').submit(function () {

        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const number = $('#number').val();

        // Check Name field
        if (name) {
            $('#name-icon').removeClass('wrong-icon').addClass('right-icon');
        } else {
            $('#name-icon').removeClass('right-icon').addClass('wrong-icon').text('✘');
        }

        // Check Email field
        if (email) {
            $('#email-icon').removeClass('wrong-icon').addClass('right-icon');
        } else {
            $('#email-icon').removeClass('right-icon').addClass('wrong-icon').text('✘');
        }


        // Check Number field
        if (number) {
            $('#number-icon').removeClass('wrong-icon').addClass('right-icon');
        } else {
            $('#number-icon').removeClass('right-icon').addClass('wrong-icon').text('✘');
        }

        // Provide overall feedback based on both fields
        if (name && email) {
            $('#message').text('Form submitted successfully!').removeClass('wrong');
        } else {
            $('#message').text('Please fill in all required fields.').removeClass('right').addClass('wrong');
        }



        // Toggle icon visibility on input change
        $('#name, #email, #number, #password').on('input', function () {
            let inputId = $(this).attr('id');
            if ($(this).val()) {
                $('#' + inputId + '-icon').css('visibility', 'visible');
            } else {
                $('#' + inputId + '-icon').css('visibility', 'visible');
            }
        });


        // ---------previw of photo-- 

    });
    //sign toggle

    $("#imag_uploade").change(function (e) {
        const img = URL.createObjectURL(e.target.files[0]);
        $("#display_img").attr("src", img);
        // console.log(e);
        // console.log('sachin');
    })





});

