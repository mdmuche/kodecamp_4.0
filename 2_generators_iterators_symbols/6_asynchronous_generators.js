async function* fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok === true) {
      throw new Error(`HTTP Error status: ${res.status}`);
    }

    const users = await res.json();
    for (const user of users) {
      yield user.name;
    }
  } catch (err) {
    console.error("failed to fetch users:", err);
  }
}

async function main() {
  try {
    const fetchedUsers = fetchUsers();
    for await (const username of fetchedUsers) {
      console.log(username);
    }
  } catch (err) {
    console.error("error in main function:", err);
  }
}

main();
