// Opción A — Corporativo Editorial
// Azul marino dominante, tipografía grande, layout editorial asimétrico, B2B-first.

function OptionA({ data, accent = '#F26A1F', navy = '#0A1F3D' }) {
  const [activeCat, setActiveCat] = React.useState(0);
  const cats = [data.catCarnes, data.catAves, data.catPastas, data.catSaludable];

  const sectionPad = { padding: '110px 80px' };
  const maxw = { maxWidth: 1320, margin: '0 auto' };

  return (
    <div style={{
      width: '100%', background: '#FAFAF7', color: navy,
      fontFamily: '"Inter", system-ui, sans-serif', fontSize: 15,
    }}>
      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: 'rgba(250,250,247,.85)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(10,31,61,.06)',
        padding: '18px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <ApaLogo variant="color" height={42}/>
        <div style={{ display: 'flex', gap: 30, fontSize: 13.5, fontWeight: 500 }}>
          {['Inicio', 'Viandas Empresas', 'Market Hogar', 'Nuestro Menú', 'Nosotros', 'Contacto'].map((l, i) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} style={{ color: i === 0 ? navy : 'rgba(10,31,61,.65)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        <button style={{
          background: navy, color: '#fff', border: 0, padding: '10px 18px',
          borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>Pedir presupuesto <Icons.Arrow size={14}/></button>
      </nav>

      {/* HERO */}
      <section style={{ ...sectionPad, paddingTop: 90, paddingBottom: 60 }}>
        <div style={maxw}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 60, alignItems: 'end' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 99, background: 'rgba(242,106,31,.1)', color: accent, fontSize: 12, fontWeight: 600, letterSpacing: '.04em', marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: accent }}/>
                {data.heroEyebrow}
              </div>
              <h1 style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: 84, lineHeight: 1.02, letterSpacing: '-.03em',
                fontWeight: 700, margin: 0, color: navy,
              }}>
                {data.heroTitle.split(' ').slice(0, -1).join(' ')}{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 500, color: accent }}>{data.heroTitle.split(' ').slice(-1)[0]}</span>
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(10,31,61,.7)', maxWidth: 540, marginTop: 28 }}>
                {data.heroSubtitle}
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
                <button style={{
                  background: accent, color: '#fff', border: 0, padding: '15px 26px',
                  borderRadius: 10, fontWeight: 700, fontSize: 14.5, cursor: 'pointer', fontFamily: 'inherit',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  boxShadow: '0 10px 24px rgba(242,106,31,.32)',
                }}>{data.ctaPrimary} <Icons.Arrow size={15}/></button>
                <button style={{
                  background: 'transparent', color: navy, border: `1.5px solid ${navy}`, padding: '13.5px 24px',
                  borderRadius: 10, fontWeight: 600, fontSize: 14.5, cursor: 'pointer', fontFamily: 'inherit',
                }}>{data.ctaSecondary}</button>
              </div>

              {/* Stats inline */}
              <div style={{ display: 'flex', gap: 48, marginTop: 64, paddingTop: 30, borderTop: '1px solid rgba(10,31,61,.1)' }}>
                {[['+15 años', 'En el rubro'], ['+80', 'Empresas confían'], ['98%', 'Entregas a tiempo']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 28, fontWeight: 700, color: navy }}>{n}</div>
                    <div style={{ fontSize: 12, color: 'rgba(10,31,61,.55)', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image collage */}
            <div style={{ position: 'relative', height: 580 }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '78%' }}>
                <FoodPlaceholder label="Plato terminado · hero" aspect="4/5" rounded={16} accent={accent}/>
              </div>
              <div style={{ position: 'absolute', bottom: 30, left: 0, width: '52%' }}>
                <FoodPlaceholder label="Detalle · materia prima" aspect="1/1" rounded={16} accent={accent} tone="cream"/>
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 30, width: 130, height: 130, borderRadius: 99, background: navy, color: '#fff', display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: 11.5, lineHeight: 1.4, padding: 14, boxShadow: '0 12px 30px rgba(10,31,61,.2)' }}>
                <div>
                  <div style={{ fontSize: 22, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, color: accent }}>24h</div>
                  <div style={{ opacity: .85, marginTop: 2 }}>Respuesta a presupuestos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS DUALES */}
      <section style={{ ...sectionPad, background: navy, color: '#fff' }}>
        <div style={maxw}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, gap: 40 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.18em', color: accent, fontWeight: 600, marginBottom: 14 }}>02 — SERVICIOS</div>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 52, lineHeight: 1.05, letterSpacing: '-.02em', fontWeight: 700, margin: 0, maxWidth: 720 }}>
                Dos canales, <span style={{ fontStyle: 'italic', fontWeight: 400, color: accent }}>un mismo estándar</span> de cocina.
              </h2>
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', maxWidth: 320, lineHeight: 1.55 }}>
              La operación corporativa y la mesa familiar comparten cocina, equipo y procesos. Cambia el formato, no la calidad.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {[
              { eyebrow: data.servicioAEyebrow, title: data.servicioATitle, desc: data.servicioADesc, icon: Icons.Building, points: ['Comedores in-company', 'Viandas individuales', 'Catering corporativo', 'Reportes nutricionales'] },
              { eyebrow: data.servicioBEyebrow, title: data.servicioBTitle, desc: data.servicioBDesc, icon: Icons.Home, points: ['Pedido online + retiro', 'Envío domicilio CABA/GBA', 'Suscripción semanal', 'Pack familiar'] },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{
                  background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 18, padding: 36, position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ width: '100%', marginBottom: 26 }}>
                    <FoodPlaceholder label={`${s.eyebrow} · imagen`} aspect="16/9" rounded={12} accent={accent} dark/>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 11px', borderRadius: 99, background: 'rgba(242,106,31,.18)', color: accent, fontSize: 11.5, fontWeight: 600, marginBottom: 18 }}>
                    <Icon size={14}/> {s.eyebrow}
                  </div>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 28, lineHeight: 1.15, fontWeight: 700, margin: '0 0 14px' }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {s.points.map(p => (
                      <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'rgba(255,255,255,.85)' }}>
                        <span style={{ width: 16, height: 16, borderRadius: 99, background: accent, display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icons.Check size={11}/></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: accent, marginTop: 28, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                    Conocer más <Icons.Arrow size={14}/>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATÁLOGO con tabs */}
      <section style={sectionPad} id="nuestro-menú">
        <div style={maxw}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 50 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.18em', color: accent, fontWeight: 600, marginBottom: 14 }}>03 — NUESTRO MENÚ</div>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 52, lineHeight: 1.05, letterSpacing: '-.02em', fontWeight: 700, margin: 0 }}>
                Catálogo gastronómico
              </h2>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid rgba(10,31,61,.1)', marginBottom: 40 }}>
            {cats.map((c, i) => (
              <button key={i} onClick={() => setActiveCat(i)}
                style={{
                  background: 'transparent', border: 0, padding: '14px 22px',
                  fontSize: 15, fontWeight: 600, fontFamily: 'inherit',
                  color: activeCat === i ? navy : 'rgba(10,31,61,.5)',
                  borderBottom: activeCat === i ? `2px solid ${accent}` : '2px solid transparent',
                  cursor: 'pointer', marginBottom: -1,
                }}>{c.name}</button>
            ))}
          </div>

          {/* Slider de productos */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <p style={{ margin: 0, fontSize: 16, color: 'rgba(10,31,61,.7)', maxWidth: 520 }}>{cats[activeCat].desc}</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={navBtn(navy)}><Icons.ArrowL/></button>
                <button style={navBtn(navy)}><Icons.Arrow/></button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {cats[activeCat].items.map((item, i) => (
                <article key={i} style={{ position: 'relative' }}>
                  <FoodPlaceholder label={item.name} aspect="4/5" rounded={14} accent={accent}/>
                  <div style={{ padding: '16px 4px 0' }}>
                    <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>{item.name}</h4>
                    <p style={{ fontSize: 13, color: 'rgba(10,31,61,.6)', lineHeight: 1.45, margin: 0 }}>{item.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
                      <span style={{ fontWeight: 700, color: accent, fontSize: 14 }}>{item.price}</span>
                      <button style={{ background: 'transparent', border: `1px solid ${navy}`, color: navy, padding: '6px 12px', borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Sumar</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section style={{ ...sectionPad, background: '#F1E7DB', paddingTop: 90, paddingBottom: 90 }}>
        <div style={maxw}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {[
              { icon: Icons.Shield, title: data.diff1Title, desc: data.diff1Desc },
              { icon: Icons.Spark, title: data.diff2Title, desc: data.diff2Desc },
              { icon: Icons.Truck, title: data.diff3Title, desc: data.diff3Desc },
            ].map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: navy, color: accent, display: 'grid', placeItems: 'center', marginBottom: 22 }}>
                    <Icon size={24}/>
                  </div>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 22, fontWeight: 700, margin: '0 0 10px', color: navy }}>{d.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'rgba(10,31,61,.7)', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HoReCa */}
      <section style={{ ...sectionPad }}>
        <div style={maxw}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'center' }}>
            <FoodPlaceholder label="Cocina industrial · HoReCa" aspect="4/5" rounded={16} accent={accent} tone="cool"/>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.18em', color: accent, fontWeight: 600, marginBottom: 14 }}>04 — HoReCa</div>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 48, lineHeight: 1.05, letterSpacing: '-.02em', fontWeight: 700, margin: '0 0 22px' }}>
                {data.horecaTitle}
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(10,31,61,.7)', lineHeight: 1.6, margin: '0 0 28px' }}>{data.horecaDesc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Salsas y bases listas para producción', 'Carnes y aves porcionadas al gramaje', 'Pastas frescas en formato gastronomía', 'Entregas semanales o quincenales por volumen'].map(p => (
                  <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}>
                    <span style={{ width: 22, height: 22, borderRadius: 99, background: accent, color: '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icons.Check size={13}/></span>
                    {p}
                  </li>
                ))}
              </ul>
              <button style={{
                marginTop: 32, background: navy, color: '#fff', border: 0, padding: '14px 22px',
                borderRadius: 10, fontWeight: 600, fontSize: 14.5, cursor: 'pointer', fontFamily: 'inherit',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>Solicitar lista de precios <Icons.Arrow size={14}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE / GANCHO */}
      <section style={{ padding: '90px 80px', background: navy, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 11, letterSpacing: '.22em', color: accent, fontWeight: 600, marginBottom: 30 }}>— APA —</div>
          <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 44, lineHeight: 1.2, fontWeight: 500, margin: 0, letterSpacing: '-.015em' }}>
            "{data.closingHook}"
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={sectionPad} id="contacto">
        <div style={maxw}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.18em', color: accent, fontWeight: 600, marginBottom: 14 }}>05 — CONTACTO</div>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 48, lineHeight: 1.05, letterSpacing: '-.02em', fontWeight: 700, margin: '0 0 22px' }}>{data.contactTitle}</h2>
              <p style={{ fontSize: 16, color: 'rgba(10,31,61,.7)', lineHeight: 1.6, margin: '0 0 36px' }}>{data.contactDesc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { icon: Icons.Mail, label: 'Email', value: data.contactEmail },
                  { icon: Icons.Phone, label: 'Teléfono', value: data.contactPhone },
                  { icon: Icons.Pin, label: 'Dirección', value: data.contactAddress },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(10,31,61,.05)', color: navy, display: 'grid', placeItems: 'center' }}><Icon/></div>
                    <div>
                      <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(10,31,61,.5)', fontWeight: 600 }}>{label}</div>
                      <div style={{ fontSize: 15, fontWeight: 500, marginTop: 2 }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: 18, padding: 36, boxShadow: '0 1px 0 rgba(10,31,61,.04), 0 30px 60px -20px rgba(10,31,61,.12)', border: '1px solid rgba(10,31,61,.05)' }}>
              <ContactForm accent={accent} navy={navy} webhook={data.formWebhook}/>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#F1E7DB', padding: '60px 80px 40px' }}>
        <div style={{ ...maxw, display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <ApaLogo variant="color" height={42}/>
            <p style={{ fontSize: 13.5, color: 'rgba(10,31,61,.65)', lineHeight: 1.6, margin: '20px 0 0', maxWidth: 280 }}>
              Eficiencia profesional con sabor artesanal. Buenos Aires, Argentina.
            </p>
          </div>
          {[
            { t: 'Soluciones', items: ['Viandas Empresas', 'Market Hogar', 'HoReCa', 'Catering'] },
            { t: 'Empresa', items: ['Nosotros', 'Trabajá con nosotros', 'Prensa', 'Contacto'] },
            { t: 'Legales', items: ['Términos', 'Privacidad', 'Habilitaciones', 'SENASA'] },
          ].map(c => (
            <div key={c.t}>
              <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: navy, marginBottom: 14 }}>{c.t}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {c.items.map(i => <li key={i}><a href="#" style={{ color: 'rgba(10,31,61,.65)', textDecoration: 'none', fontSize: 13.5 }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ ...maxw, marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(10,31,61,.1)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(10,31,61,.5)' }}>
          <div>© 2026 APA Soluciones Gastronómicas. Todos los derechos reservados.</div>
          <div>CUIT 30-12345678-9</div>
        </div>
      </footer>

      <ChatWidget accent={accent} navy={navy} greeting={data.chatGreeting} webhook={data.chatWebhook}/>
    </div>
  );
}

function navBtn(navy) {
  return {
    width: 40, height: 40, borderRadius: 99, border: `1px solid rgba(10,31,61,.15)`,
    background: 'transparent', color: navy, cursor: 'pointer',
    display: 'grid', placeItems: 'center',
  };
}

window.OptionA = OptionA;
