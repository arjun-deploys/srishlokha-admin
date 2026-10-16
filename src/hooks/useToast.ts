import { useCallback, useState } from 'react';

export function useToast() {
  const [message, setMessage] = useState('');
  const show = useCallback((text: string) => setMessage(text), []);
  const dismiss = useCallback(() => setMessage(''), []);
  return { message, show, dismiss };
}
