// Placeholder de imagen de producto — rayas sutiles + etiqueta monoespaciada
// El usuario reemplazará esto con fotos reales de food styling.

function FoodPlaceholder({ label = 'Foto producto', tone = 'warm', aspect = '4/3', rounded = 14, accent = '#F26A1F', dark = false }) {
  const id = React.useId().replace(/:/g, '');
  const bg = dark ? '#0A1F3D' : (tone === 'cream' ? '#F4EFE6' : tone === 'cool' ? '#E8EEF5' : '#F1E7DB');
  const stripe = dark ? 'rgba(255,255,255,.06)' : 'rgba(10,31,61,.06)';
  const txt = dark ? 'rgba(255,255,255,.65)' : 'rgba(10,31,61,.55)';
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspect,
        borderRadius: rounded,
        overflow: 'hidden',
        background: bg,
        backgroundImage: `repeating-linear-gradient(135deg, ${stripe} 0 1px, transparent 1px 14px)`,
        border: `.5px solid ${dark ? 'rgba(255,255,255,.08)' : 'rgba(10,31,61,.08)'}`,
      }}
    >
      {/* dot accent */}
      <div style={{
        position: 'absolute', top: 12, left: 14,
        width: 8, height: 8, borderRadius: 99, background: accent
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 6,
        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase',
        color: txt, textAlign: 'center', padding: 16
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={txt} strokeWidth="1.4">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <circle cx="9" cy="11" r="2"/>
          <path d="M3 17l5-5 4 4 3-3 6 6"/>
        </svg>
        <span>{label}</span>
      </div>
    </div>
  );
}

// Iconos lineales propios (no copiados)
const Icons = {
  Shield: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  Leaf: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19c0-7 5-13 14-14-1 9-7 14-14 14z"/><path d="M5 19c4-3 7-6 9-9"/></svg>,
  Truck: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>,
  Building: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/></svg>,
  Home: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>,
  Pot: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h16v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"/><path d="M2 10h20"/><path d="M9 6c0-1 1-2 2-2M13 6c0-1 1-2 2-2"/></svg>,
  Chef: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13a4 4 0 1 1 2-7 4 4 0 0 1 8 0 4 4 0 1 1 2 7v4H6z"/><path d="M6 17h12v3H6z"/></svg>,
  Clock: (p) => <svg width={p.size||22} height={p.size||22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  Arrow: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  ArrowL: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>,
  Chat: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z"/></svg>,
  Send: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>,
  X: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Phone: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>,
  Mail: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>,
  Pin: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  Check: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>,
  Spark: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>,
};

window.FoodPlaceholder = FoodPlaceholder;
window.Icons = Icons;
