// تهيئة Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// تسجيل الدخول
document.getElementById('loginBtn').addEventListener('click', () => {
    const email = prompt('أدخل بريدك الإلكتروني:');
    const password = prompt('أدخل كلمة المرور:');

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('تم تسجيل الدخول بنجاح!');
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('خطأ: ' + error.message);
        });
});

// التحقق من حالة المستخدم
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('loginBtn').textContent = 'لوحة التحكم';
        document.getElementById('loginBtn').href = 'dashboard.html';
    } else {
        document.getElementById('loginBtn').textContent = 'تسجيل الدخول';
        document.getElementById('loginBtn').href = '#';
    }
});