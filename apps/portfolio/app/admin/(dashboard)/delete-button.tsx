"use client";

export function DeleteButton({ action, label }: { action: () => Promise<void>; label: string }) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(`Delete "${label}"?`)) e.preventDefault();
      }}
    >
      <button type="submit" className="text-sm text-red-600 hover:text-red-800">
        Delete
      </button>
    </form>
  );
}
