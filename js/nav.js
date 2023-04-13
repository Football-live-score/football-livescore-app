const lists = document.querySelectorAll('.season');
const sectionItems = document.querySelectorAll('.singleSeason');
const navBar = document.querySelector('.navBar');
const navBarBtn = document.querySelector('.navBarBtn');
const navLinks = document.querySelectorAll('.navLink');




// Add active class(Background to the button) ===============>
for (let l = 0; l < lists.length; l++) {
    lists[l].addEventListener('click', function () {
        for (let w = 0; w < lists.length; w++) {
            lists[w].classList.remove('activeBtn')
        }
        this.classList.add('activeBtn')

        let dataFilter = this.getAttribute('data-filter')
        for (let y = 0; y < sectionItems.length; y++) {
            sectionItems[y].classList.add('hide')
            sectionItems[y].classList.remove('live')
            if (sectionItems[y].getAttribute('data-item') == dataFilter) {
                sectionItems[y].classList.remove('hide')
                sectionItems[y].classList.add('live')
            }
        }
    })
};
navBarBtn.addEventListener('click', function () {
    navBar.classList.toggle('show');
    if (navBar.classList.contains('show')) {
        document.querySelector('.navBarBtn').innerHTML = '<i class="uil uil-times icon"></i>'


    } else {
        document.querySelector('.navBarBtn').innerHTML = ' <i class="uil uil-bars icon"></i>'

    }


});
navLinks.forEach(navLink => {
    navLink.addEventListener('click', function () {
        navBar.classList.remove('show');
        document.querySelector('.navBarBtn').innerHTML = ' <i class="uil uil-bars icon"></i>'
    })

});