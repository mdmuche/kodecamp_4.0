//? 1. closures in settimeout and settinterval
function greetAfterDelay(name) {
  setTimeout(() => {
    console.log(`hello, ${name}!`);
  }, 2000);
}

greetAfterDelay("kodecampers");

//? 2. closures in promises
function delayWithMessage(message, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delayMs);
  });
}

function greetAfterDelay(name) {
  return delayWithMessage(`hello, ${name}!`, 2000);
}

greetAfterDelay("kodecampers").then((message) => {
  console.log(message);
});

//? 3. closures in async and await
async function fetchData(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

(async () => {
  try {
    const fetchedData = await fetchData(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(fetchedData);
  } catch (err) {
    console.error(`error: ${err}`);
  }
})();
