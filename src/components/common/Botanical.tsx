export function Botanical({ kind = 'garland', large = false }: { kind?: string; large?: boolean }) {
  return (
    <div className={`botanical botanical-${kind} ${large ? 'botanical-large' : ''}`} aria-hidden='true'>
      <i />
      <i />
      <i />
      <i />
      <i />
      <span />
    </div>
  );
}
