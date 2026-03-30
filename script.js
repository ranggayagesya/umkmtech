

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Logika Scroll: Perubahan Navbar & Tombol Back to Top
    const navbar = document.querySelector('.navbar');
    const btnTop = document.getElementById("btnTop");

    window.onscroll = function() {
        // Efek Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('bg-dark');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('bg-dark');
        }

        // Tombol Back to Top
        if (btnTop) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                btnTop.style.display = "block";
            } else {
                btnTop.style.display = "none";
            }
        }
    };

    window.topFunction = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const formKontak = document.getElementById('formKontak');
    if (formKontak) {
        formKontak.addEventListener('submit', function(event) {
            if (!formKontak.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                alert("Harap lengkapi formulir dengan benar!");
            } else {
                event.preventDefault();
                const nama = document.getElementById('nama').value;
                
                // Fungsi Alert (Poin D.4)
                alert("Terima kasih " + nama + ", pesan Anda telah terkirim!");
                
                formKontak.reset();
                formKontak.classList.remove('was-validated');
            }
            formKontak.classList.add('was-validated');
        }, false);
    }
});