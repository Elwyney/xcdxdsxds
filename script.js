// <!-- Lazy loading -->

//
// burgerMenu
document.querySelector('.cursorClick').addEventListener('click', function () {
    this.classList.toggle('clik')
    document.querySelector('nav').classList.toggle('hide');
    document.querySelector('header').style.background = 'black';
})

// 
// 2 page


document.querySelectorAll(".servicesCard-showBlock").forEach((e, index) => {
    e.addEventListener("click", function () {
        e.classList.toggle("active");
        document.querySelectorAll(".hideList")[index + 1].classList.toggle("showList");
    });
});
const showModal = (e) => {
    const a = document.querySelectorAll('.sliderBy');
    a[e].classList.remove('hide');
}
const HideModal = (e) => {
    const a = document.querySelectorAll('.sliderBy');
    a[e].classList.add('hide');
}
var isPrivare = true;
$('.titleCard a').each(function (index, elem) {
    $(this).click(function (e) {
        e.preventDefault();
        if (isPrivare) {
            isPrivare = false;
            showModal(index)
            $(".variable").slick({
                dots: true,
                infinite: true,
                variableWidth: false,
                arrows: true
            });
        }
    })
});

$('.btnModalHide').each(function (index, elem) {
    $(this).click(function (e) {
        e.preventDefault();
        $('.slider').slick('unslick');
        HideModal(index)
        isPrivare = true;
    })
});
// btn page 1
$('.aboutUS a').click(function (e) {
    e.preventDefault();
    $('.slider').slick('unslick');
    $('.modalWin').show();
     $(".variable").slick({
                dots: true,
                infinite: true,
                variableWidth: false,
                arrows: false
            });
})
// 

// callback
// page 1 and page 2
$('.callback-btn a').click(function (e) {
    e.preventDefault(); 
    $('.callback').show();
})

$('.hideCallBack').click(function (e) {
    e.preventDefault();
    $('.callback').hide();
})

$('.back a').each(function (index, elem) {
    $(this).click(function (e) {
        e.preventDefault();
        $('.callback').show();
    })
})






