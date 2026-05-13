
# CORS Proxy (Express)

シンプルなCORSプロキシサーバーです。
フロントエンドから外部APIにアクセスするための“とりあえず動けばいい”実装。

## 🚀 Features

* 任意URLへのリクエスト転送
* CORSフル許可（雑に全部通す）
* GET / POST / PUT / DELETE 対応
* 軽量 Express ベース

---

## ⚠️ Warning

このプロジェクトは**開発用途専用**です。

* SSRF対策なし
* 認証なし
* 制限なし
* つまり「インターネットの穴」

本番環境に置くと、だいたい後悔します。

---

## 📦 Install
```bash
git clone https://github.com/qianyuy5/cors-proxy.git
cd cors-proxy
npm install
```

---

## ▶️ Run

```bash
node index.js
```

または（ESMの場合）:

```bash
node --experimental-modules index.js
```

サーバーはデフォルトで:

```
http://localhost:3000
```

---

## 🔧 Usage

### Proxy Request

```http
GET /proxy?url=https://example.com
```

### Example

```bash
curl "http://localhost:3000/proxy?url=https://api.github.com"
```

---

## 🧠 How it works

1. クライアントが `/proxy?url=...` にアクセス
2. サーバーが指定URLへリクエストを転送
3. 返ってきたレスポンスをそのまま返す
4. CORSヘッダを全部許可してフロントから見えるようにする

以上。思想は「全部通す」。

---

## 🔒 Security Notes

もしこれを本番で使おうとしているなら：

* IP制限を入れろ
* URLホワイトリストを入れろ
* private networkアクセスをブロックしろ
* rate limit を入れろ

入れないなら、このプロジェクトは実質「攻撃ツール」です。

---

## 🧱 Tech Stack

* Node.js
* Express
* node-fetch（または native fetch）

---

## 📁 Project Structure

```
.
├── index.js
├── package.json
└── README.md
```

---

## 🧭 License

好きにしていいけど、責任は取らないタイプのやつ。

---

## 🧷 About GitHub

このプロジェクトは GitHub 上で公開する想定です。
[GitHub](https://github.com?utm_source=chatgpt.com)
