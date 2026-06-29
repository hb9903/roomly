const megaMenu = document.querySelector(".mega-menu");
const gnbItems = document.querySelectorAll(".gnb > li");
const header = document.querySelector("header");
const megaItems = document.querySelectorAll(".mega-list > li");

// 메뉴 열기
gnbItems.forEach(function(item, index){

    item.addEventListener("mouseenter", function(){

        // 헤더 활성화
        header.classList.add("active");

        // 메가메뉴 열기
        megaMenu.classList.add("active");

        // 기존 GNB 활성화 제거
        gnbItems.forEach(function(menu){
            menu.classList.remove("header-active");
        });

        // 기존 2뎁스 제거
        megaItems.forEach(function(mega){
            mega.classList.remove("mega-active");
        });

        // 현재 GNB 활성화
        item.classList.add("header-active");

        // 현재 2뎁스 활성화
        megaItems[index].classList.add("mega-active");
    });

});


// 메뉴 닫기
header.addEventListener("mouseleave", function(){

    // 먼저 메가메뉴 접기
    megaMenu.classList.remove("active");

    // GNB 밑줄 제거
    gnbItems.forEach(function(menu){
        menu.classList.remove("header-active");
    });

    // 메가메뉴가 다 접힌 후 내용 제거
    setTimeout(function(){

        megaItems.forEach(function(mega){
            mega.classList.remove("mega-active");
        });

    }, 550);

    // 배경은 가장 마지막에 제거
    setTimeout(function(){

        header.classList.remove("active");

    }, 650);

});