let arr = [];

const lantern =
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";

const coffee =
  "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const yellow =
  "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

const balloon =
  "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

arr.push(lantern, coffee, yellow, balloon);

const random = Math.floor(Math.random() * arr.length);

document.body.style.backgroundImage = `url(${arr[random]})`;
