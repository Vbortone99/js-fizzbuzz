let myBox = document.getElementById('my-box');
// console.log(mybox);

for(let x = 1; x <101; x++) {

    let div = document.createElement("div");

    if (x % 3 === 0 && x % 5 === 0) {
        // console.log('FizzBuzz');
        div.classList.add('my-small-box');
        div.classList.add('my-bg-orange');
        div.innerText = `FizzBuzz`;
        myBox.append(div);
    } else if(x % 3 === 0){
        // console.log('fizz');
    }
}