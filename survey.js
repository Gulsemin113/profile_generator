const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const question1 = () => {
  return new Promise ((resolve, reject) => {
    rl.question('What do you think of Node.js? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise ((resolve, reject) => {
    rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      resolve()
    })
  })
}
const question3 = () => {
  return new Promise ((resolve, reject) => {
    rl.question('What is an activity you like doing? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      resolve()
    })
  })
}
const question4 = () => {
  return new Promise ((resolve, reject) => {
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      resolve()
    })
  })
}
const question5 = () => {
  return new Promise ((resolve, reject) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      resolve()
    })
  })
}
const question6 = () => {
  return new Promise ((resolve, reject) => {
    rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      resolve()
    })
  })
}
const question7 = () => {
  return new Promise ((resolve, reject) => {
    rl.question('Which sport is your absolute favourite? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      resolve()
    })
  })
}
const question8 = () => {
  return new Promise ((resolve, reject) => {
    rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      resolve()
    })
  })
}
const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  await question5()
  await question6()
  await question7()
  await question8()
  rl.close()
}

main()