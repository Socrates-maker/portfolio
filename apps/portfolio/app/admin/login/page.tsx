"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginPage() {
  const [error, formAction, pending] = useActionState(login, undefined);

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <form
        action={formAction}
        className="w-full max-w-sm bg-white border border-neutral-200 rounded-lg p-6 shadow-sm"
      >
        <h1 className="text-lg font-semibold text-neutral-900 mb-4">Admin login</h1>
        <label className="block text-sm text-neutral-600 mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-neutral-400"
        />
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-neutral-900 text-white text-sm font-medium rounded-md py-2 disabled:opacity-60"
        >
          {pending ? "Checking…" : "Log in"}
        </button>
      </form>
    </main>
  );
}
