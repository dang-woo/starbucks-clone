console.log("made by DongWoo insta: dang_woo_");

const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function () {
    //클릭하면 포커싱 되게함
    searchInputEL.focus();
});

//검색창 포커스
searchInputEL.addEventListener('focus', function () {
    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder','통합검색');
    //Attribute란 html 의 속성이라고함 즉 html 의 속성을 지정할때 사용함
});

//검색창 포커스 해제 (블러처리)
searchInputEL.addEventListener('blur', function () {
    searchEL.classList.remove('focused');
    searchInputEL.setAttribute('placeholder','');

});