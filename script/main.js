// Theme Change

function randomColor(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    html.style.backgroundColor = "rgb("+ r +", "+ g +", "+ b +")"
}


document.getElementById("theme-cng").addEventListener("click", function(){
    randomColor()
})


document.getElementById('textArea').value = '';
document.getElementById('textArea2').value = '';
document.getElementById('textArea3').value = '';
document.getElementById('textArea4').value = '';
document.getElementById('textArea5').value = '';
document.getElementById('textArea6').value = '';










// Task compleation history

const lowerDiv = document.getElementById("lower-div");
const taskCheck = document.getElementById("task-check")
const taskAssign = document.getElementById("task-assign")



const taskBtn1 = document.getElementById("task-btn1");
taskBtn1.addEventListener("click", function(event){
    event.preventDefault()
    alert("Board Updated Successfully")
    let num = taskCheck.innerText;
    let convertedNum = parseInt(num)
    taskCheck.innerText = convertedNum + 1;

    let assignNum = taskAssign.innerText;
    let convertedAssignNum = parseInt(assignNum);
    taskAssign.innerText = convertedAssignNum - 1;


    const taskTitle = document.getElementById("task-title1")
    const div = document.createElement("div")
    div.innerHTML = `
                        <p class="text-gray-600 bg-[#F4F7FF] rounded-lg p-2 mt-4">You have Complete The Task ${taskTitle.innerText} at ${currTime}</p>
    `
    lowerDiv.append(div);




    taskBtn1.disabled = true;
    taskBtn1.classList.add("opacity-50", "cursor-not-allowed");

})


const taskBtn2 = document.getElementById("task-btn2");
taskBtn2.addEventListener("click", function(event){
    event.preventDefault()
    alert("Board Updated Successfully")
    let num = taskCheck.innerText;
    let convertedNum = parseInt(num)
    taskCheck.innerText = convertedNum + 1;

    
    let assignNum = taskAssign.innerText;
    let convertedAssignNum = parseInt(assignNum);
    taskAssign.innerText = convertedAssignNum - 1;


    const taskTitle = document.getElementById("task-title2")
    const div = document.createElement("div")
    div.innerHTML = `
                        <p class="text-gray-600 bg-[#F4F7FF] rounded-lg p-2 mt-4">You have Complete The Task ${taskTitle.innerText} at ${currTime}</p>
    `
    lowerDiv.append(div)

    taskBtn2.disabled = true;
    taskBtn2.classList.add("opacity-50", "cursor-not-allowed");

})


const taskBtn3 = document.getElementById("task-btn3");
taskBtn3.addEventListener("click", function(event){
    event.preventDefault()
    alert("Board Updated Successfully")
    let num = taskCheck.innerText;
    let convertedNum = parseInt(num)
    taskCheck.innerText = convertedNum + 1;

    
    let assignNum = taskAssign.innerText;
    let convertedAssignNum = parseInt(assignNum);
    taskAssign.innerText = convertedAssignNum - 1;


    const taskTitle = document.getElementById("task-title3")
    const div = document.createElement("div")
    div.innerHTML = `
                        <p class="text-gray-600 bg-[#F4F7FF] rounded-lg p-2 mt-4">You have Complete The Task ${taskTitle.innerText} at ${currTime}</p>
    `
    lowerDiv.append(div)

    taskBtn3.disabled = true;
    taskBtn3.classList.add("opacity-50", "cursor-not-allowed");

})


const taskBtn4 = document.getElementById("task-btn4");
taskBtn4.addEventListener("click", function(event){
    event.preventDefault()
    alert("Board Updated Successfully")
    let num = taskCheck.innerText;
    let convertedNum = parseInt(num)
    taskCheck.innerText = convertedNum + 1;

    
    let assignNum = taskAssign.innerText;
    let convertedAssignNum = parseInt(assignNum);
    taskAssign.innerText = convertedAssignNum - 1;


    const taskTitle = document.getElementById("task-title4")
    const div = document.createElement("div")
    div.innerHTML = `
                        <p class="text-gray-600 bg-[#F4F7FF] rounded-lg p-2 mt-4">You have Complete The Task ${taskTitle.innerText} at ${currTime}</p>
    `
    lowerDiv.append(div)

    taskBtn4.disabled = true;
    taskBtn4.classList.add("opacity-50", "cursor-not-allowed");

})


const taskBtn5 = document.getElementById("task-btn5");
taskBtn5.addEventListener("click", function(event){
    event.preventDefault()
    alert("Board Updated Successfully")
    let num = taskCheck.innerText;
    let convertedNum = parseInt(num)
    taskCheck.innerText = convertedNum + 1;

    
    let assignNum = taskAssign.innerText;
    let convertedAssignNum = parseInt(assignNum);
    taskAssign.innerText = convertedAssignNum - 1;


    const taskTitle = document.getElementById("task-title5")
    const div = document.createElement("div")
    div.innerHTML = `
                        <p class="text-gray-600 bg-[#F4F7FF] rounded-lg p-2 mt-4">You have Complete The Task ${taskTitle.innerText} at ${currTime}</p>
    `
    lowerDiv.append(div)

    taskBtn5.disabled = true;
    taskBtn5.classList.add("opacity-50", "cursor-not-allowed");

})


const taskBtn6 = document.getElementById("task-btn6");
taskBtn6.addEventListener("click", function(event){
    event.preventDefault()
    alert("Board Updated Successfully")
    alert("Congrates!!! You have completed all the current task")

    let num = taskCheck.innerText;
    let convertedNum = parseInt(num)
    taskCheck.innerText = convertedNum + 1;

    
    let assignNum = taskAssign.innerText;
    let convertedAssignNum = parseInt(assignNum);
    taskAssign.innerText = convertedAssignNum - 1;


    const taskTitle = document.getElementById("task-title6")
    const div = document.createElement("div")
    div.innerHTML = `
                        <p class="text-gray-600 bg-[#F4F7FF] rounded-lg p-2 mt-4">You have Complete The Task ${taskTitle.innerText} at ${currTime}</p>
    `
    lowerDiv.append(div)


    taskBtn6.disabled = true;
    taskBtn6.classList.add("opacity-50", "cursor-not-allowed");

})





// Clear history

document.getElementById("history-btn").addEventListener("click", function(event){
    event.preventDefault()
    lowerDiv.innerHTML = ""
})


// Page divertion

document.getElementById("upper-box-2").addEventListener("click", function(){
    window.location.href = "./blog.html"
})
