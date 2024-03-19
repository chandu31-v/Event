import { app } from "@/firebase/account"
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore/lite';

//Initialize cloud firestore and get  reference to the service
const db = getFirestore(app);


//add new comments
export async function addComment(id, email, name, comment) {

  //console.log(id)
  try {
    const docRef = await setDoc(doc(db, "comments",String(id)), {
      email: email,
      name: name,
      comment: comment
    },
      {
        merge: true
      })
  } catch (e) {
    console.log("Error while adding comment", e)
  }

}

//get all comments for a particular post_id
export async function getComment(id) {

  try {
    const snapShot = await getDocs(collection(db, "comments"))
    //console.log(typeof snapShot)
    snapShot.forEach((doc) => {
      console.log(doc.data())
    })
  } catch (e) {
    console.log("Error while getting comment", e)
  }

}
