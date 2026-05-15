import { Link } from "wouter";

export default function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>404</h1>
      <p style={{ color: "#666", marginTop: "8px" }}>ページが見つかりません</p>
      <Link href="/" style={{ color: "#3aa8e8", marginTop: "16px", display: "inline-block" }}>
        ホームへ戻る
      </Link>
    </div>
  );
}
