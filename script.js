/**
 * file: script.js
 * Deskripsi: Menambahkan interaktivitas dasar pada portal Madura Heritage.
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Fungsi Navigasi Aktif (Highlighting Menu Item)
    
    // Ambil semua tautan navigasi
    const navLinks = document.querySelectorAll('nav ul li a');
    // Ambil semua bagian konten
    const sections = document.querySelectorAll('main section');

    // Fungsi untuk memperbarui tautan yang aktif
    function updateActiveLink() {
        // Tentukan posisi scroll saat ini
        let current = '';
        
        // Iterasi setiap bagian untuk menentukan bagian mana yang sedang terlihat
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80; // Kurangi offset agar lebih akurat (sesuai tinggi header)
            
            if (window.scrollY >= sectionTop) {
                // Ambil ID bagian yang saat ini paling atas/terlihat
                current = section.getAttribute('id');
            }
        });

        // Hapus kelas 'active' dari semua tautan
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Tambahkan kelas 'active' pada tautan yang sesuai
        navLinks.forEach(link => {
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // Dengarkan event scroll pada jendela
    window.addEventListener('scroll', updateActiveLink);
    // Jalankan fungsi saat halaman dimuat
    updateActiveLink(); 


    // 2. Interaksi Modul Bahasa (Simulasi Audio)
    
    // Objek data simulasi frasa bahasa Madura dengan tautan audio dummy
    const bahasaData = [
        { indo: "Apa kabar?", madura: "Kabbareh?", audio: "audio/kabbareh.mp3" },
        { indo: "Terima kasih", madura: "Sakalangkong", audio: "audio/sakalangkong.mp3" },
        { indo: "Saya lapar", madura: "Sengkok mellèsè", audio: "audio/mellese.mp3" },
        { indo: "Selamat pagi", madura: "Selamet pagi", audio: "audio/pagi.mp3" }
        // Anda bisa menambahkan lebih banyak data di sini
    ];

    const bahasaSection = document.getElementById('bahasa');
    const modulBahasaDiv = bahasaSection ? bahasaSection.querySelector('.modul-bahasa') : null;

    if (modulBahasaDiv) {
        // Hapus konten placeholder yang ada di HTML
        modulBahasaDiv.innerHTML = ''; 

        // Isi div dengan data dari JavaScript dan tambahkan tombol Play
        bahasaData.forEach((frasa, index) => {
            const frasaElement = document.createElement('div');
            frasaElement.classList.add('frasa-item');
            frasaElement.innerHTML = `
                <p>${frasa.indo} - <strong>${frasa.madura}</strong></p>
                <button class="play-audio" data-audio="${frasa.audio}" data-index="${index}">🔊 Putar</button>
            `;
            modulBahasaDiv.appendChild(frasaElement);
        });

        // Event listener untuk tombol Play Audio
        modulBahasaDiv.addEventListener('click', function(event) {
            const button = event.target.closest('.play-audio');
            if (button) {
                const audioPath = button.dataset.audio;
                const frasaIndex = button.dataset.index;
                
                // Simulasikan pemutaran audio
                console.log(`Simulasi: Memutar audio untuk frasa ke-${frasaIndex}: ${audioPath}`);
                alert(`Memutar: "${bahasaData[frasaIndex].madura}"\n(Simulasi Audio Aktif)`);
                
                // Jika Anda memiliki file audio (.mp3), Anda bisa menggunakan kode berikut:
                /* const audio = new Audio(audioPath);
                audio.play().catch(error => {
                    console.error('Gagal memutar audio:', error);
                    alert('Gagal memutar audio.');
                });
                */
            }
        });
    }


    // 3. Interaksi Karapan Sapi (Simulasi Tombol)
    
    const karapanButton = document.querySelector('#karapan button');

    if (karapanButton) {
        karapanButton.addEventListener('click', function() {
            // Ubah alert menjadi sesuatu yang lebih fungsional di masa depan (misalnya, membuka modal video)
            console.log('Tombol Karapan Sapi ditekan.');
        });
    }

});