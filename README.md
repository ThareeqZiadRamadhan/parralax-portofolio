# Portofolio Parallax Pribadi

Selamat datang di repositori portofolio pribadi saya! Website ini dirancang untuk menampilkan proyek-proyek dan keahlian saya dengan pengalaman visual yang imersif, memanfaatkan efek *parallax scrolling* yang dinamis.

Dibuat menggunakan **Next.js**, website ini tidak hanya terlihat bagus tetapi juga memiliki performa secepat kilat dan dioptimalkan untuk SEO.

## ✨ Fitur Utama

* **Efek Parallax Dinamis:** Pengalaman *scrolling* yang mulus dan berlapis yang memberikan kedalaman pada konten.
* **Performa Tinggi:** Dibangun dengan Next.js (App Router/Pages Router) untuk pemuatan halaman yang cepat dan navigasi yang instan.
* **Desain Responsif:** Tampilan sempurna di semua perangkat, dari desktop layar lebar hingga ponsel.
* **SEO-Friendly:** Struktur proyek yang dioptimalkan untuk mesin pencari agar mudah ditemukan.
* **Komponen Modular:** Dibuat dengan komponen React yang dapat digunakan kembali, membuatnya mudah untuk dikelola dan diperbarui.
* **[Fitur Lainnya]:** (Contoh: Formulir Kontak fungsional, Mode Gelap/Terang, Blog, dll.)

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

* **Framework:** [**Next.js**](https://nextjs.org/)
* **Library UI:** [**React**](https://reactjs.org/)
* **Styling:** [**Tailwind CSS**] 
* **Animasi & Parallax:** [**Framer Motion**] 
* **Bahasa:** [**TypeScript / JavaScript**]
* **Deployment:** [**Vercel**](https://vercel.com/)

---

## ⚙️ Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah ini untuk menjalankan salinan proyek di mesin lokal Anda untuk pengembangan dan pengujian.

### Prasyarat

Pastikan Anda memiliki [Node.js](https://nodejs.org/) (v18.x atau lebih baru) dan [npm/yarn/pnpm] terinstal di komputer Anda.

### Instalasi

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/](https://github.com/)Thareeqziadramadhan/parralax.portofolio.git
    ```

2.  **Masuk ke direktori proyek:**
    ```bash
    cd parralax-portofolio
    ```

3.  **Install semua dependensi:**
    ```bash
    npm install
    # ATAU
    yarn install
    # ATAU
    pnpm install
    ```

4.  **Jalankan server development:**
    ```bash
    npm run dev
    # ATAU
    yarn dev
    # ATAU
    pnpm dev
    ```

5.  **Buka di browser:**
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

## 🔒 Variabel Lingkungan (Environment Variables)

Jika proyek Anda menggunakan API eksternal (misalnya, untuk formulir kontak seperti EmailJS, Resend, atau SendGrid), Anda perlu menyiapkan variabel lingkungan.

1.  Buat file `.env.local` di direktori *root* proyek Anda.
2.  Salin isi dari `.env.example` (jika ada) atau tambahkan variabel yang diperlukan.

Contoh `.env.local`:

```.env
# Contoh untuk formulir kontak (ganti dengan layanan Anda)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxxxxxxx
NEXT_PUBLIC_EMAILJS_USER_ID=xxxxxxxx
