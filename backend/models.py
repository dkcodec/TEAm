import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

from firebase_admin import firestore
db = firestore.client()

doc_ref = db.collection('users').document('user1')
doc_ref.set({
    'name': 'John Doe',
    'age': 30
})

doc = doc_ref.get()
print('Document data:', doc.to_dict())

from firebase_admin import auth

user = auth.create_user(
    email='user@example.com',
    email_verified=False,
    password='password',
    display_name='John Doe',
    disabled=False)

print('Successfully created new user: {0}'.format(user.uid))




