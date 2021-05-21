import firebase from 'firebase';
import { USER_STATE_CHANGE } from '../constants/index';

export function fetchUser() {
    return ((dispacth) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispacth({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                }
                else {
                    console.log('does not exist');
                }
            })
    })
}