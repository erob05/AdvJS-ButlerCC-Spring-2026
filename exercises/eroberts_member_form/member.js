"use strict";
$(document).ready( () => {

    // move focus to first text box
    $("#email").focus();
    
    // the handler for the change event of the radio buttons
    $(":radio").change( () => {
        const radioButton = $(":radio:checked").val();
        if (radioButton == "corporate") {
            $("#company_name").attr("disabled", false);
            $("#company_name").next().text("*");
        } else {
            /*Select company_name and change the attribute disabled to true;
            Select the element after company_name and set the text to an empty string;*/
            $("#company_name").attr("disabled", true);
            $("#company_name").next().text("");
        }
    });
    
    // the handler for the click event of the submit button
    $("#member_form").submit( event => {
        let isValid = true;
        
        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
            
        // validate the password entry
        const password = $("#password").val().trim();
        if ( password.length < 6) {
            /*Select the element next to the password textbox and change the text to: Must be 6 or more characters.;
            Set isValid to false;*/
            $("#password").next().text("Must be 6 or more characters.");
            isValid = false;
        } else {
            /*Select the element after the password textbox and fill the span with an empty string;*/
            $("#password").next().text("");
        }
        /*Set the value of the password textbox to the constant password;*/
        $("#password").val(password);
        
        // validate the verify entry
        const verify = $("#verify").val().trim();
        if (verify == "") { 
			/*Select the element next to the verify textbox and change the text to: This field is required.;
            Set isValid to false;*/
            $("#verify").next().text("This field is required.");
            isValid = false;
        } else if (verify !== password) {
			/*Select the element next to the verify textbox and change the text to: Must match first password entry.;
            Set isValid to false;*/
            $("#verify").next().text("Must match first password entry.");
        } else {
            /*Select the element after the verify textbox and fill the span with an empty string;*/
            $("#verify").next().text("");
        }
        /*Set the value of the verify textbox to the constant verify;*/
        $("#verify").val(verify);
        
        // validate the company name entry
        if ( !$("#company_name").attr("disabled")) {
            const companyName = $("#company_name").val().trim();/*Select the company name textbox, get the value, and trim the empty spaces;*/
            if (companyName == "") {
				/*Select the element next to the company name textbox and change the text to: This field is required.;
            Set isValid to false;*/
                $("#company_name").next().text("This field is required.");
                isValid = false;
            } else {
                /*Select the element after the company name textbox and fill the span with an empty string;*/
                $("#company_name").next().text("");
            }
            /*Set the value of the company name textbox to the constant companyName;*/
            $("company_name").val(companyName);
        }
                    
        // validate the first name entry
        const firstName = $("#first_name").val().trim();/*Select the first name textbox, get the value, and trim the empty spaces;*/
        if (firstName == "") {
			/*Select the element next to the first name textbox and change the text to: This field is required.;
            Set isValid to false;*/
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            /*Select the element after the first name textbox and fill the span with an empty string;*/
            $("#first_name").next().text("");
        }
        /*Set the value of the first name textbox to the constant firstName;*/
        $("#first_name").val(firstName);
                    
        // validate the last name entry
        const lastName = $("#last_name").val().trim();/*Select the last name textbox, get the value, and trim the empty spaces;*/
        if (lastName == "") {
            /*Select the element next to the last name textbox and change the text to: This field is required.;
            Set isValid to false;*/
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            /*Select the element after the last name textbox and fill the span with an empty string;*/
            $("#last_name").next().text("");
        }
        /*Set the value of the last name textbox to the constant lastName;*/
        $("#last_name").val(lastName);
            
        // validate the phone number with a regular expression
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phone = $("#phone").val().trim();/*Select the phone textbox, get the value, and trim the empty spaces;*/
        if (phone == "") { 
            /*Select the element next to the phone textbox and change the text to: This field is required.;
            Set isValid to false;*/
            $("#phone").next().text("This field is required.");
            isValid = false;

        } else if ( !phonePattern.test(phone) ) {
			/*Select the element next to the phone textbox and change the text to: Use 999-999-9999 format.;
            Set isValid to false;*/
            $("#phone").next().text("Use 999-999-9999 format.");
            isValid = false;
        } else {
            /* Select the element after the phone textbox and fill the span with an empty string; */
            $("#phone").next().text("");
        }
        /*Set the value of the phone textbox to the constant phone;*/
        $("#phone").val(phone);
                    
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();                
        }
    });

});