const db = firebase.firestore();
db.collection('pricing').get().then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        // تحديث DOM بالأسعار
    });
});