const names = ["John", "Jane", "Jim", "Jack", "Bob"];

for (let i = 0; i < names.length; i++) {
  const firstLetter = names[i][0].toLowerCase(); // Convert the first letter to lowercase for case insensitivity
  
  if (firstLetter === 'j') {
    console.log(`Goodbye ${names[i]}`);
  } else {
    console.log(`Hello ${names[i]}`);
  }
}
