document.addEventListener('DOMContentLoaded', function() {
  const notification = document.getElementById('notification');
  const messageSpan = document.getElementById('username'); // Pastikan ini sesuai dengan ID elemen di HTML Anda

  function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    const lengthOfRandomString = Math.floor(Math.random() * 3) + 3; // Menghasilkan panjang antara 3 dan 5
    for (let i = 0; i < lengthOfRandomString; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result + '*'.repeat(9 - lengthOfRandomString); // Menambahkan '*' hingga total panjang menjadi 12
  }

  function getRandomNotification() {
    const randomNumber = Math.random() * 100;
    if (randomNumber < 60) {
      return "Cheat telah Aktif.";
    } else if (randomNumber < 90) { // 60% + 30%
      return "Cheat sedang di proses.";
    } else {
      return "Cheat gagal.";
    }
  }

  function showNotification() {
    const randomUsername = generateRandomString();
    const randomNotification = getRandomNotification();
    messageSpan.textContent = `Username: ${randomUsername} ${randomNotification}`; // Memastikan format pesan yang benar
    notification.classList.add('show');

    setTimeout(() => {
      notification.classList.remove('show');
    }, 2900); // Sedikit lebih pendek untuk memastikan menyembunyikan sebelum muncul lagi
  }

  setInterval(showNotification, 3000);
});