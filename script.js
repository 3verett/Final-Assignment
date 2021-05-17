// The code works so that when a correct input is submitted it will add 1 to the currQ value and depending on the number that currQ is equal to it will output the corrisponding question.
let inp = document.getElementById('output')
let currQ = 0
// Made array for questions and their matching correct answers
const questions = ['Click on the "Option A" button to start... if you dare.',
                 'While taking a back route on your way home curiosity gets the better of you while you notice a huge dark old castle looking building. To the right of it you notice a small entrance to a cave. Going into the cave because of your fascination with huge old buildings in hope of finding an entrance, you find a brick wall with a metal door. Opening the door you enter what you believe is the basement of the castle. Behind you a huge crumbling noise followed up with loud crashing noises are heard. You open the door to see what happened and it won’t budge, you think to yourself “Of course it caved in…”. Looking around you see two possible doors to go through, one to your right and another to the left. Escaping is your only option now. Choose A for the left door and B for the right.',
                 'You go to the door on your right and enter the room. What you see is an empty room with a staircase which leads up and down. Choose B to go up it and choose A to go down.',
                 'Going down the stairs you enter a room full of bloody boxes. This must be a storage room you think. Smelling a horrible stench you decide to get out of this room ASAP, there is a door infront of you and a door to your right. Choose A to go forwards or choose B to go right.',
                 'Choosing to go forward you go through the door and see a black box on a pedistal. You take the box and find a bunch of garlic? You assume with the blood and spooky mansion you are dealing with vampires. Now covering yourself with garlic you think its time to go up that staircase. You head out the room and see two vampires they both turn to bats and fly away in a scurry. You head up the stairs and go up again. You see the two that just ran talking to a bigger vampire clearly telling them there is an intruder. Fearless you dash at them heading for what looks like the front door. Scared they fly away and let you pass right through the door. You head back for your car and leave. No more being curious you say to yourself. Congragulations you escaped! Click any button to restart.']
const answers = ['a',
               'b',
               'a',
               'a',
               'a']

// function to make a new line of text into the texarea box for the user to read and input their answer
function printLine (txt) {
  const curText = inp.innerHTML
  inp.innerHTML = curText + txt + "\n\n"
  inp.scrollTop = inp.scrollHeight
}

// function to reset the output box for when the game restarts
function resetOutput () {
  inp.innerText = ''
  printLine("\n\n\n\n\n\n\n\n\n\n\n\n")
}

// function to reset the game when the user has either died or won
function resetGame () {
  currQ = 0
  resetOutput()
  printLine("Welcome to the Dungeon of Transylvania. \n")
  printLine(questions[currQ])
}

// function to check if input is correct and if so to feed the next question and if not to output a death text and await another input to restart.
function buttonPressed (button) {
    // at the end of the game the currQ will not be a valid index
  if (currQ === answers.length - 1) {
    // game is over reset output
    resetGame()
  } else if (button === answers[currQ]) {
    // correct answer
    currQ++
    printLine(questions[currQ])
  } else {
    // deadly answer
    currQ = answers.length - 1
    printLine("\n Wrong choice, you died :(. Press a button to restart.")
  }
}

// initialize
resetGame()
