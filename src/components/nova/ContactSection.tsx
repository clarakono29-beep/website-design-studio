import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const offices = [
  { city: "Harare (Head Office)", address: "Central Business District, Harare, Zimbabwe", phone: "+263 (0) 000 000", email: "info@novarisezw.co.zw" },
  { city: "Bulawayo (Year 2)", address: "Bulawayo, Zimbabwe", phone: "+263 (0) 000 000", email: "bulawayo@novarisezw.co.zw" },
];
const enquiryTypes = [
  "Commercial Cleaning Quote", "Residential Cleaning Quote", "Academy Enrolment",
  "Employer Platform Registration", "Maid Profile Registration", "General Enquiry",
];

const inputStyle: React.CSSProperties = {
  background: "color-mix(in oklab, var(--warm) 7%, transparent)",
  border: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)",
  borderRadius: 2,
  padding: "0.7rem 0.95rem",
  fontFamily: "var(--font-sans)",
  fontSize: "0.88rem",
  color: "var(--warm)",
  outline: "none",
  width: "100%",
};
const labelStyle: React.CSSProperties = { fontFamily: "var(--font-sans)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" };

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Your enquiry has been received. We'll respond within 24 hours.");
  };

  return (
    <section id="contact" className="grain-overlay" style={{ background: "var(--navy)" }}>
      <div className="container py-20 lg:py-28 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="gold-rule" />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>Get in Touch</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--warm)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Let's Start a<br /><em style={{ color: "var(--gold)" }}>Conversation</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "color-mix(in oklab, var(--warm) 70%, transparent)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Whether you need a cleaning quote, want to enrol in the Academy, or are looking to hire a trained domestic worker — our team responds within 24 hours.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              {offices.map((o) => (
                <div key={o.city} className="p-5" style={{ background: "color-mix(in oklab, var(--warm) 5%, transparent)", border: "1px solid color-mix(in oklab, var(--gold) 18%, transparent)", borderRadius: 2 }}>
                  <div className="font-display" style={{ fontWeight: 600, fontSize: "1rem", color: "var(--gold)", marginBottom: "0.75rem" }}>{o.city}</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <MapPin size={14} style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", color: "color-mix(in oklab, var(--warm) 70%, transparent)" }}>{o.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                      <a href={`tel:${o.phone}`} style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", color: "color-mix(in oklab, var(--warm) 70%, transparent)", textDecoration: "none" }}>{o.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                      <a href={`mailto:${o.email}`} style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", color: "color-mix(in oklab, var(--warm) 70%, transparent)", textDecoration: "none" }}>{o.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/263000000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3"
              style={{ background: "#25D366", borderRadius: 2, textDecoration: "none" }}>
              <MessageCircle size={18} style={{ color: "white" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.85rem", color: "white", letterSpacing: "0.05em" }}>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="p-8" style={{ background: "color-mix(in oklab, var(--warm) 4%, transparent)", border: "1px solid color-mix(in oklab, var(--gold) 18%, transparent)", borderRadius: 2 }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <CheckCircle size={48} style={{ color: "var(--gold)" }} />
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.5rem", color: "var(--warm)" }}>Enquiry Received</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "color-mix(in oklab, var(--warm) 70%, transparent)", lineHeight: 1.6 }}>
                  Thank you, {form.name}. We'll respond to {form.email} within 24 hours.
                </p>
                <button className="btn-white-outline mt-4" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", type: "", message: "" }); }}>
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <h3 className="font-display" style={{ fontWeight: 600, fontSize: "1.3rem", color: "var(--warm)" }}>Send an Enquiry</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label style={labelStyle}>Full Name *</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Your full name" style={inputStyle} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label style={labelStyle}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label style={labelStyle}>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={onChange} placeholder="+263 000 000" style={inputStyle} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label style={labelStyle}>Enquiry Type</label>
                    <select name="type" value={form.type} onChange={onChange} style={{ ...inputStyle, background: "color-mix(in oklab, var(--navy) 90%, transparent)", cursor: "pointer", color: form.type ? "var(--warm)" : "color-mix(in oklab, var(--warm) 40%, transparent)" }}>
                      <option value="" disabled>Select type...</option>
                      {enquiryTypes.map((t) => <option key={t} value={t} style={{ background: "var(--navy)", color: "var(--warm)" }}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={4} placeholder="Tell us about your requirements..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-gold" style={{ width: "100%" }}>
                  <Send size={16} /> Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
