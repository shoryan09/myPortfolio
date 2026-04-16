import { useState } from 'react';
import './Contact.css';

const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@shoryan09',
    href: 'https://github.com/shoryan09',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Shoryan Roy',
    href: 'https://www.linkedin.com/in/shoryanroy',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    handle: '@shoryanroy',
    href: 'https://x.com/shoryanroy',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'royshoryan01209@gmail.com',
    href: 'mailto:royshoryan01209@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Message from Portfolio');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:royshoryan01209@gmail.com?subject=${subject}&body=${body}`;
    setForm(INITIAL_FORM);
  };

  return (
    <main className="contact-page">
      <div className="contact-container">

        {/* Header */}
        <header className="contact-header">
          <span className="section-tag">Contact</span>
          <h1 className="contact-title">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="contact-subtitle">
            Whether it's a project, a job opportunity, or just a quick hello —
            my inbox is always open. I'll do my best to get back to you!
          </p>
        </header>

        <div className="contact-grid">
          {/* Form */}
          <section className="contact-form-wrap">
            {status === 'done' ? (
              <div className="contact-success" id="contact-success-msg">
                <div className="contact-success__icon">✓</div>
                <h2>Message sent!</h2>
                <p>Thanks for reaching out. I'll reply as soon as possible.</p>
                <button className="btn btn--ghost" onClick={() => setStatus('idle')} id="send-another-btn">
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Tell me more..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn btn--primary contact-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </section>

          {/* Sidebar */}
          <aside className="contact-sidebar">
            <div className="contact-info-card">
              <h2 className="contact-info-card__title">Find me on</h2>
              <div className="social-links">
                {SOCIALS.map(({ id, label, handle, href, icon }) => (
                  <a
                    key={id}
                    id={`social-${id}`}
                    href={href}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-link__icon">{icon}</span>
                    <span className="social-link__info">
                      <span className="social-link__label">{label}</span>
                      <span className="social-link__handle">{handle}</span>
                    </span>
                    <svg className="social-link__arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-availability-card">
              <div className="availability-dot" />
              <div>
                <p className="availability-title">Available for work</p>
                <p className="availability-sub">Open to full-time & freelance roles</p>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </main>
  );
}
