import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export interface ResToken {
  id: number;
  email: string;
}

export function signToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string): ResToken | null {
  try {
    const decoded = jwt.verify(token, SECRET);

    // type guard -> pastikan hasilnya object bukan string
    if (typeof decoded === "string") {
      return null;
    }

    // pastikan ada id & email
    return decoded as ResToken;
  } catch {
    return null;
  }
}
