const text = document.getElementById('text');
const image = document.getElementById('image');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

let clickCount = 0;

function updateContent(id) {
    if (id == 'btn1') {
        text.textContent = `no i am yousef `;
    }
    else if (id == 'btn2') {
        text.style.fontSize = "22px";
    }
    else if (id == 'btn3') {
        text.style.fontSize = "16px";
    }
    else if (id == 'btn4') {
        text.style.color = "#41B06E";
    }
    else if (id == 'btn5') {
        text.style.color = "#FFF5E0";
        text.style.backgroundColor = "#141E46"
    }
    else if (id == 'btn6') {
        if (clickCount == 0) {
            image.style.width = "200px"
            image.style.height = "200px"
            image.setAttribute('src', 'https://images.pexels.com/photos/8462116/pexels-photo-8462116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
            clickCount++;
        }
        else if (clickCount == 1) {
            image.style.width = "200px"
            image.style.height = "200px"
            image.setAttribute('src', 'https://images.pexels.com/photos/20821498/pexels-photo-20821498/free-photo-of-a-cake-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')
            clickCount = 0;

        }
    }
}