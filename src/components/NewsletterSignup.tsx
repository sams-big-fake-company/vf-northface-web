"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  if (signedUp) {
    return (
      <p className="mt-4 text-sm text-zinc-200" role="status">
        Thanks — check your inbox to confirm your XPLR Pass signup.
      </p>
    );
  }

  return (
    <form
      className="mt-4 flex"
      onSubmit={(e) => {
        e.preventDefault();
        setSignedUp(true);
      }}
    >
      <label htmlFor="footer-newsletter-email" className="sr-only">
        Email address for newsletter signup
      </label>
      <input
        id="footer-newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-zinc-600 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      />
      <button
        type="submit"
        className="border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Go
      </button>
    </form>
  );
}
