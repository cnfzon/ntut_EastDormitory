import clientPromise from "../../../lib/mongodb"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  try {
    const client = await clientPromise
    const db = client.db("ntut_eastdormitory") // 使用我們專案的資料庫名稱
    const users = db.collection("users")

    const { username, password } = req.body
    const user = await users.findOne({ username })

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "帳號或密碼錯誤" })
    }

    return res.status(200).json({ 
      message: "登入成功", 
      user: { 
        username: user.username,
        name: user.name || username,
        role: user.role || "user"
      } 
    })
  } catch (err) {
    console.error("登入錯誤 ❌", err)
    return res.status(500).json({ message: "伺服器錯誤" })
  }
} 