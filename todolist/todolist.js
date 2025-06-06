const inputbox = document.getElementById("input-box"); // inputbox id를 가진 요소를 가져옴
const listContainer = document.getElementById("list-container"); // list-container id를 가진 요소를 가져옴

// 일을 추가하는 함수
function addTask() {
    if (inputbox.value === '') {
        alert("할 일을 입력하세요.");
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputbox.value = ""; // ***입력창 초기화***
        savedata();
    }
}

//클릭으로 리스트 (추가/삭제)하기
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "li") {
        e.target.classList.toggle("checked");
        savedata(); // 체크 표시
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

// 저장하기
function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//데이터 불러오기
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();