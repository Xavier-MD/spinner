let spinnerCharacters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '|   \n'];

for (let x = 0; x < spinnerCharacters.length; x++) {
  if (spinnerCharacters[x] !== '\r|   \n') {
    spinnerCharacters[x] = `\r${spinnerCharacters[x]}   `;
  }
  setTimeout(() => {
    process.stdout.write(spinnerCharacters[x]);
  }, 100 + (x * 200));
}