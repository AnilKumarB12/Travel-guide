Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(el)=>{
        if (e.value.length >0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform ='rotate(180deg)';
        }
        else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform ='rotate(0deg)';
        }
    })
})
let menu_btn=document.getElementsByClassName('bi-three-dots')[0];
let menu_bx=document.getElementById('menu_bx');

menu_btn.addEventListener('click',()=>{
    menu_bx.classList.toggle('ul_active');
})


document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('toggleButton');
    const body = document.body;

    themeToggleBtn.addEventListener('click', function () {
        // Toggle the 'dark-theme' class on the body
        body.classList.toggle('dark-theme');

        // Save the current theme preference in localStorage
        const isDarkTheme = body.classList.contains('dark-theme');
        localStorage.setItem('isDarkTheme', isDarkTheme);
    });

    // Check the user's theme preference from localStorage
    const savedTheme = localStorage.getItem('isDarkTheme');

    if (savedTheme === 'true') {
        body.classList.add('dark-theme');
    }
});
