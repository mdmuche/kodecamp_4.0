function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject(new Error("must be a number"));
    } else if (number % 2 === 0) {
      resolve(`this ${number} is an even number`);
    } else {
      reject(new Error(`${number} is an odd number`));
    }
  });
}

//! no error handling
async function findEvenNumber() {
  const evenNumber = checkEvenNumber("check");
  //   console.log(evenNumber);
}

// findEvenNumber();

// error handling
async function findEvenNumberCorrect() {
  try {
    const evenNumber = await checkEvenNumber(3);
    console.log(evenNumber);
  } catch (err) {
    throw new Error(err);
  }
}

findEvenNumberCorrect();
