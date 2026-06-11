// Opción B — Mercado Cálido
// Crema + naranja dominante con azul de soporte. Sensación de almacén gourmet.
// Layout más cercano, cards con bordes orgánicos, retail-friendly.

function OptionB({ data, accent = '#F26A1F', navy = '#0A1F3D' }) {
  const cream = '#F7F1E8';
  const cardBg = '#FFFFFF';
  const cats = [data.catCarnes, data.catAves, data.catPastas, data.catSaludable];

  return (
    <div style={{
      width: '100%', background: cream, color: navy,
      fontFamily: '"Inter", system-ui, sans-serif', fontSize: 15,
    }}>
      {/* TOP BAR fina */}
      <div style={{ background: navy, color: '#fff', fontSize: 12, padding: '8px 0', textAlign: 'center', letterSpacing: '.04em' }}>
        Envíos a CABA y GBA · Pedidos antes de las 18 hs se entregan al día siguiente
      </div>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: cream, borderBottom: '1px solid rgba(10,31,61,.08)',
        padding: '20px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <ApaLogo variant="color" height={44}/>
        <div style={{ display: 'flex', gap: 28, fontSize: 14, fontWeight: 500 }}>
          {data.navItems.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} style={{ color: 'rgba(10,31,61,.78)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            background: 'transparent', color: navy, border: `1.5px solid ${navy}`, padding: '10px 18px',
            borderRadius: 99, fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
          }}>Empresas</button>
          <button style={{
            background: accent, color: '#fff', border: 0, padding: '11px 18px',
            borderRadius: 99, fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>Tienda <Icons.Arrow size={14}/></button>
        </div>
      </nav>

      {/* HERO — naranja con plato grande */}
      <section style={{ position: 'relative', padding: '60px 64px 80px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative' }}>
          <div style={{
            background: accent, borderRadius: 28, padding: '70px 70px 70px',
            color: '#fff', position: 'relative', overflow: 'hidden',
            display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'center',
            minHeight: 540,
          }}>
            {/* halo decorativo */}
            <div style={{ position: 'absolute', top: -120, right: -120, width: 380, height: 380, borderRadius: 99, background: 'rgba(255,255,255,.08)' }}/>
            <div style={{ position: 'absolute', bottom: -160, left: -120, width: 320, height: 320, borderRadius: 99, background: 'rgba(255,255,255,.06)' }}/>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 99, background: 'rgba(255,255,255,.18)', fontSize: 12.5, fontWeight: 600, marginBottom: 28, backdropFilter: 'blur(8px)' }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: '#fff' }}/>
                {data.heroEyebrow}
              </div>
              <h1 style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: 76, lineHeight: 1.04, letterSpacing: '-.025em',
                fontWeight: 800, margin: 0,
              }}>{data.heroTitle}</h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, opacity: .92, maxWidth: 480, marginTop: 24 }}>
                {data.heroSubtitle}
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <button style={{
                  background: '#fff', color: accent, border: 0, padding: '15px 24px',
                  borderRadius: 99, fontWeight: 700, fontSize: 14.5, cursor: 'pointer', fontFamily: 'inherit',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>{data.ctaPrimary} <Icons.Arrow size={15}/></button>
                <button style={{
                  background: navy, color: '#fff', border: 0, padding: '15px 24px',
                  borderRadius: 99, fontWeight: 700, fontSize: 14.5, cursor: 'pointer', fontFamily: 'inherit',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>{data.ctaSecondary} <Icons.Arrow size={15}/></button>
              </div>
            </div>

            {/* Plato grande circular */}
            <div style={{ position: 'relative', zIndex: 2, height: 420 }}>
              <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
                <div style={{ width: 420, height: 420, borderRadius: 99, overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,.25)', border: '8px solid rgba(255,255,255,.2)' }}>
                  <ImagenEditable src={data.images.heroA} label="Plato hero · estrella" aspect="1/1" rounded={0} accent="#fff" tone="warm"/>
                </div>
                {/* etiqueta flotante */}
                <div style={{ position: 'absolute', top: 30, right: -10, background: '#fff', color: navy, padding: '12px 18px', borderRadius: 14, boxShadow: '0 8px 20px rgba(0,0,0,.15)', fontSize: 13, lineHeight: 1.3 }}>
                  <div style={{ fontSize: 10, letterSpacing: '.1em', color: 'rgba(10,31,61,.5)', fontWeight: 600 }}>MÁS PEDIDO</div>
                  <div style={{ fontWeight: 700, marginTop: 2 }}>Albóndigas en salsa</div>
                </div>
                <div style={{ position: 'absolute', bottom: 40, left: -16, background: navy, color: '#fff', padding: '12px 18px', borderRadius: 14, boxShadow: '0 8px 20px rgba(0,0,0,.2)', fontSize: 13 }}>
                  <div style={{ fontSize: 10, letterSpacing: '.1em', opacity: .7, fontWeight: 600 }}>LISTO EN</div>
                  <div style={{ fontWeight: 700, marginTop: 2, color: accent }}>15 minutos</div>
                </div>
              </div>
            </div>
          </div>

          {/* tira de logos / trust */}
          <div style={{ marginTop: 40, padding: '20px 36px', background: '#fff', borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 30, flexWrap: 'wrap', boxShadow: '0 1px 0 rgba(10,31,61,.04)' }}>
            <div style={{ fontSize: 12, color: 'rgba(10,31,61,.55)', fontWeight: 600, letterSpacing: '.04em' }}>CONFÍAN EN APA</div>
            {['ACME S.A.', 'Grupo Polar', 'Estudio Norte', 'TecnoLab', 'Casa Mateo', 'Vínculo RRHH'].map(b => (
              <div key={b} style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 16, fontWeight: 700, color: 'rgba(10,31,61,.4)', letterSpacing: '-.01em' }}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS DUALES — cards horizontales con foto a la izquierda */}
      <section style={{ padding: '60px 64px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div style={{ fontSize: 12, letterSpacing: '.18em', color: accent, fontWeight: 700, marginBottom: 14 }}>NUESTRAS SOLUCIONES</div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 44, lineHeight: 1.1, letterSpacing: '-.02em', fontWeight: 700, margin: 0 }}>
              Para tu oficina y para tu casa
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              { eyebrow: data.servicioAEyebrow, title: data.servicioATitle, desc: data.servicioADesc, icon: Icons.Building, img: data.images.servicioA, cta: 'Pedir presupuesto', tone: 'cool' },
              { eyebrow: data.servicioBEyebrow, title: data.servicioBTitle, desc: data.servicioBDesc, icon: Icons.Home, img: data.images.servicioB, cta: 'Ver tienda', tone: 'warm' },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} style={{
                  background: cardBg, borderRadius: 24, overflow: 'hidden',
                  display: 'grid', gridTemplateColumns: '1fr 1.1fr',
                  border: '1px solid rgba(10,31,61,.05)',
                }}>
                  <ImagenEditable src={s.img} label={`${s.eyebrow}`} aspect="1/1" rounded={0} accent={accent} tone={s.tone}/>
                  <div style={{ padding: '32px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: accent, fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 12 }}>
                      <Icon size={15}/> {s.eyebrow}
                    </div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 26, lineHeight: 1.15, fontWeight: 700, margin: '0 0 12px' }}>{s.title}</h3>
                    <p style={{ fontSize: 14.5, color: 'rgba(10,31,61,.7)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                    <button style={{
                      marginTop: 22, alignSelf: 'flex-start',
                      background: navy, color: '#fff', border: 0, padding: '11px 20px',
                      borderRadius: 99, fontWeight: 600, fontSize: 13.5, cursor: 'pointer', fontFamily: 'inherit',
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                    }}>{s.cta} <Icons.Arrow size={14}/></button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATÁLOGO — 4 sliders apilados, tipo almacén */}
      <section style={{ padding: '40px 64px 80px' }} id="nuestro-menú">
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.18em', color: accent, fontWeight: 700, marginBottom: 12 }}>NUESTRO MENÚ</div>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 44, lineHeight: 1.1, letterSpacing: '-.02em', fontWeight: 700, margin: 0 }}>Catálogo gastronómico</h2>
            </div>
            <a href="#" style={{ color: navy, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Ver menú completo <Icons.Arrow size={14}/>
            </a>
          </div>

          {cats.map((cat, ci) => (
            <CategoryRow key={ci} cat={cat} accent={accent} navy={navy} cardBg={cardBg}/>
          ))}
        </div>
      </section>

      {/* DIFERENCIALES — banda navy con números grandes */}
      <section style={{ padding: '90px 64px', background: navy, color: '#fff' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 12, letterSpacing: '.18em', color: accent, fontWeight: 700, marginBottom: 14 }}>POR QUÉ APA</div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 44, lineHeight: 1.1, fontWeight: 700, margin: 0, letterSpacing: '-.02em' }}>
              Control total de calidad, de punta a punta
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
            {[
              { n: '01', icon: Icons.Shield, title: data.diff1Title, desc: data.diff1Desc },
              { n: '02', icon: Icons.Spark, title: data.diff2Title, desc: data.diff2Desc },
              { n: '03', icon: Icons.Truck, title: data.diff3Title, desc: data.diff3Desc },
            ].map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} style={{ padding: '30px 28px', background: 'rgba(255,255,255,.04)', borderRadius: 20, border: '1px solid rgba(255,255,255,.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: accent, display: 'grid', placeItems: 'center', color: '#fff' }}><Icon size={22}/></div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 32, fontWeight: 800, color: 'rgba(255,255,255,.18)', letterSpacing: '-.02em' }}>{d.n}</div>
                  </div>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 20, fontWeight: 700, margin: '0 0 10px' }}>{d.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HoReCa */}
      <section style={{ padding: '90px 64px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ background: cardBg, borderRadius: 28, padding: 56, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 50, alignItems: 'center', border: '1px solid rgba(10,31,61,.05)' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: accent, fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>
                <Icons.Chef size={16}/> HoReCa
              </div>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 40, lineHeight: 1.1, letterSpacing: '-.02em', fontWeight: 700, margin: '0 0 18px' }}>{data.horecaTitle}</h2>
              <p style={{ fontSize: 16, color: 'rgba(10,31,61,.7)', lineHeight: 1.6, margin: '0 0 24px' }}>{data.horecaDesc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {['Salsas y bases listas', 'Carnes porcionadas', 'Pastas formato gastro', 'Entregas por volumen'].map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ width: 20, height: 20, borderRadius: 99, background: 'rgba(242,106,31,.15)', color: accent, display: 'grid', placeItems: 'center', flexShrink: 0 }}><Icons.Check size={12}/></span>
                    {p}
                  </div>
                ))}
              </div>
              <button style={{
                marginTop: 28, background: accent, color: '#fff', border: 0, padding: '13px 22px',
                borderRadius: 99, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>Solicitar lista de precios <Icons.Arrow size={14}/></button>
            </div>
            <div style={{ position: 'relative', height: 380 }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '60%' }}>
                <ImagenEditable src={data.images.horeca} label="Insumos volumen" aspect="3/4" rounded={18} accent={accent} tone="cool"/>
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '60%' }}>
                <ImagenEditable src={data.images.heroADetail} label="Cocina" aspect="3/4" rounded={18} accent={accent} tone="cream"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section style={{ padding: '80px 64px', background: cream }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: 60, color: accent, fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: 10 }}>"</div>
          <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 38, lineHeight: 1.25, fontWeight: 500, margin: 0, color: navy, letterSpacing: '-.01em' }}>
            {data.closingHook}
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{ padding: '80px 64px' }} id="contacto">
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ background: navy, borderRadius: 28, padding: 56, color: '#fff', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.18em', color: accent, fontWeight: 700, marginBottom: 14 }}>CONTACTO</div>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 40, lineHeight: 1.1, letterSpacing: '-.02em', fontWeight: 700, margin: '0 0 18px' }}>{data.contactTitle}</h2>
              <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.75)', lineHeight: 1.6, margin: '0 0 32px' }}>{data.contactDesc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: Icons.Mail, label: 'Email', value: data.contactEmail },
                  { icon: Icons.Phone, label: 'Teléfono', value: data.contactPhone },
                  { icon: Icons.Pin, label: 'Dirección', value: data.contactAddress },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,.08)', display: 'grid', placeItems: 'center' }}><Icon/></div>
                    <div>
                      <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', fontWeight: 600 }}>{label}</div>
                      <div style={{ fontSize: 14.5, fontWeight: 500, marginTop: 2 }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm accent={accent} navy={navy} webhook={data.formWebhook} variant="dark"/>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: navy, color: 'rgba(255,255,255,.7)', padding: '60px 64px 40px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <ApaLogo variant="white" height={42}/>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: '20px 0 0', maxWidth: 280 }}>
              {data.footerTagline}
            </p>
          </div>
          {data.footerColumns.map(c => (
            <div key={c.title}>
              <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: '#fff', marginBottom: 14 }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {c.items.map(i => <li key={i}><a href="#" style={{ color: 'rgba(255,255,255,.65)', textDecoration: 'none', fontSize: 13.5 }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1320, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,.5)' }}>
          <div>© 2026 APA Soluciones Gastronómicas. Todos los derechos reservados.</div>
          <div>{data.footerCuit}</div>
        </div>
      </footer>

      <ChatWidget accent={accent} navy={navy} greeting={data.chatGreeting} webhook={data.chatWebhook}/>
    </div>
  );
}

function CategoryRow({ cat, accent, navy, cardBg }) {
  return (
    <div style={{ marginTop: 50 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
        <div>
          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 26, fontWeight: 700, margin: 0, color: navy, letterSpacing: '-.01em' }}>{cat.name}</h3>
          <p style={{ fontSize: 13.5, color: 'rgba(10,31,61,.6)', margin: '6px 0 0' }}>{cat.desc}</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ width: 36, height: 36, borderRadius: 99, border: `1px solid rgba(10,31,61,.15)`, background: '#fff', color: navy, cursor: 'pointer', display: 'grid', placeItems: 'center' }}><Icons.ArrowL/></button>
          <button style={{ width: 36, height: 36, borderRadius: 99, border: `1px solid rgba(10,31,61,.15)`, background: '#fff', color: navy, cursor: 'pointer', display: 'grid', placeItems: 'center' }}><Icons.Arrow/></button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {cat.items.map((item, i) => (
          <article key={i} style={{ background: cardBg, borderRadius: 18, padding: 14, border: '1px solid rgba(10,31,61,.05)', transition: 'transform .2s', cursor: 'pointer' }}>
            <ImagenEditable src={item.img} label={item.name} aspect="1/1" rounded={12} accent={accent}/>
            <div style={{ padding: '14px 6px 4px' }}>
              <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: 16, fontWeight: 700, margin: '0 0 4px', color: navy }}>{item.name}</h4>
              <p style={{ fontSize: 12.5, color: 'rgba(10,31,61,.6)', lineHeight: 1.45, margin: 0, minHeight: 36 }}>{item.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                <span style={{ fontWeight: 700, color: navy, fontSize: 14 }}>{item.price}</span>
                <button style={{ background: accent, border: 0, color: '#fff', width: 32, height: 32, borderRadius: 99, cursor: 'pointer', display: 'grid', placeItems: 'center', fontSize: 18, fontWeight: 700, fontFamily: 'inherit' }}>+</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

window.OptionB = OptionB;
