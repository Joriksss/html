IMask(
  document.getElementById('phone'),
  {
    mask: '+{7} (000) 000-00-00'
  }
);

IMask(
  document.getElementById('email'),
  {
    mask: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    lazy: false,
    commit: true,
  }
)

IMask(
  document.getElementById('name'),
  {
    mask: '[А-ЯЁ][а-яё]*$'
  }
)