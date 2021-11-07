import firestore from '@react-native-firebase/firestore';

export const getCollection = async (collection: string) => {
  const data = await firestore().collection(collection).get();
  return data;
};

export const addValueCollection = async (
  collectionName: string,
  value: Object,
) => {
  firestore()
    .collection(collectionName)
    .add(value)
    .then(() => {
      console.log(`Added in ${collectionName}`);
    });
};
