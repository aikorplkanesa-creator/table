"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("biodataForm");

    if (form) {
        jalankanForm(form);
    }

    const hasilNama = document.getElementById("hasilNama");

    if (hasilNama) {
        tampilkanHasil();
    }

});


/* =========================================
   FORM BIODATA
========================================= */

function jalankanForm(form) {

    const inputNohp = document.getElementById("nohp");

    /* Membatasi No. HP hanya angka dan maksimal 13 digit */
    if (inputNohp) {

        inputNohp.addEventListener("input", function () {

            this.value = this.value.replace(/\D/g, "");

            if (this.value.length > 13) {
                this.value = this.value.slice(0, 13);
            }

        });

    }


    /* =========================================
       SAAT FORM DIKIRIM
    ========================================= */

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const nama =
            document.getElementById("nama").value.trim();

        const alamat =
            document.getElementById("alamat").value.trim();

        const jurusan =
            document.getElementById("jurusan").value;

        const tinggi =
            document.getElementById("tinggi").value;

        const berat =
            document.getElementById("berat").value;

        const hobi =
            document.getElementById("hobi").value.trim();

        const nohp =
            document.getElementById("nohp").value;


        /* Mengambil radio button yang dipilih */

        const genderElement =
            document.querySelector(
                'input[name="gender"]:checked'
            );


        /* Cek jenis kelamin */

        if (!genderElement) {

            alert("Silakan pilih jenis kelamin.");

            return;
        }


        const gender = genderElement.value;


        /* =========================================
           CEK DATA
        ========================================= */

        if (
            nama === "" ||
            alamat === "" ||
            jurusan === "" ||
            tinggi === "" ||
            berat === "" ||
            hobi === "" ||
            nohp === ""
        ) {

            alert("Semua data harus diisi.");

            return;
        }


        /* =========================================
           CEK NOMOR HP
        ========================================= */

        if (!/^\d{1,13}$/.test(nohp)) {

            alert(
                "Nomor HP hanya boleh berisi angka dan maksimal 13 digit."
            );

            return;
        }


        /* =========================================
           SIMPAN DATA
        ========================================= */

        localStorage.setItem(
            "biodata_nama",
            nama
        );

        localStorage.setItem(
            "biodata_alamat",
            alamat
        );

        localStorage.setItem(
            "biodata_jurusan",
            jurusan
        );

        localStorage.setItem(
            "biodata_gender",
            gender
        );

        localStorage.setItem(
            "biodata_tinggi",
            tinggi
        );

        localStorage.setItem(
            "biodata_berat",
            berat
        );

        localStorage.setItem(
            "biodata_hobi",
            hobi
        );

        localStorage.setItem(
            "biodata_nohp",
            nohp
        );


        /* =========================================
           PINDAH KE HALAMAN HASIL
        ========================================= */

        window.location.href = "index-4.html";

    });

}


/* =========================================
   MENAMPILKAN HASIL BIODATA
========================================= */

function tampilkanHasil() {

    const nama =
        localStorage.getItem("biodata_nama") || "";

    const alamat =
        localStorage.getItem("biodata_alamat") || "";

    const jurusan =
        localStorage.getItem("biodata_jurusan") || "";

    const gender =
        localStorage.getItem("biodata_gender") || "";

    const tinggi =
        localStorage.getItem("biodata_tinggi") || "";

    const berat =
        localStorage.getItem("biodata_berat") || "";

    const hobi =
        localStorage.getItem("biodata_hobi") || "";

    const nohp =
        localStorage.getItem("biodata_nohp") || "";


    /* =========================================
       MASUKKAN DATA KE HTML
    ========================================= */

    const hasilNama =
        document.getElementById("hasilNama");

    const hasilAlamat =
        document.getElementById("hasilAlamat");

    const hasilJurusan =
        document.getElementById("hasilJurusan");

    const hasilGender =
        document.getElementById("hasilGender");

    const hasilTinggi =
        document.getElementById("hasilTinggi");

    const hasilBerat =
        document.getElementById("hasilBerat");

    const hasilHobi =
        document.getElementById("hasilHobi");

    const hasilNohp =
        document.getElementById("hasilNohp");


    if (hasilNama) {
        hasilNama.textContent = nama;
    }

    if (hasilAlamat) {
        hasilAlamat.textContent = alamat;
    }

    if (hasilJurusan) {
        hasilJurusan.textContent = jurusan;
    }

    if (hasilGender) {
        hasilGender.textContent = gender;
    }

    if (hasilTinggi) {
        hasilTinggi.textContent = tinggi;
    }

    if (hasilBerat) {
        hasilBerat.textContent = berat;
    }

    if (hasilHobi) {
        hasilHobi.textContent = hobi;
    }

    if (hasilNohp) {
        hasilNohp.textContent = nohp;
    }

}