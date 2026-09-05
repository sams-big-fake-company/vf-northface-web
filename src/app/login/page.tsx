"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import Logo from "@/components/Logo";

const USER_KEY = "tnf-demo-user";
const userListeners = new Set<() => void>();

function subscribeUser(listener: () => void): () => void {
  userListeners.add(listener);
  return () => userListeners.delete(listener);
}

function getUserSnapshot(): string | null {
  return window.localStorage.getItem(USER_KEY);
}

function setStoredUser(email: string | null) {
  if (email === null) window.localStorage.removeItem(USER_KEY);
  else window.localStorage.setItem(USER_KEY, email);
  userListeners.forEach((l) => l());
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const user = useSyncExternalStore(
    subscribeUser,
    getUserSnapshot,
    () => null
  );

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || password.length < 4) {
      setError("Enter a valid email and a password of at least 4 characters.");
      return;
    }
    setStoredUser(email);
    setError(null);
  }

  function signOut() {
    setStoredUser(null);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="text-black">
        <Logo className="mx-auto h-12 w-auto" />
      </div>

      {user ? (
        <div className="mt-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-tnf-red-dark">
            XPLR Pass Member
          </p>
          <h1 className="mt-2 text-2xl font-extrabold">Welcome back.</h1>
          <p className="mt-3 text-zinc-600">
            Signed in as <span className="font-semibold text-black">{user}</span>
          </p>
          <ul className="mt-6 space-y-2 border border-zinc-200 p-6 text-left text-sm text-zinc-700">
            <li>✓ Free shipping on every order</li>
            <li>✓ Early access to limited drops</li>
            <li>✓ Field testing opportunities</li>
            <li>✓ Birthday gift each year</li>
          </ul>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/"
              className="bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-tnf-red-dark"
            >
              Start Shopping
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="border border-black px-6 py-3 text-sm font-semibold hover:bg-zinc-100"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <>
          <h1 className="mt-8 text-center text-2xl font-extrabold">
            Sign in with XPLR Pass
          </h1>
          <p className="mt-2 text-center text-sm text-zinc-600">
            Member rewards, early access, and free shipping. (Demo — any email
            and password work.)
          </p>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-black"
            />
            {error && <p className="text-sm text-tnf-red-dark">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-tnf-red-dark"
            >
              Sign In
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-zinc-600">
            Not a member?{" "}
            <span className="font-semibold text-black underline">
              Join XPLR Pass — it&apos;s free
            </span>
          </p>
        </>
      )}
    </div>
  );
}
