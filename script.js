$(document).ready(function() {
    // Sistem pakar sederhana
    const sistemPakar = {
        "halo": "Hai! Ada yang bisa saya bantu?",
        "apa kabar": "Saya baik, terima kasih! Bagaimana dengan Anda?",
        "siapa kamu": "Saya adalah chatbot dari Ngodingpintar.",
        "nama kamu siapa": "Nama saya Ngodingpintar Chatbot.",
        "bantuan": "Tentu, saya bisa membantu Anda dengan pertanyaan seputar pemrograman.",
        "belajar pemrograman": "Untuk belajar pemrograman, Anda bisa mulai dengan bahasa seperti Python atau JavaScript. Banyak sumber belajar online seperti Codecademy, freeCodeCamp, dan Coursera.",
        "bahasa pemrograman terbaik": "Bahasa pemrograman terbaik tergantung pada kebutuhan Anda. Python bagus untuk pemula dan data science, JavaScript untuk pengembangan web, dan Java untuk aplikasi yang lebih besar.",
        "framework terbaik": "Beberapa framework terbaik adalah: \n- Front-end: React, Angular, Vue.js\n- Back-end: Django (Python), Spring (Java), Express (JavaScript/Node.js)",
        "tips belajar pemrograman": "Tips belajar pemrograman: \n1. Mulailah dengan proyek kecil. \n2. Praktik setiap hari. \n3. Baca dokumentasi. \n4. Jangan takut untuk bertanya. \n5. Gunakan platform belajar seperti Stack Overflow dan GitHub.",
        "apa itu ngoding": "Ngoding adalah istilah lain untuk pemrograman, yaitu proses menulis, menguji, dan memelihara kode untuk membuat aplikasi atau perangkat lunak.",
        "apa itu python": "Python adalah bahasa pemrograman tingkat tinggi yang mudah dipelajari dan digunakan. Python sering digunakan untuk pengembangan web, data science, otomatisasi, dan banyak lagi.",
        "apa itu javascript": "JavaScript adalah bahasa pemrograman yang digunakan terutama untuk pengembangan web, memungkinkan interaktivitas dan dinamisme pada halaman web.",
        "apa itu html": "HTML (HyperText Markup Language) adalah bahasa standar untuk membuat dan menyusun halaman web.",
        "apa itu css": "CSS (Cascading Style Sheets) adalah bahasa desain yang digunakan untuk menentukan tampilan dan format halaman web yang ditulis dalam HTML.",
        "frontend vs backend": "Front-end adalah bagian dari aplikasi yang berinteraksi langsung dengan pengguna. Back-end adalah bagian yang mengelola logika, database, dan server aplikasi.",
        "apa itu api": "API (Application Programming Interface) adalah antarmuka yang memungkinkan satu aplikasi berkomunikasi dengan aplikasi lain, sering digunakan untuk mengakses data atau layanan eksternal.",
        "database yang populer": "Beberapa database yang populer adalah: \n- SQL: MySQL, PostgreSQL, SQLite\n- NoSQL: MongoDB, Cassandra, Redis",
        "tools untuk versi kontrol": "Beberapa tools untuk version control adalah Git, SVN, dan Mercurial. Git adalah yang paling populer dan biasanya digunakan bersama dengan platform seperti GitHub atau GitLab.",
        "pentingnya testing dalam pemrograman": "Testing sangat penting untuk memastikan bahwa kode Anda bekerja dengan benar dan untuk mengidentifikasi bug atau kesalahan sebelum aplikasi dirilis. Unit testing, integration testing, dan system testing adalah beberapa jenis testing yang umum.",
        "apa itu cloud computing": "Cloud computing adalah penggunaan layanan komputasi seperti penyimpanan, pemrosesan, dan aplikasi melalui internet (cloud) daripada menggunakan komputer lokal atau server pribadi.",
        "kelebihan cloud computing": "Beberapa kelebihan cloud computing adalah skalabilitas, biaya yang lebih rendah, fleksibilitas akses, dan keandalan tinggi.",
        "apa itu machine learning": "Machine learning adalah cabang dari kecerdasan buatan yang memungkinkan komputer untuk belajar dan membuat keputusan berdasarkan data tanpa pemrograman eksplisit.",
        "contoh aplikasi machine learning": "Contoh aplikasi machine learning termasuk rekomendasi produk di e-commerce, pengenalan wajah, analisis sentimen di media sosial, dan diagnosis medis.",
        "apa itu docker": "Docker adalah platform untuk mengembangkan, mengirim, dan menjalankan aplikasi dalam wadah (container), yang memungkinkan aplikasi berjalan secara konsisten di berbagai lingkungan.",
        "keuntungan menggunakan docker": "Keuntungan menggunakan Docker termasuk portabilitas, isolasi lingkungan, efisiensi sumber daya, dan kemudahan pengelolaan dependensi.",
        "apa itu devops": "DevOps adalah praktik yang menggabungkan pengembangan perangkat lunak (Dev) dan operasi IT (Ops) untuk mempercepat pengiriman perangkat lunak dan meningkatkan keandalan.",
        "tools untuk devops": "Beberapa tools untuk DevOps adalah Jenkins, GitLab CI/CD, Docker, Kubernetes, Ansible, dan Terraform.",
        "apa itu agile": "Agile adalah metodologi pengembangan perangkat lunak yang berfokus pada iterasi cepat, kolaborasi, dan fleksibilitas untuk merespons perubahan kebutuhan.",
        "metode agile yang populer": "Metode Agile yang populer termasuk Scrum, Kanban, dan Extreme Programming (XP).",
        "apa itu scrum": "Scrum adalah kerangka kerja Agile yang digunakan untuk mengelola pengembangan produk yang kompleks dengan tim kecil, iterasi pendek, dan peran yang terdefinisi dengan jelas.",
        "peran dalam scrum": "Peran dalam Scrum termasuk Scrum Master, Product Owner, dan Development Team."
    };

    // Fungsi untuk mendapatkan respon dari sistem pakar berdasarkan pesan yang dikirim
    function getResponse(pesan) {
        pesan = pesan.toLowerCase(); // Ubah pesan ke huruf kecil untuk pencocokan
        return sistemPakar[pesan] || "Maaf, saya tidak mengerti pertanyaan Anda.";
    }

    // Event saat tombol "Kirim" ditekan
    $("#send-btn").on("click", function() {
        let pesan = $("#text-pesan").val(); // Ambil nilai dari input teks
        if (pesan) {
            // Tambahkan pesan dari pengguna ke kotak percakapan
            $(".form").append('<div class="user-inbox inbox"><div class="msg-header"><p>' + pesan + '</p></div></div>');
            $("#text-pesan").val(''); // Kosongkan input teks setelah dikirim

            // Dapatkan respon dari sistem pakar
            let respon = getResponse(pesan);

            // Tampilkan respon dari chatbot setelah jeda 500ms
            setTimeout(function() {
                $(".form").append('<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-robot"></i></div><div class="msg-header"><p>' + respon + '</p></div></div>');
                $(".form").scrollTop($(".form")[0].scrollHeight); // Gulir ke bawah otomatis
            }, 500);
        }
    });

    // Event saat tombol "Enter" ditekan pada keyboard
    $("#text-pesan").keypress(function(e) {
        if (e.which == 13) { // 13 adalah kode untuk tombol "Enter"
            $("#send-btn").click(); // Panggil event click pada tombol "Kirim"
        }
    });
});
