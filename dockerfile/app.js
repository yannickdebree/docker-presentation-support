let count = 0;

const interval = setInterval(() => {
  console.log("Hello world");
  count++;

  if (count === 5) {
    clearInterval(interval);
    process.exit();
  }
}, 2000);
