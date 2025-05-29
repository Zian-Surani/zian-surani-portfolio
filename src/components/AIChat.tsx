
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Zian's AI assistant. I can tell you about his expertise, experience, and projects. What would you like to know?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const expertiseData = {
    "machine learning": "Zian has 5+ years of experience in ML, with expertise in deep learning, neural networks, computer vision, and NLP. He's published 12+ papers in top-tier conferences like CVPR and NeurIPS.",
    "computer vision": "Specializes in object detection, image classification, and real-time vision systems. Led development of autonomous vehicle perception systems and agricultural monitoring solutions.",
    "ai research": "Currently an AI Research Scientist at TechVanguard Labs, published 12+ papers, secured $2.5M in research funding, and won Best Paper Award at CVPR 2023.",
    "startup": "Founder & CTO of Kisan Mithran, raised $1.2M seed funding, deployed solutions across 500+ farms, achieved 40% increase in crop yields for farmers.",
    "experience": "AI Research Scientist at TechVanguard Labs (2023-Present), Founder & CTO at Kisan Mithran (2022-Present), Senior ML Engineer at DataFlow Dynamics (2021-2023).",
    "skills": "Expert in PyTorch, TensorFlow, Python, React, Node.js, AWS, Docker, Kubernetes. Strong background in deep learning, computer vision, and full-stack development.",
    "achievements": "Published 12+ papers, secured $2.5M funding, won CVPR Best Paper Award, raised $1.2M for startup, deployed solutions to 500+ farms.",
    "education": "PhD candidate specializing in AI and computer vision, with focus on novel neural architectures and optimization techniques."
  };

  const generateResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    // Check for specific keywords
    for (const [key, value] of Object.entries(expertiseData)) {
      if (lowercaseInput.includes(key)) {
        return value;
      }
    }
    
    // Default responses for common questions
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
      return "Hello! I'm here to help you learn about Zian's expertise. You can ask me about his machine learning experience, computer vision work, startup journey, research, or any specific skills you're curious about.";
    }
    
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('hire') || lowercaseInput.includes('work')) {
      return "Interested in working with Zian? He's available for AI consulting, research collaborations, and technical advisory roles. You can reach out through the contact section on his portfolio.";
    }
    
    if (lowercaseInput.includes('project')) {
      return "Zian has worked on various projects including Kisan Mithran (AI-powered agriculture), neural vision APIs, AutoML pipelines, and IoT dashboards. Each project demonstrates his ability to translate research into practical applications.";
    }
    
    return "That's an interesting question! Zian's expertise spans AI research, machine learning, computer vision, and startup building. Could you be more specific about what aspect you'd like to know about?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: inputValue
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        type: 'bot' as const,
        content: response
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 glow ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[32rem] glass rounded-2xl border border-cyan-500/30 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Zian's AI Assistant</h3>
                <p className="text-white/80 text-sm">Ask me about his expertise</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                    : 'bg-gradient-to-r from-purple-400 to-pink-500'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`flex-1 p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-cyan-500/20 text-cyan-100' 
                    : 'bg-gray-700/50 text-gray-200'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Zian's expertise..."
                className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
