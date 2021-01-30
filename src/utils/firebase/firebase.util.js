import { firestore, firebase } from "../../configs/firebase.config";

// Utility fucntion to add new document to firestore
export const addNewDocumentToFirebase = async (collection, document) =>
  await firestore.collection(collection).add(document);

// Utility function to get data based on given condition
export const getConditionDataFromFirebase = async (collection, condition) => {
  let list = [];
  const snapshot = await firestore
    .collection(collection)
    .where(Object.keys(condition)[0], "==", Object.values(condition)[0])
    .get();

  // Processing the snapshot from firesbase
  snapshot.docs.map((doc) => (list = [...list, doc.data()]));

  return list;
};

// Utility function to get all data on given collection
export const getDataFromFirebase = async (collection) => {
  let list = [];
  const snapshot = await firestore.collection(collection).get();

  // Processing the snapshot from firesbase
  snapshot.docs.map((doc) => (list = [...list, doc.data()]));

  return list;
};

// Utility function to get document id of a document based on given condition
export const getDocumentID = async (collection, condition) => {
  console.log(Object.keys(condition)[0], "==", Object.values(condition)[0]);
  let documentID = "";
  const snapshot = await firestore
    .collection(collection)
    .where(Object.keys(condition)[0], "==", Object.values(condition)[0])
    .get();

  // Processing the snapshot from firesbase
  snapshot.docs.forEach((doc) => (documentID = doc.id));
  return documentID;
};

// Utility function to update an array of objects document
export const updateArrayOfObject = async (
  collection,
  documentID,
  field,
  updateObject
) => {
  const coolectionRef = firestore.collection(collection).doc(documentID);

  coolectionRef.update({
    [field]: firebase.firestore.FieldValue.arrayUnion(updateObject),
  });
  
  return;
};
