let myAlert = window.alert;
let myConfirm = window.confirm;
let myPrompt = window.prompt;

window.alert = myConfirm;
window.confirm = myPrompt;
window.prompt = myAlert;

// Example:

// alert('hello, I am confirm');
// confirm('do you know, I am prompt?', 'yes')
// prompt ('hello, I am alert');
