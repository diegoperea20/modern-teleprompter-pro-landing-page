"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, EyeOff, Monitor, Keyboard, Settings, Play, RotateCcw, ChevronDown, Zap, Users, GraduationCap, Video, Github, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

export default function TeleprompterProLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-[#141414] overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#4297d7]/10 to-[#1e40af]/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#4297d7]/5 to-[#1e40af]/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-[#1e40af]/5 to-[#4297d7]/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
      </div>

      {/* Header */}
      <header
        className={`bg-[#1a1a1a] text-white py-4 px-6 relative z-10 transition-all duration-1000 border-b border-[#4297d7]/20 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4297d7] to-[#1e40af] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <img
              src="/icon.png"
              alt="Modern Teleprompter Pro Icon"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#4297d7] bg-clip-text text-transparent">
              Modern Teleprompter Pro
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="hover:text-[#4297d7] transition-all duration-300 hover:scale-105 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4297d7] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#download"
              className="hover:text-[#4297d7] transition-all duration-300 hover:scale-105 relative group"
            >
              Download
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4297d7] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#support"
              className="hover:text-[#4297d7] transition-all duration-300 hover:scale-105 relative group"
            >
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4297d7] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge
            className={`mb-6 bg-[#4297d7] text-white transition-all duration-1000 delay-300 hover:scale-110 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <EyeOff className="w-4 h-4 mr-2 animate-pulse" />
            Invisible During Screen Share
          </Badge>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 text-balance transition-all duration-1000 delay-500 bg-gradient-to-r from-white via-[#4297d7] to-white bg-clip-text text-transparent ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Modern Teleprompter Pro with{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#4297d7] to-[#1e40af] bg-clip-text text-transparent animate-pulse">
                Invisible Mode
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4297d7]/20 to-[#1e40af]/20 blur-lg animate-pulse"></div>
            </span>
          </h2>
          <p
            className={`text-xl md:text-2xl mb-8 text-gray-300 text-pretty transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            A desktop teleprompter application that stays invisible during screen sharing in video calls. Perfect for presentations, online education, and content creation.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-[#4297d7] hover:bg-[#1e40af] text-white transform hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-[#4297d7]/25 group text-lg px-8 py-6"
              asChild
            >
              <a href="/Modern Teleprompter Setup 2.0.0.exe" download>
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download for Windows
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#4297d7] text-[#4297d7] hover:bg-[#4297d7] hover:text-white bg-transparent transform hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-[#4297d7]/25 group text-lg px-8 py-6"
              asChild
            >
              <a href="https://github.com/diegoperea20/modern-teleprompter-pro" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
                View on GitHub
              </a>
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4297d7] rounded-full animate-pulse"></div>
              <span>Windows 10/11</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4297d7] rounded-full animate-pulse"></div>
              <span>macOS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4297d7] rounded-full animate-pulse"></div>
              <span>Linux</span>
            </div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#4297d7] animate-pulse" />
        </div>
      </section>

          {/* App Screenshots */}
      <section className="py-16 px-6 bg-[#2f2f2f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-[#1c1c1c] border-[#9b9b9b]/20">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/gostart.png"
                    alt="Teleprompter Pro Main Interface"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gradient-to-br from-[#1c1c1c] to-[#2f2f2f]">
                  <h3 className="font-semibold mb-2 text-transparent bg-gradient-to-r from-[#ffffff] to-[#4297d7] bg-clip-text">
                    Clean Interface
                  </h3>
                  <p className="text-sm text-[#9b9b9b]">Simple, distraction-free writing environment</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 delay-100 bg-[#1c1c1c] border-[#9b9b9b]/20">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/home.png"
                    alt="Settings Panel"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gradient-to-br from-[#1c1c1c] to-[#2f2f2f]">
                  <h3 className="font-semibold mb-2 text-transparent bg-gradient-to-r from-[#ffffff] to-[#4297d7] bg-clip-text">
                    Customizable Settings
                  </h3>
                  <p className="text-sm text-[#9b9b9b]">Adjust colors, fonts, and display preferences</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 delay-200 bg-[#1c1c1c] border-[#9b9b9b]/20">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img
                    src="/transparency.png"
                    alt="Transparency Feature"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gradient-to-br from-[#1c1c1c] to-[#2f2f2f]">
                  <h3 className="font-semibold mb-2 text-transparent bg-gradient-to-r from-[#ffffff] to-[#4297d7] bg-clip-text">
                    Transparency Control
                  </h3>
                  <p className="text-sm text-[#9b9b9b]">Adjust window opacity for perfect visibility</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Compatibility Section */}
      <section className="py-16 px-6 bg-[#141414] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-[#4297d7] to-white bg-clip-text text-transparent">
              🎯 Compatible Video Call Software
            </h2>
            <p className="text-gray-400 text-lg">Works perfectly with all major video conferencing platforms</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Zoom", compatibility: "Best", status: "✅" },
              { name: "Teams", compatibility: "Excellent", status: "✅" },
              { name: "Meet", compatibility: "Very Good", status: "✅" },
              { name: "Discord", compatibility: "Good", status: "✅" },
              { name: "Skype", compatibility: "Good", status: "✅" },
              { name: "OBS Studio", compatibility: "Windows Only", status: "⚠️" }
            ].map((platform, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-[#4297d7]/20 group hover:border-[#4297d7] transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{platform.status}</div>
                  <h3 className="text-white font-semibold mb-1">{platform.name}</h3>
                  <p className="text-gray-400 text-xs">{platform.compatibility}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-[#4297d7] to-white bg-clip-text text-transparent">
              Powerful Features for Professionals
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need for seamless presentations and content creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: EyeOff,
                title: " Invisible Mode",
                desc: "Completely invisible during screen sharing in Zoom, Teams, Meet, and more",
                shortcut: "Ctrl+I",
                delay: "0ms",
              },
              {
                icon: Monitor,
                title: "Always On Top",
                desc: "Stay visible over all applications with customizable transparency",
                shortcut: "Ctrl+T",
                delay: "100ms",
              },
              {
                icon: Play,
                title: "Presentation Mode",
                desc: "One-click activation of invisible mode, always on top, and full screen",
                shortcut: "Ctrl+P",
                delay: "200ms",
              },
              {
                icon: Keyboard,
                title: "Keyboard Shortcuts",
                desc: "Control everything with hotkeys for seamless operation",
                shortcut: "F11",
                delay: "300ms",
              },
              {
                icon: Settings,
                title: "Customizable",
                desc: "Adjust text size, colors, alignment, and display preferences",
                shortcut: "Settings",
                delay: "400ms",
              },
              {
                icon: Zap,
                title: "Lightweight",
                desc: "Built with Electron for cross-platform compatibility and performance",
                shortcut: "Fast",
                delay: "500ms",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#141414] border-2 hover:border-[#4297d7]/50 bg-[#141414] border-[#4297d7]/20"
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4297d7]/20 to-[#1e40af]/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 group-hover:rotate-12 group-hover:shadow-lg">
                    <feature.icon className="h-8 w-8 text-[#4297d7] group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4297d7] group-hover:to-[#1e40af] group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>
                  <Badge variant="secondary" className="bg-[#4297d7]/10 text-[#4297d7] border-[#4297d7]/20 text-xs">
                    {feature.shortcut}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-[#141414] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-[#4297d7] to-white bg-clip-text text-transparent">
              Perfect for Every Professional
            </h2>
            <p className="text-xl text-gray-400">
              Trusted by content creators, educators, and business professionals worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                emoji: "📹",
                title: "Content Creators",
                desc: "Perfect for YouTube videos, courses, and social media content. Record professional videos without visible teleprompters.",
                features: ["Streaming", "Tutorials", "Video Podcasts"]
              },
              {
                icon: GraduationCap,
                emoji: "👨‍🏫",
                title: "Online Education",
                desc: "Deliver smooth online lectures and presentations while maintaining eye contact with your audience.",
                features: ["Virtual Classes", "Webinars", "Conferences"]
              },
              {
                icon: Users,
                emoji: "💼",
                title: "Business Professionals",
                desc: "Ace your presentations, client calls, and executive meetings with confidence and professionalism.",
                features: ["Sales Presentations", "Executive Meetings", "Live Demos"]
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="p-6 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#141414] border-2 hover:border-[#4297d7]/50 bg-[#1a1a1a] border-[#4297d7]/20"
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-125 transition-all duration-300 group-hover:animate-bounce">
                      {useCase.emoji}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4297d7] group-hover:to-[#1e40af] group-hover:bg-clip-text transition-all duration-300 text-center">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center">
                    {useCase.desc}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="bg-[#4297d7]/10 text-[#4297d7] border-[#4297d7]/20 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="bg-[#1a1a1a] text-white py-20 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-10 left-10 w-32 h-32 bg-[#4297d7] rounded-full animate-ping"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-[#1e40af] rounded-full animate-ping"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-[#4297d7] to-white bg-clip-text text-transparent">
            Download Teleprompter Pro
          </h2>
          <p className="text-xl mb-12 text-gray-400 animate-pulse">
            Available for Windows, macOS, and Linux. Choose your platform below.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                platform: "Windows", 
                desc: "Windows 10/11 compatible", 
                file: ".exe",
                recommended: true,
                downloadUrl: "/Modern Teleprompter Setup 2.0.0.exe",
                delay: "0ms" 
              },
              { 
                platform: "macOS", 
                desc: "macOS 10.15+ compatible", 
                file: ".dmg",
                recommended: false,
                downloadUrl: "https://github.com/diegoperea20/modern-teleprompter-pro",
                delay: "200ms" 
              },
              { 
                platform: "Linux", 
                desc: "Ubuntu, Debian, Fedora", 
                file: ".AppImage",
                recommended: false,
                downloadUrl: "https://github.com/diegoperea20/modern-teleprompter-pro",
                delay: "400ms" 
              },
            ].map((platform, index) => (
              <Card
                key={index}
                className={`bg-[#141414] text-white group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#141414] border-2 ${platform.recommended ? 'border-[#4297d7] shadow-[#4297d7]/25 shadow-lg' : 'border-[#4297d7]/20'}`}
                style={{ animationDelay: platform.delay }}
              >
                <CardContent className="p-8 text-center relative">
                  {platform.recommended && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#4297d7] text-white">
                      Recommended
                    </Badge>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4297d7]/20 to-[#1e40af]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-all duration-300 group-hover:rotate-12 group-hover:shadow-xl">
                    <Monitor className="h-8 w-8 text-[#4297d7] group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#4297d7] group-hover:to-[#1e40af] group-hover:bg-clip-text transition-all duration-300">
                    {platform.platform}
                  </h3>
                  <p className="text-gray-400 mb-6">{platform.desc}</p>
                  <Button
                    className={`w-full ${
                      platform.platform === 'Windows' 
                        ? 'bg-[#4297d7] hover:bg-[#1e40af] text-white' 
                        : 'bg-[#333] hover:bg-[#444] text-white border border-[#555]'
                    } group-hover:scale-105 duration-300 hover:shadow-xl hover:shadow-[#4297d7]/25`}
                    asChild
                  >
                    <a 
                      href={platform.downloadUrl}
                      {...(platform.platform === 'Windows' ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {platform.platform === 'Windows' ? (
                        <>
                          <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                          Download {platform.file}
                        </>
                      ) : (
                        <>
                          <Github className="h-4 w-4 mr-2 group-hover:animate-spin" />
                          View on GitHub
                        </>
                      )}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#141414]/50 rounded-lg backdrop-blur-sm border border-[#4297d7]/20 hover:bg-[#141414]/70 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-transparent bg-gradient-to-r from-[#4297d7] to-[#1e40af] bg-clip-text">
              System Requirements
            </h3>
            <p className="text-sm text-gray-400">
              • Windows 10/11, macOS 10.15+, or Linux (64-bit) • 4GB RAM minimum • 100MB free disk space • Node.js (for development)
            </p>
          </div>

        
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="bg-[#141414] text-white py-12 px-6 relative border-t border-[#4297d7]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#4297d7] to-[#1e40af] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <img
                  src="/icon.png"
                  alt="Modern Teleprompter Pro Icon"
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-[#4297d7] to-[#1e40af] bg-clip-text text-transparent">
                  Modern Teleprompter Pro
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Modern desktop teleprompter with invisible mode for professional presentations and content creation.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: [
                  { text: "Features", href: "#features", external: false },
                  { text: "Download", href: "#download", external: false },
                  { text: "Quick Start", href: "#features", external: false }
                ]
              },
              {
                title: "Support",
                links: [
                  { text: "Documentation", href: "https://github.com/diegoperea20/modern-teleprompter-pro", external: true },
                  { text: "GitHub Issues", href: "https://github.com/diegoperea20/modern-teleprompter-pro", external: true }
                  
                ]
              },
              {
                title: "Developer",
                links: [
                  { text: "GitHub Repository", href: "https://modern-teleprompter-pro.vercel.app", external: true },
                  { text: "Diego Ivan Perea Montealegre", href: "https://github.com/diegoperea20", external: true }
                ]
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-transparent bg-gradient-to-r from-[#4297d7] to-[#1e40af] bg-clip-text">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external === true ? '_blank' : '_self'}
                        rel={link.external === true ? 'noopener noreferrer' : ''}
                        className="hover:text-[#4297d7] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 relative group text-gray-400"
                      >
                        {link.text}
                        {link.external === true && <ExternalLink className="w-3 h-3" />}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#4297d7] transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#4297d7]/20 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 {" "}. 
              <a
                href="https://github.com/diegoperea20/modern-teleprompter-pro"
                className="text-[#4297d7] hover:underline transition-all duration-300 hover:text-[#1e40af]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Modern Teleprompter Pro
              </a>
              . Created by{" "}
              <a
                href="https://github.com/diegoperea20"
                className="text-[#4297d7] hover:underline transition-all duration-300 hover:text-[#1e40af]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diego Ivan Perea Montealegre
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}