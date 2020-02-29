const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

// エンドポイント関数の作成
exports.endpoint = functions
  .region("asia-northeast1")
  .https.onRequest(async (req, res) => {

    // HTTPリクエストメソッドをPOST以外はエラーとする
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Method Not Allowed"
      });
    }

    // beaconIdをキーとするため、beaconIdがないとエラー
    if (!req.body.beaconId) res.status(400);

    // Firestoreに情報を格納
    await db
      .collection("detectData")
      .doc(req.body.beaconId)
      .set(req.body);

    // レスポンスを返却
    return res.status(200).json(req.body);
  });
