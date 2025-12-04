import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  const primaryButton = {
    padding: "10px 18px",
    fontSize: "14px",
    background: "#45a29e",
    border: "none",
    borderRadius: "999px",
    color: "#0b0c10",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
  };

  const outlineButton = {
    padding: "9px 16px",
    fontSize: "13px",
    borderRadius: "999px",
    border: "1px solid rgba(197,198,199,0.7)",
    background: "transparent",
    color: "#c5c6c7",
    textDecoration: "none",
    display: "inline-block",
  };

  const checkBackend = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/health");
      const data = await res.json();
      setStatus(data.message || "Backend is running");
      setStatusType("success");
    } catch {
      setStatus("Backend not reachable");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at top, #1f2833, #0b0c10)",
        fontFamily: "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(11,12,16,0.96)",
          borderRadius: 18,
          padding: 32,
          maxWidth: 900,
          width: "92%",
          boxShadow: "0 20px 45px rgba(0,0,0,0.65)",
          border: "1px solid rgba(102,252,241,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
          }}
        >
          {/* LEFT: PHOTO CARD */}
          <div style={{ flex: "0 0 190px", textAlign: "center" }}>
            <div
              style={{
                width: 170,
                height: 170,
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto 16px",
                border: "3px solid #66fcf1",
                boxShadow: "0 0 22px rgba(102,252,241,0.55)",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Saurabh Wanjari"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ fontSize: 14, color: "#c5c6c7" }}>AWS DevOps Engineer</div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>Pune, India</div>
          </div>

          {/* RIGHT: INFO */}
          <div style={{ flex: "1 1 260px", color: "#c5c6c7" }}>
            <h1
              style={{
                color: "#66fcf1",
                margin: "0 0 8px",
                fontSize: 30,
              }}
            >
              Saurabh Wanjari
            </h1>

            {/* 🔥 UPDATED SUMMARY BELOW */}
            <p style={{ margin: "0 0 10px", fontSize: 15 }}>
              AWS DevOps Engineer with around 2 years of hands-on experience in cloud
              infrastructure on AWS (EC2, S3, IAM, VPC, CloudWatch), automation and CI/CD
              delivery pipelines, Infrastructure-as-Code using Terraform, and
              containerization with Docker along with working exposure to Kubernetes
              deployments. Passionate about automation and building reliable, secure cloud
              infrastructure for real-world enterprise projects.
            </p>
            {/* 🔥 END OF SUMMARY */}

            <h3 style={{ color: "#ffffff", margin: "18px 0 6px", fontSize: 16 }}>
              Key Skills
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
              {[
                "AWS (EC2, S3, IAM, VPC)",
                "Docker & Kubernetes",
                "Jenkins CI/CD",
                "Terraform & Ansible",
                "Git & GitHub",
                "Linux & Shell",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: 12,
                    padding: "4px 11px",
                    borderRadius: 999,
                    border: "1px solid rgba(197,198,199,0.7)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
              <a href="mailto:saurabh.p.wanjari@gmail.com" style={primaryButton}>
                📧 Email
              </a>
              <a
                href="https://www.linkedin.com/in/saurya69/"
                target="_blank"
                rel="noreferrer"
                style={outlineButton}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/saurya69"
                target="_blank"
                rel="noreferrer"
                style={outlineButton}
              >
                GitHub
              </a>
            </div>

            <div style={{ marginTop: 10 }}>
              <button
                onClick={checkBackend}
                style={{
                  padding: "12px 24px",
                  fontSize: 15,
                  background: "#45a29e",
                  border: "none",
                  borderRadius: 8,
                  color: "#0b0c10",
                  fontWeight: 600,
                  cursor: "pointer",
                  minWidth: 190,
                }}
              >
                {loading ? "Checking..." : "Check Backend Status"}
              </button>

              {status && (
                <div
                  style={{
                    marginTop: 14,
                    padding: "10px 12px",
                    borderRadius: 8,
                    fontSize: 14,
                    background:
                      statusType === "success"
                        ? "rgba(102,252,241,0.12)"
                        : "rgba(255,99,99,0.12)",
                    color: statusType === "success" ? "#66fcf1" : "#ff6363",
                    border:
                      statusType === "success"
                        ? "1px solid rgba(102,252,241,0.7)"
                        : "1px solid rgba(255,99,99,0.7)",
                    display: "inline-block",
                  }}
                >
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 11,
            color: "#888",
            textAlign: "right",
          }}
        >
          DevOps Screening Assignment • Node.js + React • Docker • Nginx • GitHub Actions • AWS
        </div>
      </div>
    </div>
  );
}

export default App;
