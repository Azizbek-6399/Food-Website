window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

function activeMenu(){
    const toggleMenu = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}