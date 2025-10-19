import React, { useState, useRef, useEffect } from "react";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // PitchCraft AI Response Generator
  const generatePitchCraftResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Startup idea detection
    if (input.includes('startup') || input.includes('business') || input.includes('app') || 
        input.includes('platform') || input.includes('build') || input.includes('create') ||
        input.includes('mentor') || input.includes('student') || input.includes('connect')) {
      
      return generateStartupPitch(userInput);
    }
    
    // Name generation requests
    if (input.includes('name') || input.includes('brand') || input.includes('call')) {
      return generateBrandingIdeas(userInput);
    }
    
    // Tagline requests
    if (input.includes('tagline') || input.includes('slogan')) {
      return generateTaglines(userInput);
    }
    
    // Pitch requests
    if (input.includes('pitch') || input.includes('elevator')) {
      return generateElevatorPitch(userInput);
    }
    
    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return `🚀 Welcome to PitchCraft! I'm your AI startup partner. Tell me your business idea, and I'll help you craft the perfect pitch, name, and branding strategy.`;
    }
    
    // Default startup assistance
    return `💡 I see you're interested in "${userInput}". As your PitchCraft AI partner, I can help you:\n\n• Generate creative startup names & taglines\n• Write compelling elevator pitches\n• Define target audience & value proposition\n• Create website hero section copy\n• Suggest color palettes & logo concepts\n\nTell me more about your business idea!`;
  };

  // Generate complete startup pitch
  const generateStartupPitch = (userInput) => {
    const startupIdeas = [
      {
        name: "MentorMate",
        tagline: "Guidance Meets Growth",
        pitch: "A platform connecting learners with industry mentors for personalized guidance and career growth.",
        audience: "Students, young professionals, career changers",
        valueProp: "Direct access to experienced mentors, structured learning paths, career advancement opportunities",
        colorPalette: "Professional Blue (#2563eb), Growth Green (#10b981), Energy Orange (#f59e0b)",
        logoConcept: "Abstract M shape combining graduation cap and connection dots"
      },
      {
        name: "SkillSync",
        tagline: "Learn Smarter, Grow Faster",
        pitch: "An AI-powered learning platform that matches your skills with personalized learning resources and mentorship.",
        audience: "Lifelong learners, professionals, students",
        valueProp: "Personalized skill assessment, curated learning paths, progress tracking",
        colorPalette: "Tech Purple (#8b5cf6), Innovation Teal (#14b8a6), Success Green (#22c55e)",
        logoConcept: "Sync icon merging brain and gear symbols"
      },
      {
        name: "ConnectHub",
        tagline: "Where Opportunities Meet Talent",
        pitch: "A networking platform that connects talented individuals with opportunities and like-minded professionals.",
        audience: "Professionals, freelancers, entrepreneurs",
        valueProp: "Smart matching algorithm, verified profiles, opportunity discovery",
        colorPalette: "Network Blue (#3b82f6), Connection Purple (#a855f7), Trust Indigo (#6366f1)",
        logoConcept: "Interconnected nodes forming a hub pattern"
      }
    ];

    const idea = startupIdeas[Math.floor(Math.random() * startupIdeas.length)];
    
    return `🎯 **PitchCraft Analysis Complete**\n\n**Startup Name:** ${idea.name}\n**Tagline:** "${idea.tagline}"\n\n**Elevator Pitch:**\n"${idea.pitch}"\n\n**Target Audience:**\n${idea.audience}\n\n**Unique Value Proposition:**\n${idea.valueProp}\n\n**Branding Suggestions:**\n• Color Palette: ${idea.colorPalette}\n• Logo Concept: ${idea.logoConcept}\n\n**Website Hero Copy:**\n"Transform your ${userInput.split(' ').slice(0, 3).join(' ')} journey with ${idea.name}. ${idea.tagline} - Start building your future today!"`;
  };

  // Generate branding ideas
  const generateBrandingIdeas = (userInput) => {
    const nameIdeas = [
      "NexusFlow", "PrimeConnect", "ElevateAI", "SparkGrid", "VisionaryHub",
      "MomentumLabs", "InnovateSphere", "CoreSync", "ApexForge", "PulseNetwork"
    ];
    
    const selectedNames = nameIdeas.sort(() => 0.5 - Math.random()).slice(0, 4);
    
    return `🎨 **Creative Name Suggestions for "${userInput}"**\n\n**Top Name Ideas:**\n${selectedNames.map((name, i) => `${i + 1}. ${name}`).join('\n')}\n\n**Name Analysis:**\n• ${selectedNames[0]} - Modern, tech-forward\n• ${selectedNames[1]} - Premium, trustworthy\n• ${selectedNames[2]} - Innovative, cutting-edge\n• ${selectedNames[3]} - Energetic, dynamic\n\n**Recommendation:** ${selectedNames[0]} - Memorable and brandable for your target market.`;
  };

  // Generate taglines
  const generateTaglines = (userInput) => {
    const taglineGroups = [
      [
        "Simplify Your Success Journey",
        "Where Innovation Meets Execution", 
        "Building Tomorrow, Today",
        "Your Vision, Our Technology"
      ],
      [
        "Empowering Digital Transformation",
        "Smart Solutions for Modern Challenges",
        "Connecting Ideas to Reality",
        "Growth Engineered for You"
      ]
    ];
    
    const taglines = taglineGroups[Math.floor(Math.random() * taglineGroups.length)];
    
    return `✨ **Tagline Ideas for "${userInput}"**\n\n**Creative Taglines:**\n${taglines.map((tagline, i) => `${i + 1}. "${tagline}"`).join('\n')}\n\n**Usage Tips:**\n• Use in website headers\n• Social media bios\n• Email signatures\n• Business cards\n\n**Best Fit:** "${taglines[0]}" - Clear, benefit-oriented, and memorable.`;
  };

  // Generate elevator pitch
  const generateElevatorPitch = (userInput) => {
    const pitchTemplates = [
      `We help ${userInput} solve their biggest challenges through innovative technology and personalized solutions, saving them time and increasing efficiency by up to 40%.`,

      `${userInput} struggle with [common problem]. Our platform provides [solution] that delivers [key benefit], making it easier to [achieve goal].`,

      `Imagine a world where ${userInput} can [achieve desired outcome] without [common pain point]. That's exactly what we're building - a revolutionary approach to [industry/field].`
    ];
    
    return `🎤 **Elevator Pitch for "${userInput}"**\n\n**30-Second Pitch:**\n"${pitchTemplates[0]}"\n\n**Alternative Versions:**\n1. "${pitchTemplates[1]}"\n2. "${pitchTemplates[2]}"\n\n**Key Elements Included:**\n✓ Problem statement\n✓ Your solution\n✓ Key benefits\n✓ Target audience\n✓ Unique value\n\n**Delivery Tips:**\n• Speak with confidence\n• Focus on benefits, not features\n• Keep it under 30 seconds\n• End with a call to action`;
  };

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500));
      
      // Generate PitchCraft response
      const response = generatePitchCraftResponse(input);
      
      const botMessage = { 
        sender: "bot", 
        text: response 
      };
      setMessages((prev) => [...prev, botMessage]);
      
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Sorry, there was an error processing your request. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const clearChat = () => {
    setMessages([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };

  // Quick suggestion handler
  const handleQuickSuggestion = (suggestion) => {
    setInput(suggestion);
    setTimeout(() => {
      document.querySelector('input[type="text"]')?.focus();
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-100">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md shadow-lg border-b border-purple-200 py-6 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              PitchCraft AI
            </h1>
            <p className="text-lg text-gray-600 mt-2">Your Personal Startup Co-founder & Pitch Partner</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={clearChat}
              className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-xl transition-all duration-200 font-medium shadow-sm border border-gray-300 hover:shadow-md"
            >
              🗑️ New Pitch
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4">
        {/* Messages Container */}
        <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-200/50 flex flex-col mb-6">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 min-h-[500px]">
            {messages.length === 0 ? (
              <div className="text-center text-gray-700 mt-12">
                <div className="text-7xl mb-6">🚀</div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Welcome to PitchCraft
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
                  Your AI-powered startup partner. I help transform your ideas into compelling pitches, 
                  creative names, and professional branding strategies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl mb-2">💡</div>
                    <h3 className="font-semibold text-blue-800">Idea Refinement</h3>
                    <p className="text-sm text-blue-600">Transform raw ideas into business concepts</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-2xl mb-2">🎯</div>
                    <h3 className="font-semibold text-purple-800">Pitch Crafting</h3>
                    <p className="text-sm text-purple-600">Create compelling elevator pitches</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">✨</div>
                    <h3 className="font-semibold text-green-800">Brand Building</h3>
                    <p className="text-sm text-green-600">Generate names, taglines & branding</p>
                  </div>
                </div>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] p-5 rounded-2xl shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none shadow-blue-200"
                        : "bg-gradient-to-br from-white to-gray-50 text-gray-800 border border-gray-300 rounded-bl-none shadow-gray-200"
                    }`}
                  >
                    <div className="whitespace-pre-wrap leading-relaxed text-[15px]">
                      {msg.text}
                    </div>
                    <div className={`text-xs mt-3 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {msg.sender === 'user' ? 'You' : 'PitchCraft AI'}
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-white to-gray-50 text-gray-800 border border-gray-300 rounded-2xl rounded-bl-none p-5 max-w-md shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Crafting your pitch...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-300/50 p-5 bg-gradient-to-r from-gray-50 to-purple-50/50 rounded-b-2xl">
            <form onSubmit={sendMessage} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Describe your startup idea... (e.g., 'I want to build an app that connects students with mentors')"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                  className="w-full p-4 pr-24 rounded-xl border border-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed shadow-inner bg-white/90 backdrop-blur-sm text-gray-700 placeholder-gray-500"
                  autoFocus
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs bg-white px-2 py-1 rounded border border-gray-300 shadow-sm">
                  ↵ Enter to send
                </div>
              </div>
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-sm ${
                  loading || !input.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed border border-gray-400'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-purple-200 border border-purple-500 hover:shadow-md'
                }`}
              >
                {loading ? 'Crafting...' : 'Pitch It!'}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Pitch Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { emoji: "🎓", text: "App connecting students with mentors", category: "education" },
            { emoji: "🛒", text: "Platform for local artisans to sell products", category: "ecommerce" },
            { emoji: "🏥", text: "Telemedicine service for rural areas", category: "healthtech" },
            { emoji: "🌱", text: "Sustainable food delivery service", category: "sustainability" }
          ].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleQuickSuggestion(suggestion.text)}
              disabled={loading}
              className="p-4 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-xl text-sm text-gray-700 hover:bg-white hover:shadow-lg transition-all duration-200 text-left disabled:opacity-50 hover:border-purple-400 group"
            >
              <div className="text-xl mb-3 group-hover:scale-110 transition-transform">
                {suggestion.emoji}
              </div>
              <div className="font-semibold text-gray-800 mb-1">{suggestion.text}</div>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full inline-block">
                {suggestion.category}
              </div>
            </button>
          ))}
        </div>

        {/* Features Info */}
        <div className="text-center text-gray-600 text-sm bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-300/50">
          <p className="font-semibold text-gray-700 mb-2">🎯 PitchCraft Generates:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Startup Names</span>
            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full">Elevator Pitches</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">Taglines</span>
            <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full">Branding Ideas</span>
          </div>
        </div>
      </div>
    </div>
  );
}