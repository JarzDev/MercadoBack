import admin from "../fireconfig/firebase-config";


const FireAuth = async (req: any, res: any, next: any) => {

    
  try {
    const token = req.headers.authorization.split(' ')[1];
    await admin.auth().verifyIdToken(token)
    .then((decodedToken: { uid: any; }) => {
        const uid = decodedToken.uid;
        console.log(uid);
        next();
    })
    .catch((error: any) => {
        console.log(error);
        res.status(401).send('No autorizado')
    });
    } catch (error) {
        console.log(error);
        res.status(401).send('No autorizado')
    }
}

export default FireAuth;