const users = [
    {
        name: "Jane Doe",
        gender: "Female",
        image: "./images/jane.png"
    },
    {
        name: "John Doe",
        gender: "Male",
        image: "./images/john.png"
    }
];

let curUserId = 0;

function toggle() {

    if (curUserId === 0) {
        curUserId = 1;
    } else {
        curUserId = 0;
    }

    // Change image
    document.getElementById("img").src = users[curUserId].image;

    // Change name
    document.getElementById("card-name").innerText = users[curUserId].name;

    // Change gender
    document.getElementById("card-gender").innerText = users[curUserId].gender;
}