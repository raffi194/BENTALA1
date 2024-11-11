const logo = document.getElementById('logo');

    logo.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });

function openInstagram() {
    window.open('https://www.instagram.com/raffi1__/', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/raffi1__/', '_blank');
}

function openX() {
    window.open('https://x.com/Raffi1__', '_blank');
}

function openlinkedin() {
    window.open('https://www.linkedin.com/in/muhamadraffi/', '_blank');
}

function openyt() {
    window.open('https://www.instagram.com/raffi1__/', '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    let hoverTimeout;
    
    hoverTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function() {
            const radioId = this.getAttribute('for');
            const radio = document.getElementById(radioId);
            
            clearTimeout(hoverTimeout);
            
            
            hoverTimeout = setTimeout(() => {
                radio.checked = true;
            }, 100); 
        });

        trigger.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
        });
    });
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var imgFluid = document.querySelector('.img-fluid');
    var imgHeight = imgFluid.offsetHeight;
    
    if (window.scrollY > imgHeight) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

function toggleHeart(element) {
    element.classList.toggle('active'); 
}

let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const dots = document.getElementsByClassName("dot");
        
        if (n > dots.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = dots.length; }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
    }

    function clearAllFilters() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
  
        document.getElementById('brandSearch').value = '';
  
        const dropdowns = document.querySelectorAll('select');
        dropdowns.forEach(dropdown => dropdown.selectedIndex = 0);
    }
    
    document.getElementById('dropdownToggle1').addEventListener('click', function() {
        var searchInput = document.getElementById('brandSearch');
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'block'; 
            searchInput.focus(); 
        } else {
            searchInput.style.display = 'none'; 
        }
    });

    document.getElementById('brandSearch').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            var newBrand = this.value.trim();
            if (newBrand) {
                alert('Brand baru ditambahkan: ' + newBrand); 
                this.value = ""; 
            }
        }
    });


        document.addEventListener('DOMContentLoaded', function() {
            const dropdownToggle = document.getElementById('dropdownToggle2');
            const colorList = document.getElementById('colorlist');
        
            dropdownToggle.addEventListener('click', function() {
                if (colorList.style.display === 'none' || colorList.style.display === '') {
                    colorList.style.display = 'block'; 
                } else {
                    colorList.style.display = 'none'; 
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const dropdownToggle = document.getElementById('dropdownToggle3');
            const hargalist = document.getElementById('hargalist');
        
            dropdownToggle.addEventListener('click', function() {
                if (hargalist.style.display === 'none' || hargalist.style.display === '') {
                    hargalist.style.display = 'block'; 
                } else {
                    hargalist.style.display = 'none'; 
                }
            });
        });

const icons = document.querySelectorAll('.harga-card i');

icons.forEach(icon => {
    icon.addEventListener('click', function() {
        icons.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const ukuranCards = document.querySelectorAll('.ukuran-card');

    ukuranCards.forEach(card => {
        card.addEventListener('click', function() {
            ukuranCards.forEach(c => c.querySelector('span').classList.remove('active'));
            this.querySelector('span').classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdownToggle4');
    const ukuranlist = document.getElementById('ukuranlist');

    dropdownToggle.addEventListener('click', function() {
        if (ukuranlist.style.display === 'none' || ukuranlist.style.display === '') {
            ukuranlist.style.display = 'block'; 
        } else {
            ukuranlist.style.display = 'none'; 
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdownToggle2');
    const colorlist = document.getElementById('colorlist');

    // Toggle the display of color list
    dropdownToggle.addEventListener('click', function() {
        if (colorlist.style.display === 'none' || colorlist.style.display === '') {
            colorlist.style.display = 'block'; 
        } else {
            colorlist.style.display = 'none'; 
        }
    });

    // Add event listeners to color cards
    const colorCards = document.querySelectorAll('.color-card');
    colorCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            colorCards.forEach(c => c.classList.remove('selected'));
            // Add active class to the clicked card
            this.classList.add('selected');
        });
    });
});

    