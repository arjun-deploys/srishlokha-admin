export const safeSession = {
  get: (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string) => {
    try {
      sessionStorage.setItem(key, value);
    } catch {
      /* storage unavailable */
    }
  },
  remove: (key: string) => {
    try {
      sessionStorage.removeItem(key);
    } catch {
      /* storage unavailable */
    }
  },
};
