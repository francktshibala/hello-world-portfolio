// Hello World program for CSE 310
// A personal and friendly greeting program

const name = "FrancK"; 
const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

console.log("🌟 Hello World! 🌟");
console.log(`👋 Hi there, ${name}! Hope you're having a wonderful day!`);
console.log(`📅 Today is ${currentDate}`);
console.log("💻 Welcome to my first JavaScript program for CSE 310!");
console.log("✨ Thanks for checking out my code! ✨");