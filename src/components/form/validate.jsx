export default function validate(userInput) {
    let errors = {};

    if (!userInput.email) {
      errors.email = 'Whoops, Email cannot be empty';
    } else if (!/\S+@\S+\.\S+/.test(userInput.email)) {
      errors.email = 'Whoops, make sure its an email';
    }
    
    return errors;
  }