function validateForm() {
    const form = document.getElementById('signup-form');
    event.preventDefault();
  
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const username = form.elements['username'].value;
    const password = form.elements['password'].value;
    const confirmPassword = form.elements['confirm-password'].value;
    const mobile = form.elements['mobile'].value;
  
 
    
    if (name.length < 3 || name.length > 18 ) {
      document.getElementById('name-error').innerHTML = 'Name must be between 3 and 18 characters';
    } else {
      document.getElementById('name-error').innerHTML = '';
    }
  
    if (email === '') {
      document.getElementById('email-error').innerHTML = 'Email is required';
    } else {
      document.getElementById('email-error').innerHTML = '';
    }
  
    if (username === '') {
      document.getElementById('username-error').innerHTML = 'Username is required';
    } else {
      document.getElementById('username-error').innerHTML = '';
    }
  
    if (password === '') {
      document.getElementById('password-error').innerHTML = 'Password is required';
    } else {
      document.getElementById('password-error').innerHTML = '';
    }

    if (confirmPassword === password){
        document.getElementById('confirm-password-error').innerHTML = 'Confired password is incorrect';
    } else{
        document.getElementById('confirm-password-error').innerHTML = '';
    }

    if (mobile === ''){
        document.getElementById('mobile').innerHTML = 'Mobile Number is incorrect';
    }else{
        document.getElementById('mobile').innerHTML = '';
    }
} 