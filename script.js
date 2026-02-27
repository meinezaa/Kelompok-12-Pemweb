function validasiForm() {

    let nama = document.getElementById("nama").value.trim();
    let nim = document.getElementById("nim").value.trim();
    let prodi = document.getElementById("prodi").value.trim();
    let fakultas = document.getElementById("fakultas").value.trim();
    let semester = document.getElementById("semester").value;
    let email = document.getElementById("email").value.trim();
    let nohp = document.getElementById("nohp").value.trim();
    let pengalaman = document.getElementById("pengalaman").value.trim();
    let alasan = document.getElementById("alasan").value.trim();
    let divisi1 = document.getElementById("divisi1").value;
    let divisi2 = document.getElementById("divisi2").value;
    let komitmen = document.querySelector('input[name="komitmen"]:checked');

    // 🔹 Pola masing-masing field
    let polaNama = /^[a-zA-Z' ]+$/;                  // hanya huruf & spasi
    let polaNim = /^[0-9]{10,15}$/;                  // hanya angka 10-15 digit
    let polaProdi = /^[a-zA-Z ]+$/;                  // huruf & spasi
    let polaFakultas = /^[a-zA-Z ]+$/;               // huruf & spasi
    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    // format email
    let polaNoHp = /^[0-9]{10,15}$/;                 // angka 10-15 digit

    // Cek kosong dulu
    if (nama === "" || nim === "" || prodi === "" || fakultas === "" ||
        semester === "" || email === "" || nohp === "" ||
        pengalaman === "" || alasan === "" ||
        divisi1 === "" || divisi2 === "" || !komitmen) {

        alert("Semua field wajib diisi!");
        return false;
    }

    // Validasi per field

    if (!polaNama.test(nama)) {
        alert("Nama hanya boleh huruf dan tanda petik satu (')");
        return false;
    }

    if (!polaNim.test(nim)) {
        alert("NIM harus angka 10-15 digit!");
        return false;
    }

    if (!polaProdi.test(prodi)) {
        alert("Program Studi hanya boleh huruf!");
        return false;
    }

    if (!polaFakultas.test(fakultas)) {
        alert("Fakultas hanya boleh huruf!");
        return false;
    }

    if (!polaEmail.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    if (!polaNoHp.test(nohp)) {
        alert("Nomor HP harus angka 10-15 digit!");
        return false;
    }

    if (divisi1 === divisi2) {
        alert("Divisi 1 dan Divisi 2 tidak boleh sama!");
        return false;
    }

    alert("Pendaftaran berhasil!");
    return true;
}