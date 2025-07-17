// subscribe.js

document.addEventListener('DOMContentLoaded', () => {
    const subscribeForm = document.getElementById('subscribe-form');
    const subscribeEmailInput = document.getElementById('subscribe-email');
    const subscribeMessage = document.getElementById('subscribe-message');

    if (subscribeForm && db) { // Ensure db (Firestore) is initialized
        subscribeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = subscribeEmailInput.value.trim();

            if (!email) {
                subscribeMessage.textContent = 'Please enter a valid email address.';
                subscribeMessage.style.color = 'red';
                return;
            }

            try {
                // Check for duplicate entry
                const subscribersRef = db.collection('subscribers');
                const querySnapshot = await subscribersRef.where('email', '==', email).get();

                if (!querySnapshot.empty) {
                    subscribeMessage.textContent = 'You are already subscribed!';
                    subscribeMessage.style.color = 'orange';
                    return;
                }

                // Add new subscriber
                await subscribersRef.add({
                    email: email,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

                subscribeMessage.textContent = 'Thank you for subscribing!';
                subscribeMessage.style.color = 'lightgreen';
                subscribeEmailInput.value = ''; // Clear the input
            } catch (error) {
                console.error("Error adding document: ", error);
                subscribeMessage.textContent = 'Failed to subscribe. Please try again.';
                subscribeMessage.style.color = 'red';
            }
        });
    } else {
        console.error("Subscribe form or Firebase Firestore not found/initialized.");
    }
});
