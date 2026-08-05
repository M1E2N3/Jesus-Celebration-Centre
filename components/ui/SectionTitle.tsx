export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2>{title}</h2>
      {subtitle ? <p style={{ color: '#94a3b8', marginTop: '0.75rem' }}>{subtitle}</p> : null}
    </div>
  );
}
