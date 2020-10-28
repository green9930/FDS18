var section = $('.board section');
// document.querySelector()
var tab = $('.board .tab a');
var item = $('.board li');

item.addClass('icon-dot-circled');

tab.click(function(e) {
    e.preventDefault();
    section.removeClass('is-active');
    // 지워야 할 개수가 많으면 일일이 적기 힘듦
    $(this).parent().parent().addClass('is-active');
});
