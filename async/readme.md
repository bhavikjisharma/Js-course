- Javascript Code
```

#JS Async project : - Unlimited Colors

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalhai;
  
  const startColor = function () {
    function colorSet() {
      document.body.style.backgroundColor = randomColor();
    }
    if (!intervalhai) {
      intervalhai = setInterval(colorSet, 100);
    }
  };
  const stopColor = function () {
    clearInterval(intervalhai);
    intervalhai = null;
  };
  
  const start = document
    .querySelector('#start')
    .addEventListener('click', startColor);
  
  const stop = document
    .querySelector('#stop')
    .addEventListener('click', stopColor);

  ```


  
 ```
#JS Async project : - Keyboard Key Checker

 console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
</div>`;
});

  ```