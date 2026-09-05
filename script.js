document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickBtn');
  const message = document.getElementById('message');

  button.addEventListener('click', () => {
    message.textContent = 'Button clicked! JavaScript is working.';
  });
});
