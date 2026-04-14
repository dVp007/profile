import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, MapPin, Terminal, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--neon-magenta))]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--neon-cyan))]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--neon-green))]/30 bg-[hsl(var(--neon-green))]/5 mb-6">
            <Sparkles className="h-4 w-4 text-[hsl(var(--neon-green))]" />
            <span className="text-sm text-[hsl(var(--neon-green))] font-medium tracking-wider uppercase">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-['Orbitron'] mb-4">
            <span className="text-glow-cyan text-[hsl(var(--neon-cyan))]">Let's</span>
            <span className="text-[hsl(var(--foreground))]"> Build </span>
            <span className="text-[hsl(var(--neon-green))]">Something</span>
            <br />
            <span className="text-[hsl(var(--foreground))]">Amazing Together</span>
          </h2>

          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Have a project in mind? Looking for AI expertise? 
            Or just want to chat about cutting-edge tech? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-[hsl(var(--muted-foreground))]">contact.ts</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="text-[hsl(var(--neon-cyan))] text-sm">
                  <span className="text-[hsl(var(--muted-foreground))]">const </span>
                  <span className="text-[hsl(var(--foreground))]">contact</span>
                  <span className="text-[hsl(var(--muted-foreground))]"> = {'{'}</span>
                </div>

                <div className="space-y-4 pl-4">
                  <a
                    href="mailto:dharmilp03@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-lg border border-[hsl(var(--neon-cyan))]/20 hover:border-[hsl(var(--neon-cyan))]/50 hover:bg-[hsl(var(--neon-cyan))]/5 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-[hsl(var(--neon-cyan))]/10">
                      <Mail className="h-5 w-5 text-[hsl(var(--neon-cyan))]" />
                    </div>
                    <div>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">Email</p>
                      <p className="text-sm text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--neon-cyan))] transition-colors">
                        dharmilp03@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/dVp007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-[hsl(var(--neon-magenta))]/20 hover:border-[hsl(var(--neon-magenta))]/50 hover:bg-[hsl(var(--neon-magenta))]/5 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-[hsl(var(--neon-magenta))]/10">
                      <Github className="h-5 w-5 text-[hsl(var(--neon-magenta))]" />
                    </div>
                    <div>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">GitHub</p>
                      <p className="text-sm text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--neon-magenta))] transition-colors">
                        github.com/dVp007
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/dharmil-parekh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-[hsl(var(--neon-blue))]/20 hover:border-[hsl(var(--neon-blue))]/50 hover:bg-[hsl(var(--neon-blue))]/5 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-[hsl(var(--neon-blue))]/10">
                      <Linkedin className="h-5 w-5 text-[hsl(var(--neon-blue))]" />
                    </div>
                    <div>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">LinkedIn</p>
                      <p className="text-sm text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--neon-blue))] transition-colors">
                        linkedin.com/in/dharmil-parekh
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-lg border border-[hsl(var(--neon-green))]/20">
                    <div className="p-2 rounded-lg bg-[hsl(var(--neon-green))]/10">
                      <MapPin className="h-5 w-5 text-[hsl(var(--neon-green))]" />
                    </div>
                    <div>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">Location</p>
                      <p className="text-sm text-[hsl(var(--foreground))]">
                        London, UK
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-[hsl(var(--muted-foreground))] text-sm">
                  <span>{'};'}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[hsl(var(--neon-cyan))]/20" style={{ backgroundColor: 'var(--card-bg)' }}>
              <h3 className="font-bold font-['Orbitron'] text-[hsl(var(--neon-cyan))] mb-3">
                Quick Response
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                I typically respond within 24-48 hours. For urgent matters, 
                reach out directly via email.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="terminal-window h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-[hsl(var(--muted-foreground))]">message.form</span>
              </div>
              <div className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-in">
                    <div className="p-4 rounded-full bg-[hsl(var(--neon-green))]/10 border border-[hsl(var(--neon-green))]/30">
                      <Sparkles className="h-8 w-8 text-[hsl(var(--neon-green))]" />
                    </div>
                    <h3 className="text-xl font-bold font-['Orbitron'] text-[hsl(var(--neon-green))]">
                      Message Sent!
                    </h3>
                    <p className="text-[hsl(var(--muted-foreground))] text-center">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-[hsl(var(--neon-cyan))] text-sm mb-4">
                      <span className="text-[hsl(var(--muted-foreground))]">{'// '}</span>
                      <span className="italic">Send me a message</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                          Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-[var(--terminal-bg)] border-[hsl(var(--neon-cyan))]/30 focus:border-[hsl(var(--neon-cyan))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/50 font-['JetBrains_Mono']"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-[var(--terminal-bg)] border-[hsl(var(--neon-cyan))]/30 focus:border-[hsl(var(--neon-cyan))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/50 font-['JetBrains_Mono']"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-[var(--terminal-bg)] border-[hsl(var(--neon-cyan))]/30 focus:border-[hsl(var(--neon-cyan))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/50 font-['JetBrains_Mono']"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="bg-[var(--terminal-bg)] border-[hsl(var(--neon-cyan))]/30 focus:border-[hsl(var(--neon-cyan))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]/50 font-['JetBrains_Mono'] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-cyber w-full py-6 text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="typing-cursor mr-2" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
