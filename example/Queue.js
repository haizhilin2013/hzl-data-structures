var queue = [];

function push(){
    for (i = 0; i < 10; i++){queue.push(i);console.log(queue)}
}

function pop(){
    for (i = 0; i < 10; i++){queue.pop(); console.log(queue);}

}

console.log("This is how I push elements into a queue!");
push()

console.log("And this is how I pop it out!");
pop()
