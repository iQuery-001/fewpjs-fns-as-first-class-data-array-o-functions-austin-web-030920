function wakeDog(dogName, dogBreed) {
    message = console.log(`Wake ${dogName} the ${dogBreed}`);
    return message;
}

function leashDog(dogName, dogBreed) {
    message = console.log(`Leash ${dogName} the ${dogBreed}`);
    return message;
}

function walkToPark(dogName, dogBreed) {
    message = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return message;
}

function throwFrisbee(dogName, dogBreed) {
    message = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return message;
}

function walkHome(dogName, dogBreed) {
    message = console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return message;
}

function unleashDog(dogName, dogBreed) {
    message = console.log(`Unleash ${dogName} the ${dogBreed}`);
    return message;
}

const routine = ["wakeDog", "leashDog", "walkToPark", "throwFrisbee", "walkHome", "unleashDog"]

function exerciseDog(dogName, dogBreed) {
    routine.forEach(element => element(dogName, dogBreed)) 


}