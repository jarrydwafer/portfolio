---
layout: post
title:  "Building an AJAX contact form"
unique-id: "case-study-6"
date:   2017-1-21 18:11:00 -0800
categories: tutorials
---

[AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) stands for *Asynchronous Javascript and XML* which allows us to exchange information between the server and client asynchronously which means that we can make changes on a website without having to refresh or update a page. This comes in handy when sending client information through a server for features such as contact forms.

There are pros and cons to using AJAX that you may want to consider before deciding to use on a simple website. Benefits include:
- can be used on any platform or browser
- low transfer between client and server
- resource optimization
- allows request to a server to receive data without loading a new page
- can improve user experience

Some disadvantages of using AJAX are:
- javascript must be enabled to run
- has to make an additional call to a server
- some functions that are used in web browsing may not work as expected which means you may have to write browser specific code

In this short tutorial, we will build an example of a simple AJAX form that you can use on most web projects.

### Building the HTML form

Let's start to build the HTML scaffolding so that we can implement AJAX to submit data from a form in the background. We are going to be using jQuery to help simplify the JavaScript that we have to write and a simple PHP mailer script to handle sending the user's data via email.

Create a form with the element ID ```ajax-contact-form```, set the ```method``` attribute to ```post```, and the ```action``` attribute to ```mailer.php```. We will create the mailer.php later.

```html
<form id="ajax-contact-form" method="post" action="mailer.php">
  <div class="field">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="field">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="field">
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <div class="field">
    <button type="submit">Send</button>
  </div>
</form>
```

Our simple form has fields to collect a user's name, email, and message. We added a ```required``` attribute to each field to make sure to leverage HTML5 validation so that a form can only be submitted when all fields have been completed.

Next we will also want to create an element that will be used to display a message indicating success or an error to to the user. We will have this appear above the form.

```html
<div id="form-messages"></div>
```

#### Submitting the Form Using AJAX

Now that we have our HTML for a form in place, we now need to add some JavaScript to the page in order to submit the form. Since we are going to be using jQuery in this example, make sure that a version of jQuery is initialized before you add your script.

We will want to set up variables for the form and the message section. Then we want to set up an event listener for when the form is submitted.

```js
$(function(){
  // Define variable for the form and message section
  var form = $('#ajax-contact-form');
  var formMessages = $('#form-messages');

  // Set up event listener to submit the form
  $(form).submit(function(event) {
    // Stop he browser from submitting the form
    event.preventDefault();
  })
});
```

We will want to pass a function to the ```submit``` method that will be executed when a user submits the form. We also told the browser to not submit the form as it normally would by preventing the default action so that we can define our own.

We want to now convert this data into a key/value string that can be sent with he AJAX request by serializing it. We will use jQuery ```serialize``` method and store the result in a variable called ```formData```. Then we will submit the code with AJAX by adding this code to your function:

```js
    var formData = $(form).serialize();

    // Submit using AJAX
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
```

We are using jQuery's ```ajax``` method to create a new AJAX request. We pass an object to the method that contains a number of properties used to configure the request. ```type``` specifies the HTTP method, which in this case is ```POST```. The ```url``` property is the location of the script that the form data will be sent to which has been populated with the ```action``` attribute from the form. And the ```data``` property has been populated with the serialized form data we created.

Now we will want to define a successful response from the server along with an unsuccessful attempt. The ```done``` method will be called if the request completes successfully. If unsuccessful we will call the ```fail``` method.

```js
    .done(function(response) {
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message textarea
      $(formMessages).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })
    .fail(function(data){
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Uh oh. An error occurred and your message could not be sent.');
      }
    });
```

That will complete the HTML and JavaScript components of the contact form. Now we have to create a PHP mailer script that will be responsible for processing the form data and sending out the email.

#### Creating a PHP Mailer Script

This script will process the form data by checking that the data is valid and then sending out an email. If an error occurs, the mailer script will trigger the ```fail``` callback that we defined in our JavaScript.

To create the php component, create a new file called ```mailer.php``` and write the php code as outlined below:

```php
<?php

  // Only process POST request
  if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("HTTP/1.0 403 Forbidden");
    echo "Oops! There was a problem with your submission. Please complete the form and try again.";
    exit;
  }

  $name     = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  $email    = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
  $message  = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

  // Check that data was sent to the mailer.
  if ( empty($name) || empty($message) || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      // Set a 400 (bad request) response code and exit.
      header("HTTP/1.0 400 Bad Request");
      echo "Oh no! There was a problem with your submission. Please complete the form and try again.";
      exit;
  }

  // Set the recipient email address
  $recipient = "your-email-here@gmail.com";

  // Email Subject
  $subject = "New contact form from $name";

  // Build the email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message: \n$message\n";

  // Email header
  $email_headers = "From: $name <$email>";

  // Send email
  if (mail($recipient, $subject, $email_content, $email_headers)) {
    // Set good response code 200
    header('HTTP/1.0 200 OK');
    echo "Thank you! Your message has been sent and we will be in touch.";
  } else {
    // Set a internal server error response code 500 if not successful
    header('HTTP/1.0 500 Internal Server Error');
    echo "Oh No! Something went wrong and we could not send your message.";
  }


?>

```

You now have an AJAX contact form. This form has to be served through a server, so upload your form to a server to see what you have to work with!

Additional information can be found at:
