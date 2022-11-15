const sentence = "hello there from lighthouse labs";
let timer = 0;
//typewriting effect
for (const char of sentence) {
  timer += 50;
  setTimeout(() => {
    process.stdout.write(char); 
  }, timer);
}
//for ending the animation at the end of the line
setTimeout(() => {
  console.log(""); 
}, timer + 1);