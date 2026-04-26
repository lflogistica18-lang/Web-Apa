// Chat widget flotante + Formulario de contacto reutilizable.
// Ambos envían a webhooks editables (formWebhook, chatWebhook).

function ChatWidget({ accent = '#F26A1F', navy = '#0A1F3D', greeting, webhook }) {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([{ from: 'bot', text: greeting }]);
  const [input, setInput] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, open]);

  React.useEffect(() => {
    setMsgs([{ from: 'bot', text: greeting }]);
  }, [greeting]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput('');
    setMsgs(m => [...m, { from: 'user', text }]);
    if (!webhook) {
      setMsgs(m => [...m, { from: 'bot', text: 'El webhook del chat aún no está configurado. Pegá la URL en el panel Tweaks → Webhooks.' }]);
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: msgs }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = data.reply || data.message || data.text || 'Recibido. Te respondemos en breve.';
      setMsgs(m => [...m, { from: 'bot', text: reply }]);
    } catch (e) {
      setMsgs(m => [...m, { from: 'bot', text: 'No pude conectar con el webhook. Verificá la URL.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Abrir chat"
        style={{
          position: 'fixed', right: 22, bottom: 22, zIndex: 60,
          width: 58, height: 58, borderRadius: 99,
          background: accent, color: '#fff', border: 0,
          boxShadow: '0 12px 32px rgba(242,106,31,.45), 0 2px 6px rgba(0,0,0,.12)',
          cursor: 'pointer', display: 'grid', placeItems: 'center',
          transform: open ? 'scale(.92)' : 'scale(1)', transition: 'transform .2s',
        }}
      >
        {open ? <Icons.X size={22}/> : <Icons.Chat size={24}/>}
      </button>

      {open && (
        <div style={{
          position: 'fixed', right: 22, bottom: 92, zIndex: 60,
          width: 360, maxWidth: 'calc(100vw - 44px)', height: 480, maxHeight: 'calc(100vh - 120px)',
          background: '#fff', borderRadius: 18, overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(10,31,61,.25), 0 4px 12px rgba(0,0,0,.08)',
          display: 'flex', flexDirection: 'column',
          fontFamily: '"Inter", system-ui, sans-serif',
          border: '1px solid rgba(10,31,61,.06)',
        }}>
          <div style={{
            background: navy, color: '#fff', padding: '14px 18px',
            display: 'flex', alignItems: 'center', gap: 10
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 99, background: accent, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>APA</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Asistente APA</div>
              <div style={{ fontSize: 11, opacity: .7, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: '#3DDC97' }}/>
                En línea · Respuesta inmediata
              </div>
            </div>
          </div>
          <div ref={bodyRef} style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', background: '#FAFAF7', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '82%',
                background: m.from === 'user' ? accent : '#fff',
                color: m.from === 'user' ? '#fff' : navy,
                padding: '9px 13px', borderRadius: 14,
                borderTopRightRadius: m.from === 'user' ? 4 : 14,
                borderTopLeftRadius: m.from === 'bot' ? 4 : 14,
                fontSize: 13.5, lineHeight: 1.45,
                boxShadow: m.from === 'bot' ? '0 1px 2px rgba(10,31,61,.06)' : 'none',
              }}>{m.text}</div>
            ))}
            {busy && (
              <div style={{ alignSelf: 'flex-start', display: 'flex', gap: 4, padding: '10px 14px', background: '#fff', borderRadius: 14, borderTopLeftRadius: 4 }}>
                <span className="apa-dot"/><span className="apa-dot"/><span className="apa-dot"/>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid rgba(10,31,61,.06)', background: '#fff' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Escribí tu consulta…"
              style={{
                flex: 1, border: '1px solid rgba(10,31,61,.12)', borderRadius: 99,
                padding: '10px 14px', fontSize: 13.5, outline: 'none',
                fontFamily: 'inherit', color: navy,
              }}
            />
            <button
              onClick={send} disabled={busy || !input.trim()}
              style={{
                width: 40, height: 40, borderRadius: 99,
                background: accent, color: '#fff', border: 0,
                display: 'grid', placeItems: 'center', cursor: 'pointer',
                opacity: (busy || !input.trim()) ? .5 : 1,
              }}
            ><Icons.Send size={16}/></button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes apa-bounce { 0%,80%,100% { opacity:.3; transform:translateY(0); } 40% { opacity:1; transform:translateY(-3px); } }
        .apa-dot { width:6px; height:6px; border-radius:99px; background:${navy}; opacity:.4; animation: apa-bounce 1.2s infinite; }
        .apa-dot:nth-child(2){ animation-delay:.15s; } .apa-dot:nth-child(3){ animation-delay:.3s; }
      `}</style>
    </>
  );
}

// Formulario con tipo de cliente Particular/Empresa
function ContactForm({ accent = '#F26A1F', navy = '#0A1F3D', webhook, variant = 'light' }) {
  const [type, setType] = React.useState('empresa');
  const [form, setForm] = React.useState({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '', empleados: '50-200' });
  const [status, setStatus] = React.useState('idle'); // idle | sending | ok | err
  const dark = variant === 'dark';
  const fieldBg = dark ? 'rgba(255,255,255,.06)' : '#fff';
  const fieldBorder = dark ? 'rgba(255,255,255,.14)' : 'rgba(10,31,61,.14)';
  const fieldColor = dark ? '#fff' : navy;
  const lblColor = dark ? 'rgba(255,255,255,.7)' : 'rgba(10,31,61,.65)';

  async function submit(e) {
    e.preventDefault();
    if (!webhook) {
      setStatus('nourl');
      setTimeout(() => setStatus('idle'), 3500);
      return;
    }
    setStatus('sending');
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: type, ...form, source: 'apa-landing' }),
      });
      setStatus('ok');
      setForm({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '', empleados: '50-200' });
    } catch {
      setStatus('err');
    }
  }

  const fieldStyle = {
    width: '100%', padding: '12px 14px', borderRadius: 10,
    border: `1px solid ${fieldBorder}`, background: fieldBg, color: fieldColor,
    fontSize: 14, fontFamily: 'inherit', outline: 'none',
  };
  const labelStyle = { fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: lblColor, fontWeight: 600, marginBottom: 6, display: 'block' };

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Tipo de cliente */}
      <div style={{ display: 'flex', gap: 8, padding: 4, background: dark ? 'rgba(255,255,255,.06)' : 'rgba(10,31,61,.04)', borderRadius: 12 }}>
        {[['particular', 'Particular / Hogar'], ['empresa', 'Empresa / Restaurante']].map(([v, l]) => (
          <button key={v} type="button" onClick={() => setType(v)}
            style={{
              flex: 1, padding: '10px 14px', borderRadius: 9, border: 0,
              background: type === v ? (dark ? '#fff' : navy) : 'transparent',
              color: type === v ? (dark ? navy : '#fff') : (dark ? 'rgba(255,255,255,.7)' : 'rgba(10,31,61,.6)'),
              fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
              transition: 'all .15s',
            }}>{l}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>Nombre</label>
          <input required style={fieldStyle} value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })}/>
        </div>
        {type === 'empresa' ? (
          <div>
            <label style={labelStyle}>Empresa</label>
            <input required style={fieldStyle} value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })}/>
          </div>
        ) : (
          <div>
            <label style={labelStyle}>Localidad</label>
            <input style={fieldStyle} value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })}/>
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>Email</label>
          <input required type="email" style={fieldStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/>
        </div>
        <div>
          <label style={labelStyle}>Teléfono</label>
          <input style={fieldStyle} value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })}/>
        </div>
      </div>

      {type === 'empresa' && (
        <div>
          <label style={labelStyle}>Cantidad de empleados</label>
          <select style={fieldStyle} value={form.empleados} onChange={e => setForm({ ...form, empleados: e.target.value })}>
            <option>1-20</option><option>20-50</option><option>50-200</option><option>200-500</option><option>+500</option>
          </select>
        </div>
      )}

      <div>
        <label style={labelStyle}>Contanos qué necesitás</label>
        <textarea rows={4} style={{ ...fieldStyle, resize: 'vertical', minHeight: 90 }} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })}/>
      </div>

      <button type="submit" disabled={status === 'sending'}
        style={{
          background: accent, color: '#fff', border: 0, padding: '14px 22px',
          borderRadius: 11, fontWeight: 700, fontSize: 14.5, cursor: 'pointer',
          fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: '0 8px 20px rgba(242,106,31,.3)',
          opacity: status === 'sending' ? .6 : 1,
        }}>
        {status === 'sending' ? 'Enviando…' : status === 'ok' ? '¡Enviado! Te contactamos pronto.' : 'Enviar consulta'}
        {status === 'idle' && <Icons.Arrow/>}
      </button>

      {status === 'err' && <div style={{ fontSize: 12.5, color: '#D9534F' }}>No se pudo enviar. Revisá la URL del webhook.</div>}
      {status === 'nourl' && <div style={{ fontSize: 12.5, color: dark ? '#FFD7B5' : '#B25515' }}>Configurá el webhook del formulario en el panel Tweaks.</div>}
    </form>
  );
}

window.ChatWidget = ChatWidget;
window.ContactForm = ContactForm;
