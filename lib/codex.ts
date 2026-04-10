const STORAGE_KEY = 'ntti-codex';

export function getUnlocked(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function isUnlocked(code: string): boolean {
  return getUnlocked().includes(code);
}

/** Add a type code. Returns true if it was newly added (not already present). */
export function addUnlocked(code: string): boolean {
  const list = getUnlocked();
  if (list.includes(code)) return false;
  list.push(code);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return true;
}

export function clearUnlocked(): void {
  localStorage.removeItem(STORAGE_KEY);
}
