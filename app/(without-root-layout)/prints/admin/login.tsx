"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/** Same password and /api/login as /visitors/login. */
export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [wrong, setWrong] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setWrong(false);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    }).catch(() => null);
    setBusy(false);
    if (res?.ok) router.refresh();
    else setWrong(true);
  };

  return (
    <form onSubmit={submit} className="max-w-[280px]">
      <h1 className="text-[15px] font-medium">Sales</h1>
      <p className="mt-1 text-[13px] text-[#6b6a66]">Sign in to mark prints sold.</p>
      <input
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        aria-label="Password"
        className="mt-5 w-full rounded-[9px] border border-[rgba(0,0,0,0.14)] px-3 py-2 text-[16px] outline-none focus:border-[#111]"
      />
      {wrong && <p className="mt-2 text-[13px] text-[#ed1717]">That&apos;s not it.</p>}
      <button
        type="submit"
        disabled={busy || !password}
        className="mt-3 w-full rounded-[9px] bg-[#111] px-3 py-2 text-[14px] font-medium text-white transition-[opacity,scale] duration-150 ease-out enabled:active:scale-[0.97] disabled:opacity-40"
      >
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
