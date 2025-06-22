const pricingRef = collection(db, 'pricing');
getDocs(pricingRef).then((snapshot) => {
  snapshot.forEach((doc) => {
    // تحديث DOM بالأسعار
  });
});
