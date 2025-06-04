
import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Starting form submission...");
      
      // Store in Supabase database first
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      console.log("Message saved to database successfully");

      // Send email notification
      try {
        const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-email', {
          body: {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        });

        if (emailError) {
          console.error('Email error:', emailError);
          throw emailError;
        }

        console.log("Email sent successfully:", emailData);
        
        // Send SMS notification
        try {
          const { data: smsData, error: smsError } = await supabase.functions.invoke('send-sms-notification', {
            body: {
              name: formData.name,
              email: formData.email,
              message: formData.message
            }
          });

          if (smsError) {
            console.error('SMS error:', smsError);
          } else {
            console.log("SMS notification sent successfully:", smsData);
          }
        } catch (smsError) {
          console.error('SMS notification failed:', smsError);
          // SMS failure is not critical, continue
        }

      } catch (emailError) {
        console.error('Email failed, trying SMS notification:', emailError);
        
        // If email fails, try SMS as fallback
        try {
          const { data: smsData, error: smsError } = await supabase.functions.invoke('send-sms-notification', {
            body: {
              name: formData.name,
              email: formData.email,
              message: formData.message
            }
          });

          if (smsError) {
            console.error('SMS fallback also failed:', smsError);
          } else {
            console.log("SMS notification sent as fallback:", smsData);
          }
        } catch (smsError) {
          console.error('Both email and SMS failed:', smsError);
          // Continue anyway as the message was saved to database
        }
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Ready to collaborate on AI research and innovation? Let's discuss how we can build the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className={`${isVisible ? 'slide-in-left animate' : 'slide-in-left'}`}>
            <div className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium break-all">zian.surani@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Follow my journey</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Zian-Surani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:glow transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/zian-rajeshkumar-surani-125215195" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:glow transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                  </a>
                  <a 
                    href="mailto:zian.surani@gmail.com"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:glow transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'slide-in-right animate' : 'slide-in-right'}`}>
            <form onSubmit={handleSubmit} className="glass p-6 md:p-8 rounded-2xl">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow-pulse flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
