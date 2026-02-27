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

    let polaNama = /^[a-zA-Z' ]+$/;

    // Cek semua field kosong
    if (nama === "" || nim === "" || prodi === "" || fakultas === "" ||
        semester === "" || email === "" || nohp === "" ||
        pengalaman === "" || alasan === "" ||
        divisi1 === "" || divisi2 === "" || !komitmen) {

        alert("Semua field wajib diisi!");
        return false;
    }

    // Validasi nama
    if (!polaNama.test(nama)) {
        alert("Nama hanya boleh huruf dan tanda petik satu (')");
        return false;
    }

    // Cek divisi tidak boleh sama
    if (divisi1 === divisi2) {
        alert("Divisi 1 dan Divisi 2 tidak boleh sama!");
        return false;
    }

    alert("Pendaftaran berhasil!");
    return true;
}