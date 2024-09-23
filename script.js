// let ques = document.querySelectorAll('.ques')

// ques.forEach((acc) => {
//     acc.addEventListener('click', (e) => {
//         let ans = acc.nextElementSibling.classList
//         ans.toggle('active')
//         // console.log(e.target.nextElementSibling.classList.toggle('active')); //or we can do this also
//     })
// })





// This approach ensures that:
// Only one answer is visible at a time.

// ques.forEach((acc) => {
//     acc.addEventListener('click', (e) => {
//         let ans = acc.nextElementSibling.classList
//         ques.forEach((content) => {
//             content.nextElementSibling.classList.remove('active')
//         })
//         ans.add('active')
//     })
// })






// This approach ensures that:
// Only one answer is visible at a time.
// Clicking on an already open question will close it.

let ques = document.querySelectorAll('.ques');

ques.forEach((acc) => {
    acc.addEventListener('click', (e) => {
        let ans = acc.nextElementSibling.classList;
        
        // If the clicked element's next sibling already has 'active' class, remove it
        if (ans.contains('active')) {
            ans.remove('active');
        } else {
            // Remove 'active' class from all other answers
            ques.forEach((content) => {
                content.nextElementSibling.classList.remove('active');
                console.log(content);
            });
            // Add 'active' class to the clicked element's next sibling
            ans.add('active');
        }
    });
});