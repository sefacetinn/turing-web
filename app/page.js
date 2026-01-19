'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Menu, X, ChevronRight, ChevronDown, ChevronLeft, Plus, Minus,
  Music, Truck, Building2, MapPin, Users, Wrench,
  ArrowRight, ArrowLeftRight, Star, Quote,
  Apple, Play, Mail, Phone, Instagram, Twitter, Linkedin,
  Search, Calendar, Send, User, Building, Briefcase,
  Rocket, Check, PlayCircle, PauseCircle, FileCheck,
  BarChart3, Shield, Zap, Globe, Headphones, Clock,
  Target, TrendingUp, Award, Sparkles, Smartphone,
  Home as HomeIcon, Grid, MessageCircle, CreditCard, Bell, Layers
} from 'lucide-react'

// ============================================
// HEMEN BAŞLA MODAL
// ============================================
function HemenBaslaModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState(null)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', city: '', category: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const cities = ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Adana', 'Gaziantep', 'Konya', 'Mersin', 'Diyarbakır', 'Diğer']

  const categories = [
    { id: 'booking', name: 'Booking & Sanatçı', icon: Music },
    { id: 'technical', name: 'Teknik Ekipman', icon: Wrench },
    { id: 'venue', name: 'Mekan', icon: Building2 },
    { id: 'accommodation', name: 'Konaklama', icon: MapPin },
    { id: 'transport', name: 'Ulaşım', icon: Truck },
    { id: 'operations', name: 'Operasyon', icon: Users },
  ]

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  const resetModal = () => {
    setStep(1)
    setUserType(null)
    setFormData({ name: '', email: '', phone: '', company: '', city: '', category: '' })
    setIsSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={resetModal} />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button onClick={resetModal} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-all z-10">
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Başvurunuz Alındı!</h3>
            <p className="text-gray-600 mb-6">En kısa sürede sizinle iletişime geçeceğiz.</p>
            <button onClick={resetModal} className="px-8 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Tamam
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-2 rounded-full transition-all duration-500 ${s === step ? 'w-12 bg-blue-600' : s < step ? 'w-8 bg-blue-300' : 'w-8 bg-gray-200'}`} />
              ))}
            </div>

            {step === 1 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Turing'e Hoş Geldiniz</h3>
                  <p className="text-gray-600">Hangi rolde katılmak istiyorsunuz?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <button onClick={() => { setUserType('organizer'); setStep(2) }} className="group p-6 rounded-xl text-left border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                      <Calendar className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Organizatörüm</h4>
                    <p className="text-gray-500 text-sm">Etkinlik düzenliyorum, hizmet sağlayıcı arıyorum</p>
                  </button>

                  <button onClick={() => { setUserType('provider'); setStep(2) }} className="group p-6 rounded-xl text-left border-2 border-gray-200 hover:border-emerald-500 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                      <Briefcase className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Hizmet Sağlayıcıyım</h4>
                    <p className="text-gray-500 text-sm">Etkinliklere hizmet sunuyorum</p>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">İletişim Bilgileri</h3>
                  <p className="text-gray-600">Size ulaşabilmemiz için bilgilerinizi girin</p>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Adınız Soyadınız" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Şirket</label>
                      <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Şirket Adı" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="ornek@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="0555 555 55 55" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Şehir</label>
                    <select value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                      <option value="">Şehir Seçin</option>
                      {cities.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button onClick={() => setStep(1)} className="px-6 py-3 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">Geri</button>
                  <button onClick={() => setStep(3)} disabled={!formData.name || !formData.email} className="flex-1 px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Devam</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {userType === 'provider' ? 'Hizmet Kategorisi' : 'İlgilendiğiniz Hizmetler'}
                  </h3>
                  <p className="text-gray-600">Bir kategori seçin</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((cat) => (
                    <button key={cat.id} onClick={() => setFormData({...formData, category: cat.id})} className={`p-4 rounded-xl border-2 transition-all ${formData.category === cat.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <cat.icon className={`w-8 h-8 mx-auto mb-2 ${formData.category === cat.id ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className={`text-sm font-medium ${formData.category === cat.id ? 'text-blue-600' : 'text-gray-600'}`}>{cat.name}</span>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 mt-8">
                  <button onClick={() => setStep(2)} className="px-6 py-3 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">Geri</button>
                  <button onClick={handleSubmit} disabled={!formData.category || isSubmitting} className="flex-1 px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2">
                    {isSubmitting ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Gönderiliyor...</> : 'Başvuruyu Tamamla'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================
// NASIL ÇALIŞIR MODAL
// ============================================
function NasilCalisirModal({ isOpen, onClose }) {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef(null)

  const steps = [
    { title: 'Keşfet', desc: 'İhtiyacınıza uygun hizmetleri arayın', icon: Search, color: '#3B82F6' },
    { title: 'Karşılaştır', desc: 'Teklifleri inceleyin ve karşılaştırın', icon: BarChart3, color: '#10B981' },
    { title: 'Anlaş', desc: 'En uygun teklifi seçin ve anlaşın', icon: FileCheck, color: '#EC4899' },
    { title: 'Yönet', desc: 'Tüm süreçleri tek yerden takip edin', icon: Target, color: '#F59E0B' },
  ]

  useEffect(() => {
    if (isOpen && isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isOpen, isPlaying])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-all z-10">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Turing Nasıl Çalışır?</h3>
            <p className="text-gray-600">4 adımda etkinliğinizi planlayın</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              {steps.map((step, i) => (
                <button key={i} onClick={() => { setActiveStep(i); setIsPlaying(false) }} className={`w-full p-4 rounded-xl text-left transition-all ${activeStep === i ? 'bg-gray-100 shadow-sm' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: activeStep === i ? step.color : '#F3F4F6' }}>
                      <step.icon className="w-6 h-6" style={{ color: activeStep === i ? 'white' : '#9CA3AF' }} />
                    </div>
                    <div>
                      <h4 className={`font-bold ${activeStep === i ? 'text-gray-900' : 'text-gray-500'}`}>{step.title}</h4>
                      <p className={`text-sm ${activeStep === i ? 'text-gray-600' : 'text-gray-400'}`}>{step.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-[500px] rounded-[2.5rem] bg-gray-900 p-2 shadow-2xl">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gray-800">
                  <div className="absolute top-0 left-0 right-0 flex justify-center pt-2 z-10">
                    <div className="w-24 h-6 bg-black rounded-full" />
                  </div>
                  <div className="p-5 pt-12 h-full">
                    <div className="flex items-center gap-2 mb-5">
                      <Image src="/turing-icon.png" alt="Turing" width={28} height={28} />
                      <span className="text-white font-semibold text-sm">Turing</span>
                    </div>
                    <div className="space-y-3">
                      {activeStep === 0 && (
                        <div className="animate-fade-in">
                          <div className="bg-white/10 rounded-xl p-3 mb-3 flex items-center gap-2">
                            <Search className="w-4 h-4 text-white/50" />
                            <span className="text-white/50 text-sm">Hizmet ara...</span>
                          </div>
                          {['Ses Sistemi', 'DJ', 'Işık'].map((item, i) => (
                            <div key={i} className="p-3 rounded-xl bg-white/5 flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-blue-500" />
                              <span className="text-white/80 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {activeStep === 1 && (
                        <div className="animate-fade-in">
                          <div className="text-white font-semibold text-sm mb-3">Teklifler (8)</div>
                          {[{ name: 'Pro Sound', price: '₺15,000' }, { name: 'Elite Audio', price: '₺18,500' }].map((offer, i) => (
                            <div key={i} className="p-3 rounded-xl bg-white/5 mb-2">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-white text-sm font-medium">{offer.name}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                  <span className="text-white/70 text-xs">4.9</span>
                                </div>
                              </div>
                              <span className="text-emerald-400 font-bold text-sm">{offer.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {activeStep === 2 && (
                        <div className="animate-fade-in">
                          <div className="text-white font-semibold text-sm mb-3">Sözleşme</div>
                          <div className="p-3 rounded-xl bg-white/5 mb-3">
                            <div className="flex items-center gap-2 mb-3">
                              <FileCheck className="w-6 h-6 text-pink-400" />
                              <div>
                                <div className="text-white text-sm font-medium">Pro Sound</div>
                                <div className="text-white/50 text-xs">Ses Sistemi</div>
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-white/50">Toplam</span>
                              <span className="text-white">₺15,000</span>
                            </div>
                          </div>
                          <button className="w-full py-2.5 rounded-xl text-white font-semibold text-sm bg-pink-500">Onayla</button>
                        </div>
                      )}
                      {activeStep === 3 && (
                        <div className="animate-fade-in">
                          <div className="text-white font-semibold text-sm mb-3">Etkinliklerim</div>
                          <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/30 mb-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-white text-sm font-medium">Festival 2026</span>
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs">Aktif</span>
                            </div>
                            <div className="text-white/50 text-xs">15 Tem • İstanbul</div>
                          </div>
                          {[{ task: 'Ses kurulumu', done: true }, { task: 'Işık kontrolü', done: false }].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 mb-1">
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${item.done ? 'bg-emerald-500' : 'bg-amber-500'}`}>
                                {item.done && <Check className="w-2.5 h-2.5 text-white" />}
                              </div>
                              <span className="text-white/70 text-xs">{item.task}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button onClick={onClose} className="px-8 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Hemen Başla
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// ERKEN ERİŞİM MODAL
// ============================================
function EarlyAccessModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [platform, setPlatform] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !name || !platform) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  const resetModal = () => {
    setEmail('')
    setName('')
    setPlatform('')
    setIsSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={resetModal} />
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
        <button onClick={resetModal} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-all z-10">
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Kayıt Başarılı!</h3>
            <p className="text-gray-600 mb-6">Uygulama yayınlandığında sizi bilgilendireceğiz.</p>
            <button onClick={resetModal} className="px-8 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Tamam
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Erken Erişim</h3>
              <p className="text-gray-600 text-sm">Turing uygulamasına ilk erişenlerden olun!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adınız</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Adınızı girin" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ornek@email.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" onClick={() => setPlatform('ios')} className={`flex items-center justify-center gap-2 py-3 rounded-lg border-2 transition-all ${platform === 'ios' ? 'bg-blue-50 border-blue-500 text-blue-600' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                    <Apple className="w-5 h-5" />
                    <span className="text-sm font-medium">iOS</span>
                  </button>
                  <button type="button" onClick={() => setPlatform('android')} className={`flex items-center justify-center gap-2 py-3 rounded-lg border-2 transition-all ${platform === 'android' ? 'bg-blue-50 border-blue-500 text-blue-600' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                    <Play className="w-5 h-5" />
                    <span className="text-sm font-medium">Android</span>
                  </button>
                </div>
              </div>
              <button type="submit" disabled={isSubmitting || !email || !name || !platform} className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2">
                {isSubmitting ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Kaydediliyor...</> : <><Send className="w-5 h-5" />Erken Erişim İste</>}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================
// NAVBAR
// ============================================
function Navbar({ onHemenBasla, onNasilCalisir, onEarlyAccess }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solutions = [
    { name: 'Booking & Sanatçı', desc: 'Sanatçı ve performans rezervasyonu', icon: Music, href: '#cozumler' },
    { name: 'Teknik Ekipman', desc: 'Ses, ışık ve sahne sistemleri', icon: Wrench, href: '#cozumler' },
    { name: 'Mekan', desc: 'Etkinlik mekanları ve alanlar', icon: Building2, href: '#cozumler' },
    { name: 'Konaklama', desc: 'Otel ve konaklama çözümleri', icon: MapPin, href: '#cozumler' },
    { name: 'Ulaşım', desc: 'Transfer ve lojistik hizmetleri', icon: Truck, href: '#cozumler' },
    { name: 'Operasyon', desc: 'Personel ve güvenlik yönetimi', icon: Users, href: '#cozumler' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-[#121212]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image src="/turing-icon.png" alt="Turing" width={32} height={32} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>turing</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Solutions Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`}>
                Çözümler
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-80 pt-2">
                  <div className="p-2 bg-white rounded-xl shadow-xl border border-gray-100 animate-fade-in">
                    {solutions.map((item) => (
                      <a key={item.name} href={item.href} onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button onClick={onNasilCalisir} className={`px-4 py-2 rounded-lg font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`}>
              Nasıl Çalışır
            </button>
            <a href="#musteriler" className={`px-4 py-2 rounded-lg font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`}>
              Müşteriler
            </a>
            <a href="#sss" className={`px-4 py-2 rounded-lg font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`}>
              SSS
            </a>
            <a href="#iletisim" className={`px-4 py-2 rounded-lg font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`}>
              İletişim
            </a>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={onEarlyAccess} className={`px-4 py-2 rounded-lg font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`}>
              Erken Erişim
            </button>
            <button onClick={onHemenBasla} className="px-5 py-2.5 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Bizimle Çalışın
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg">
            {isMobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="p-4 space-y-2">
            <a href="#cozumler" className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">Çözümler</a>
            <button onClick={() => { onNasilCalisir(); setIsMobileMenuOpen(false) }} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">Nasıl Çalışır</button>
            <a href="#musteriler" className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">Müşteriler</a>
            <a href="#sss" className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">SSS</a>
            <a href="#iletisim" className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">İletişim</a>
            <hr className="my-2" />
            <button onClick={() => { onEarlyAccess(); setIsMobileMenuOpen(false) }} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium">Erken Erişim</button>
            <button onClick={() => { onHemenBasla(); setIsMobileMenuOpen(false) }} className="block w-full px-4 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-semibold text-center">Bizimle Çalışın</button>
          </div>
        </div>
      )}
    </nav>
  )
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection({ onHemenBasla, onNasilCalisir }) {
  return (
    <section className="relative min-h-screen flex items-center bg-[#121212] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm font-medium">Türkiye'nin Etkinlik Platformu</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Canlı etkinliklerin geleceğini
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                birlikte şekillendirelim
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
              Global çözümlerimiz ve yerel ekibimiz ile etkinliklerinizin potansiyelini maksimize edin.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button onClick={onHemenBasla} className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-600/25">
                Bizimle Çalışın
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={onNasilCalisir} className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:scale-105 transition-all">
                Çözümleri Keşfet
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-12 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                <div className="text-white/50 mt-1 text-sm">Hizmet Sağlayıcı</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">1,200+</div>
                <div className="text-white/50 mt-1 text-sm">Başarılı Etkinlik</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">81</div>
                <div className="text-white/50 mt-1 text-sm">İl Kapsamı</div>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockups */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Main Phone */}
            <div className="relative z-20">
              <div className="relative w-[280px] h-[580px] rounded-[3rem] bg-gradient-to-b from-gray-800 to-gray-900 p-2 shadow-2xl shadow-black/50">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#1a1a2e] relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-0 right-0 flex justify-center pt-2 z-10">
                    <div className="w-28 h-7 bg-black rounded-full" />
                  </div>
                  {/* Screen Content */}
                  <Image src="/app-screenshot-1.png" alt="Turing App" fill className="object-cover" />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[3.5rem] blur-2xl -z-10" />
            </div>

            {/* Secondary Phone - Left */}
            <div className="absolute -left-16 top-20 z-10 transform -rotate-12">
              <div className="relative w-[200px] h-[420px] rounded-[2rem] bg-gradient-to-b from-gray-800 to-gray-900 p-1.5 shadow-xl opacity-80">
                <div className="w-full h-full rounded-[1.75rem] overflow-hidden bg-[#1a1a2e] relative">
                  <Image src="/app-screenshot-2.png" alt="Turing App" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Secondary Phone - Right */}
            <div className="absolute -right-12 top-32 z-10 transform rotate-12">
              <div className="relative w-[200px] h-[420px] rounded-[2rem] bg-gradient-to-b from-gray-800 to-gray-900 p-1.5 shadow-xl opacity-80">
                <div className="w-full h-full rounded-[1.75rem] overflow-hidden bg-[#1a1a2e] relative">
                  <Image src="/app-screenshot-3.png" alt="Turing App" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 right-0 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white text-sm font-medium">500+ Online</span>
            </div>

            <div className="absolute bottom-10 -left-8 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white text-sm font-medium">4.9 Puan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// APP GALLERY SECTION - Horizontal Scroll
// ============================================
function AppGallerySection() {
  const galleryScreens = [
    {
      id: 1,
      title: 'Ana Sayfa',
      desc: 'Popüler etkinlikler ve öneriler',
      gradient: 'from-blue-600 to-purple-600',
      icon: HomeIcon,
      mockup: {
        header: 'Keşfet',
        cards: ['Festival 2026', 'Düğün Paketi', 'Kurumsal Etkinlik']
      }
    },
    {
      id: 2,
      title: 'Kategori Seçimi',
      desc: 'Tüm hizmet kategorileri',
      gradient: 'from-purple-600 to-pink-600',
      icon: Grid,
      mockup: {
        header: 'Kategoriler',
        cards: ['DJ & Müzik', 'Mekan', 'Catering', 'Fotoğraf', 'Dekorasyon', 'Işık & Ses']
      }
    },
    {
      id: 3,
      title: 'Hizmet Detayı',
      desc: 'Tedarikçi profil sayfası',
      gradient: 'from-pink-600 to-red-600',
      icon: User,
      mockup: {
        header: 'DJ Emre',
        rating: 4.9,
        price: '₺8,000'
      }
    },
    {
      id: 4,
      title: 'Teklif Karşılaştırma',
      desc: 'Yan yana teklif analizi',
      gradient: 'from-emerald-600 to-teal-600',
      icon: ArrowLeftRight,
      mockup: {
        header: 'Teklifleri Karşılaştır',
        items: ['Fiyat', 'Süre', 'Ekipman', 'Referans']
      }
    },
    {
      id: 5,
      title: 'Takvim',
      desc: 'Etkinlik planlayıcı',
      gradient: 'from-orange-600 to-amber-600',
      icon: Calendar,
      mockup: {
        header: 'Takvim',
        month: 'Ocak 2026'
      }
    },
    {
      id: 6,
      title: 'Mesajlar',
      desc: 'Anlık iletişim',
      gradient: 'from-cyan-600 to-blue-600',
      icon: MessageCircle,
      mockup: {
        header: 'Mesajlar',
        chats: ['Pro Sound', 'DJ Emre', 'Lezzet Catering']
      }
    },
    {
      id: 7,
      title: 'Ödeme',
      desc: 'Güvenli ödeme sistemi',
      gradient: 'from-green-600 to-emerald-600',
      icon: CreditCard,
      mockup: {
        header: 'Ödeme',
        amount: '₺45,000'
      }
    },
    {
      id: 8,
      title: 'Bildirimler',
      desc: 'Anlık güncellemeler',
      gradient: 'from-violet-600 to-purple-600',
      icon: Bell,
      mockup: {
        header: 'Bildirimler',
        count: 5
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f0318] to-[#1a0a2e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Uygulama Ekranları</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tüm Özellikler Tek Uygulamada
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Etkinlik planlamasının her adımı için tasarlanmış kapsamlı bir mobil deneyim.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0f0318] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0f0318] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 overflow-x-auto pb-8 px-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {galleryScreens.map((screen) => (
            <div key={screen.id} className="flex-shrink-0 group">
              {/* Phone Mockup */}
              <div className="relative w-[220px] h-[440px] rounded-[2.5rem] bg-gradient-to-b from-gray-700 to-gray-900 p-1.5 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#0a0a0a] relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-0 left-0 right-0 flex justify-center pt-2 z-20">
                    <div className="w-20 h-6 bg-black rounded-full" />
                  </div>

                  {/* Screen Content - Mockup UI */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${screen.gradient} opacity-20`} />
                  <div className="absolute inset-0 p-4 pt-12">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white font-semibold text-sm">{screen.mockup.header}</div>
                      <screen.icon className="w-4 h-4 text-white/60" />
                    </div>

                    {/* Dynamic Content based on screen type */}
                    {screen.mockup.cards && (
                      <div className="space-y-2">
                        {screen.mockup.cards.slice(0, 4).map((card, i) => (
                          <div key={i} className={`p-3 rounded-xl bg-white/10 backdrop-blur border border-white/10`}>
                            <div className="text-white/80 text-xs">{card}</div>
                          </div>
                        ))}
                        {screen.mockup.cards.length > 4 && (
                          <div className="text-center text-white/40 text-xs">+{screen.mockup.cards.length - 4} daha</div>
                        )}
                      </div>
                    )}

                    {screen.mockup.rating && (
                      <div className="space-y-3">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${screen.gradient} mx-auto flex items-center justify-center`}>
                          <User className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-white text-xs">{screen.mockup.rating}</span>
                          </div>
                          <div className="text-white/60 text-xs">{screen.mockup.price}</div>
                        </div>
                        <button className={`w-full py-2 rounded-lg bg-gradient-to-r ${screen.gradient} text-white text-xs font-medium`}>
                          Teklif Al
                        </button>
                      </div>
                    )}

                    {screen.mockup.items && (
                      <div className="space-y-2">
                        {screen.mockup.items.map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                            <span className="text-white/70 text-xs">{item}</span>
                            <div className="flex gap-2">
                              <div className="w-8 h-4 rounded bg-white/20" />
                              <div className="w-8 h-4 rounded bg-white/20" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {screen.mockup.month && (
                      <div className="space-y-3">
                        <div className="text-center text-white/60 text-xs">{screen.mockup.month}</div>
                        <div className="grid grid-cols-7 gap-1">
                          {[...Array(31)].map((_, i) => (
                            <div key={i} className={`w-5 h-5 rounded text-[8px] flex items-center justify-center ${
                              [5, 12, 18, 25].includes(i) ? `bg-gradient-to-r ${screen.gradient} text-white` : 'text-white/40'
                            }`}>
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {screen.mockup.chats && (
                      <div className="space-y-2">
                        {screen.mockup.chats.map((chat, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/5">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${screen.gradient} flex items-center justify-center`}>
                              <span className="text-white text-xs font-bold">{chat[0]}</span>
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-xs font-medium">{chat}</div>
                              <div className="text-white/40 text-[10px]">Son mesaj...</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {screen.mockup.amount && (
                      <div className="space-y-4 text-center pt-4">
                        <div className="text-white/60 text-xs">Toplam Tutar</div>
                        <div className="text-white text-2xl font-bold">{screen.mockup.amount}</div>
                        <div className="space-y-2">
                          <div className="p-3 rounded-xl bg-white/5 flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-white/60" />
                            <span className="text-white/70 text-xs">**** 4242</span>
                          </div>
                          <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${screen.gradient} text-white text-sm font-medium`}>
                            Ödemeyi Tamamla
                          </button>
                        </div>
                      </div>
                    )}

                    {screen.mockup.count && (
                      <div className="space-y-2">
                        {[...Array(screen.mockup.count)].map((_, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/5">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${screen.gradient} flex items-center justify-center`}>
                              <Bell className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-xs">Yeni bildirim</div>
                              <div className="text-white/40 text-[10px]">2 dk önce</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
                </div>
              </div>

              {/* Label */}
              <div className="mt-4 text-center">
                <div className="text-white font-medium text-sm">{screen.title}</div>
                <div className="text-white/50 text-xs">{screen.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="text-center mt-4">
        <div className="inline-flex items-center gap-2 text-white/40 text-sm">
          <ChevronLeft className="w-4 h-4" />
          <span>Kaydırarak keşfet</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </section>
  )
}

// ============================================
// APP SHOWCASE SECTION
// ============================================
function AppShowcaseSection({ onEarlyAccess }) {
  const [activeScreen, setActiveScreen] = useState(0)

  const screens = [
    {
      id: 1,
      title: 'Hizmet Keşfet',
      desc: 'Yüzlerce hizmet sağlayıcı arasından ihtiyacınıza en uygun olanı bulun.',
      image: '/app-screenshot-1.png',
      features: ['Akıllı filtreleme', 'Konum bazlı arama', 'Puan sıralaması']
    },
    {
      id: 2,
      title: 'Teklif Al',
      desc: 'Birden fazla tedarikçiden teklif alın, karşılaştırın ve en iyisini seçin.',
      image: '/app-screenshot-2.png',
      features: ['Anlık teklif', 'Fiyat karşılaştırma', 'Pazarlık imkanı']
    },
    {
      id: 3,
      title: 'Yönet',
      desc: 'Tüm etkinlik süreçlerinizi tek bir yerden takip edin.',
      image: '/app-screenshot-3.png',
      features: ['Takvim entegrasyonu', 'Görev yönetimi', 'İlerleme takibi']
    },
    {
      id: 4,
      title: 'İletişim',
      desc: 'Tedarikçilerle anlık mesajlaşın ve detayları netleştirin.',
      image: '/app-screenshot-1.png',
      features: ['Anlık mesajlaşma', 'Dosya paylaşımı', 'Görüntülü görüşme']
    },
    {
      id: 5,
      title: 'Ödeme',
      desc: 'Güvenli emanet sistemi ile ödemelerinizi koruma altına alın.',
      image: '/app-screenshot-2.png',
      features: ['Emanet sistemi', 'Taksit seçenekleri', 'Fatura yönetimi']
    }
  ]

  const features = [
    { icon: Zap, title: 'Hızlı Eşleşme', desc: 'Saniyeler içinde uygun tedarikçileri bulun' },
    { icon: Shield, title: 'Güvenli Ödeme', desc: 'Emanet sistemi ile güvende ödeyin' },
    { icon: Headphones, title: '7/24 Destek', desc: 'Her zaman yanınızdayız' },
    { icon: Globe, title: '81 İl', desc: 'Türkiye genelinde hizmet' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-[#121212] to-[#1a1a2e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Smartphone className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Mobil Uygulama</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Her Şey Avucunuzun İçinde
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Turing mobil uygulaması ile etkinliklerinizi her yerden yönetin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Display */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-full blur-3xl" />
            </div>

            {/* Main Phone */}
            <div className="relative z-10">
              <div className="relative w-[300px] h-[620px] rounded-[3rem] bg-gradient-to-b from-gray-700 to-gray-900 p-2 shadow-2xl">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-black relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-0 left-0 right-0 flex justify-center pt-3 z-20">
                    <div className="w-32 h-8 bg-black rounded-full" />
                  </div>
                  {/* Screen */}
                  {screens.map((screen, i) => (
                    <div
                      key={screen.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${activeScreen === i ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <Image src={screen.image} alt={screen.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                {/* Side Buttons */}
                <div className="absolute right-[-2px] top-32 w-1 h-16 bg-gray-700 rounded-l" />
                <div className="absolute left-[-2px] top-24 w-1 h-8 bg-gray-700 rounded-r" />
                <div className="absolute left-[-2px] top-36 w-1 h-12 bg-gray-700 rounded-r" />
              </div>

              {/* Platform badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-full border border-white/20">
                  <Apple className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">iOS</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-full border border-white/20">
                  <Play className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">Android</span>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <div className="absolute top-20 -right-4 lg:right-0 p-3 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl z-20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Yeni Teklif</div>
                  <div className="text-white/60 text-xs">Pro Sound - ₺15,000</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-32 -left-4 lg:left-0 p-3 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl z-20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Etkinlik Onaylandı</div>
                  <div className="text-white/60 text-xs">Festival 2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Screen selector */}
            <div className="space-y-4 mb-10">
              {screens.map((screen, i) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(i)}
                  className={`w-full p-5 rounded-2xl text-left transition-all duration-300 ${
                    activeScreen === i
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${
                      activeScreen === i
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-white/10 text-white/50'
                    }`}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${activeScreen === i ? 'text-white' : 'text-white/70'}`}>
                        {screen.title}
                      </h3>
                      <p className={`text-sm ${activeScreen === i ? 'text-white/70' : 'text-white/40'}`}>
                        {screen.desc}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <feature.icon className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-white font-medium text-sm">{feature.title}</div>
                  <div className="text-white/50 text-xs">{feature.desc}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={onEarlyAccess}
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25"
            >
              <Rocket className="w-5 h-5" />
              Erken Erişim için Kayıt Ol
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SOLUTIONS SECTION
// ============================================
function SolutionsSection() {
  const solutions = [
    {
      id: 'booking',
      title: 'Booking & Sanatçı',
      desc: 'DJ\'ler, müzisyenler, performans sanatçıları ve daha fazlası. İhtiyacınıza uygun yetenekleri kolayca bulun.',
      icon: Music,
      color: '#3B82F6',
      stats: '200+ Sanatçı'
    },
    {
      id: 'teknik',
      title: 'Teknik Ekipman',
      desc: 'Profesyonel ses sistemleri, ışık düzenleri ve sahne ekipmanları. Etkinliğiniz için en iyi teknolojiyi kiralayın.',
      icon: Wrench,
      color: '#10B981',
      stats: '150+ Tedarikçi'
    },
    {
      id: 'mekan',
      title: 'Mekan',
      desc: 'Konser alanlarından butik mekanlara, her türlü etkinlik için ideal lokasyonlar.',
      icon: Building2,
      color: '#8B5CF6',
      stats: '300+ Mekan'
    },
    {
      id: 'konaklama',
      title: 'Konaklama',
      desc: 'VIP misafirleriniz ve ekibiniz için özel konaklama paketleri ve anlaşmalı oteller.',
      icon: MapPin,
      color: '#EC4899',
      stats: '100+ Otel'
    },
    {
      id: 'ulasim',
      title: 'Ulaşım',
      desc: 'Transfer hizmetleri, araç kiralama ve lojistik çözümler. Ekibinizi ve ekipmanlarınızı güvenle taşıyın.',
      icon: Truck,
      color: '#F59E0B',
      stats: '80+ Partner'
    },
    {
      id: 'operasyon',
      title: 'Operasyon',
      desc: 'Güvenlik, personel yönetimi ve etkinlik operasyonları için profesyonel destek.',
      icon: Users,
      color: '#EF4444',
      stats: '50+ Ajans'
    },
  ]

  return (
    <section id="cozumler" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Çözümlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Etkinlik sürecinizin her aşamasında yanınızdayız. İhtiyacınıza özel çözümlerimizi keşfedin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <a
              key={i}
              href={`#${solution.id}`}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Color accent */}
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: solution.color }} />

              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${solution.color}15` }}>
                  <solution.icon className="w-7 h-7" style={{ color: solution.color }} />
                </div>
                <span className="text-sm font-medium text-gray-500">{solution.stats}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {solution.desc}
              </p>

              <div className="flex items-center text-blue-600 font-medium">
                <span>Çözümü Keşfet</span>
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SOLUTION DETAILS SECTION
// ============================================
function SolutionDetailsSection({ onHemenBasla }) {
  const solutionDetails = [
    {
      id: 'booking',
      title: 'Booking & Sanatçı',
      subtitle: 'Etkinliğinize Hayat Verin',
      desc: 'Türkiye\'nin en geniş sanatçı ve performans ağına erişin. DJ\'lerden canlı müzik gruplarına, stand-up komedyenlerinden dans gruplarına kadar her türlü performans için doğru yetenekleri bulun.',
      icon: Music,
      color: '#3B82F6',
      bgColor: 'from-blue-600 to-indigo-700',
      features: [
        { title: 'Geniş Yetenek Havuzu', desc: '200+ profesyonel sanatçı' },
        { title: 'Doğrulanmış Profiller', desc: 'Referansları inceleyin' },
        { title: 'Esnek Bütçe', desc: 'Her bütçeye uygun' },
        { title: 'Kolay İletişim', desc: 'Direkt iletişim' },
      ],
      stats: [
        { value: '200+', label: 'Sanatçı' },
        { value: '500+', label: 'Performans' },
        { value: '4.9', label: 'Puan' },
      ],
      providers: [
        { name: 'DJ Emre', category: 'DJ / Elektronik', rating: 4.9, reviews: 127, price: '₺8,000', location: 'İstanbul', tags: ['Club', 'Festival', 'Düğün'] },
        { name: 'The Covers', category: 'Canlı Müzik', rating: 4.8, reviews: 89, price: '₺15,000', location: 'Ankara', tags: ['Pop', 'Rock', 'Jazz'] },
        { name: 'Cem Yılmaz Show', category: 'Stand-up', rating: 5.0, reviews: 234, price: '₺50,000', location: 'İstanbul', tags: ['Komedi', 'Kurumsal'] },
      ],
      categories: ['DJ', 'Canlı Müzik', 'Stand-up', 'Dans Grubu', 'Sihirbaz', 'MC']
    },
    {
      id: 'teknik',
      title: 'Teknik Ekipman',
      subtitle: 'Profesyonel Ses & Işık',
      desc: 'En son teknoloji ses sistemleri, etkileyici ışık düzenleri ve profesyonel sahne ekipmanları. Küçük etkinliklerden büyük festivallere kadar her ölçekte teknik altyapı desteği.',
      icon: Wrench,
      color: '#10B981',
      bgColor: 'from-emerald-600 to-teal-700',
      features: [
        { title: 'Son Teknoloji', desc: 'Güncel ekipmanlar' },
        { title: 'Teknik Ekip', desc: 'Deneyimli personel' },
        { title: 'Kurulum Dahil', desc: 'Montaj hizmeti' },
        { title: 'Test & Deneme', desc: 'Ses kontrolü' },
      ],
      stats: [
        { value: '150+', label: 'Tedarikçi' },
        { value: '1000+', label: 'Ekipman' },
        { value: '24/7', label: 'Destek' },
      ],
      providers: [
        { name: 'Pro Sound Systems', category: 'Ses Sistemi', rating: 4.9, reviews: 156, price: '₺12,000', location: 'İstanbul', tags: ['Line Array', 'Festival', 'Konser'] },
        { name: 'Işık Sanatı', category: 'Işık & Efekt', rating: 4.7, reviews: 98, price: '₺8,500', location: 'İzmir', tags: ['LED', 'Lazer', 'Moving Head'] },
        { name: 'Stage Masters', category: 'Sahne', rating: 4.8, reviews: 67, price: '₺25,000', location: 'Ankara', tags: ['Sahne', 'Truss', 'Backstage'] },
      ],
      categories: ['Ses Sistemi', 'Işık', 'Sahne', 'LED Ekran', 'Jeneratör', 'Efekt']
    },
    {
      id: 'mekan',
      title: 'Mekan',
      subtitle: 'Hayalinizdeki Lokasyon',
      desc: 'Konser alanlarından butik mekanlara, açık hava etkinlik alanlarından tarihi yapılara kadar her türlü etkinlik için mükemmel lokasyonu bulun.',
      icon: Building2,
      color: '#8B5CF6',
      bgColor: 'from-violet-600 to-purple-700',
      features: [
        { title: 'Çeşitli Seçenekler', desc: 'Her tür mekan' },
        { title: 'Sanal Tur', desc: 'Online gezinti' },
        { title: 'Paket Fiyatlar', desc: 'Catering dahil' },
        { title: 'Konum Avantajı', desc: '81 ilde mekan' },
      ],
      stats: [
        { value: '300+', label: 'Mekan' },
        { value: '81', label: 'İl' },
        { value: '50K+', label: 'Kapasite' },
      ],
      providers: [
        { name: 'Zorlu PSM', category: 'Konser Salonu', rating: 4.9, reviews: 312, price: '₺150,000', location: 'İstanbul', tags: ['5000 Kişi', 'Kapalı', 'Premium'] },
        { name: 'Life Park', category: 'Açık Alan', rating: 4.6, reviews: 89, price: '₺80,000', location: 'İstanbul', tags: ['10000 Kişi', 'Açık', 'Festival'] },
        { name: 'The Marmara', category: 'Otel & Teras', rating: 4.8, reviews: 145, price: '₺45,000', location: 'Antalya', tags: ['500 Kişi', 'Teras', 'Lüks'] },
      ],
      categories: ['Konser Salonu', 'Açık Alan', 'Otel', 'Tarihi Mekan', 'Teras', 'Stüdyo']
    },
    {
      id: 'konaklama',
      title: 'Konaklama',
      subtitle: 'Konfor & Kolaylık',
      desc: 'VIP misafirleriniz, sanatçılarınız ve ekibiniz için özel konaklama çözümleri. Anlaşmalı otellerle uygun fiyatlar ve özel ayrıcalıklar.',
      icon: MapPin,
      color: '#EC4899',
      bgColor: 'from-pink-600 to-rose-700',
      features: [
        { title: 'VIP Paketler', desc: 'Özel odalar' },
        { title: 'Grup İndirimi', desc: '%30\'a varan indirim' },
        { title: 'Merkezi Konum', desc: 'Yakın oteller' },
        { title: 'Ekstra Hizmet', desc: 'Transfer dahil' },
      ],
      stats: [
        { value: '100+', label: 'Otel' },
        { value: '%30', label: 'İndirim' },
        { value: '5★', label: 'Seçenekler' },
      ],
      providers: [
        { name: 'Hilton İstanbul', category: '5 Yıldız', rating: 4.9, reviews: 567, price: '₺3,500/gece', location: 'İstanbul', tags: ['Lüks', 'Merkezi', 'VIP'] },
        { name: 'Marriott Ankara', category: '5 Yıldız', rating: 4.8, reviews: 234, price: '₺2,800/gece', location: 'Ankara', tags: ['Business', 'Spa', 'Restoran'] },
        { name: 'Wyndham Grand', category: '5 Yıldız', rating: 4.7, reviews: 189, price: '₺2,500/gece', location: 'İzmir', tags: ['Deniz', 'Havuz', 'Toplantı'] },
      ],
      categories: ['5 Yıldız', '4 Yıldız', 'Butik', 'Apart', 'Villa', 'Hostel']
    },
    {
      id: 'ulasim',
      title: 'Ulaşım',
      subtitle: 'Güvenli & Zamanında',
      desc: 'Ekibinizi, ekipmanlarınızı ve misafirlerinizi güvenle taşıyın. VIP transfer, grup taşımacılığı ve lojistik çözümler tek platformda.',
      icon: Truck,
      color: '#F59E0B',
      bgColor: 'from-amber-500 to-orange-600',
      features: [
        { title: 'VIP Transfer', desc: 'Lüks araçlar' },
        { title: 'Grup Taşıma', desc: 'Otobüs kiralama' },
        { title: 'Ekipman Lojistik', desc: 'Güvenli taşıma' },
        { title: 'Şehirlerarası', desc: 'Türkiye geneli' },
      ],
      stats: [
        { value: '80+', label: 'Partner' },
        { value: '500+', label: 'Araç' },
        { value: '81', label: 'İl' },
      ],
      providers: [
        { name: 'VIP Transfer TR', category: 'VIP Araç', rating: 4.9, reviews: 234, price: '₺1,500', location: 'İstanbul', tags: ['Mercedes', 'Havalimanı', '7/24'] },
        { name: 'Tour Bus', category: 'Otobüs', rating: 4.7, reviews: 156, price: '₺8,000/gün', location: 'Türkiye', tags: ['50 Kişi', 'Klima', 'WiFi'] },
        { name: 'Cargo Express', category: 'Lojistik', rating: 4.8, reviews: 89, price: 'Teklif Al', location: 'Türkiye', tags: ['Ekipman', 'Sigortalı', 'Hızlı'] },
      ],
      categories: ['VIP Araç', 'Minibüs', 'Otobüs', 'Lojistik', 'Havalimanı', 'Şehirlerarası']
    },
    {
      id: 'operasyon',
      title: 'Operasyon',
      subtitle: 'Sorunsuz Etkinlik',
      desc: 'Etkinliğinizin kusursuz geçmesi için profesyonel operasyon desteği. Güvenlik, personel yönetimi ve sahne arkası koordinasyonu.',
      icon: Users,
      color: '#EF4444',
      bgColor: 'from-red-600 to-rose-700',
      features: [
        { title: 'Güvenlik', desc: 'Lisanslı personel' },
        { title: 'Hostes & Host', desc: 'Eğitimli ekip' },
        { title: 'Sahne Arkası', desc: 'Backstage yönetimi' },
        { title: 'Acil Durum', desc: 'Güvenlik planı' },
      ],
      stats: [
        { value: '50+', label: 'Ajans' },
        { value: '2000+', label: 'Personel' },
        { value: '100+', label: 'Etkinlik' },
      ],
      providers: [
        { name: 'Securitas Events', category: 'Güvenlik', rating: 4.9, reviews: 189, price: '₺500/kişi', location: 'Türkiye', tags: ['Lisanslı', 'Silahlı', '7/24'] },
        { name: 'Hostes Pro', category: 'Karşılama', rating: 4.8, reviews: 234, price: '₺400/kişi', location: 'İstanbul', tags: ['Yabancı Dil', 'Tecrübeli', 'Şık'] },
        { name: 'Stage Crew', category: 'Teknik Ekip', rating: 4.7, reviews: 67, price: '₺600/kişi', location: 'Türkiye', tags: ['Sahne', 'Rigger', 'Ses'] },
      ],
      categories: ['Güvenlik', 'Hostes', 'Garson', 'Teknik', 'Koordinatör', 'Sağlık']
    },
  ]

  return (
    <section className="bg-[#121212]">
      {solutionDetails.map((solution, index) => (
        <div
          key={solution.id}
          id={solution.id}
          className={`py-20 scroll-mt-16 ${index % 2 === 0 ? 'bg-[#121212]' : 'bg-[#0d0d1a]'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: `${solution.color}20`, border: `1px solid ${solution.color}40` }}>
                  <solution.icon className="w-4 h-4" style={{ color: solution.color }} />
                  <span className="text-sm font-medium" style={{ color: solution.color }}>{solution.title}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {solution.subtitle}
                </h2>
                <p className="text-white/60 max-w-2xl">
                  {solution.desc}
                </p>
              </div>
              <div className="flex gap-6">
                {solution.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold" style={{ color: solution.color }}>{stat.value}</div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {solution.categories.map((cat, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:text-white cursor-pointer transition-all">
                  {cat}
                </span>
              ))}
            </div>

            {/* Provider Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {solution.providers.map((provider, i) => (
                <div key={i} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 hover:bg-white/[0.07] transition-all">
                  {/* Card Header with gradient */}
                  <div className={`h-24 bg-gradient-to-br ${solution.bgColor} p-5 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-bold text-lg">{provider.name}</h3>
                        <p className="text-white/80 text-sm">{provider.category}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-medium">{provider.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {provider.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-1 rounded-md text-xs font-medium" style={{ backgroundColor: `${solution.color}20`, color: solution.color }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-white/50 text-sm">
                        <MapPin className="w-4 h-4" />
                        {provider.location}
                      </div>
                      <div className="text-white/50 text-sm">
                        {provider.reviews} değerlendirme
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <div className="text-white/50 text-xs">Başlangıç fiyatı</div>
                        <div className="text-white font-bold text-lg">{provider.price}</div>
                      </div>
                      <button className="px-4 py-2 rounded-lg font-medium text-white transition-all hover:scale-105" style={{ backgroundColor: solution.color }}>
                        İncele
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {solution.features.map((feature, i) => (
                <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${solution.color}20` }}>
                    <Check className="w-5 h-5" style={{ color: solution.color }} />
                  </div>
                  <div className="font-semibold text-white mb-1">{feature.title}</div>
                  <div className="text-sm text-white/50">{feature.desc}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center p-8 rounded-2xl" style={{ backgroundColor: `${solution.color}10`, border: `1px solid ${solution.color}30` }}>
              <div className="text-center sm:text-left">
                <div className="text-white font-semibold text-lg mb-1">
                  {solution.title} hizmeti mi arıyorsunuz?
                </div>
                <div className="text-white/60 text-sm">
                  Size en uygun tedarikçileri bulmak için hemen başvurun
                </div>
              </div>
              <button
                onClick={onHemenBasla}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white whitespace-nowrap hover:scale-105 transition-all"
                style={{ backgroundColor: solution.color }}
              >
                Teklif Al
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote: "Turing sayesinde etkinliklerimiz için en uygun hizmet sağlayıcıları çok kısa sürede bulduk. Platform, işimizi inanılmaz kolaylaştırdı.",
      author: "Ahmet Yılmaz",
      title: "Etkinlik Direktörü",
      company: "Festival İstanbul",
      image: "/testimonial-1.jpg"
    },
    {
      quote: "Hizmet sağlayıcı olarak Turing'e katıldığımızdan beri müşteri portföyümüz %40 arttı. Profesyonel bir platform.",
      author: "Elif Kaya",
      title: "Genel Müdür",
      company: "Pro Sound Systems",
      image: "/testimonial-2.jpg"
    },
    {
      quote: "Teklif karşılaştırma ve sözleşme yönetimi özellikleri harika. Artık tüm etkinliklerimizi Turing üzerinden yönetiyoruz.",
      author: "Can Demir",
      title: "Operasyon Müdürü",
      company: "Event Masters",
      image: "/testimonial-3.jpg"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="musteriler" className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Türkiye'nin önde gelen etkinlik profesyonelleri Turing'i tercih ediyor.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-500/30" />

            <div className="relative">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 pl-8">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center gap-4 pl-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[activeIndex].author}</div>
                  <div className="text-white/60 text-sm">{testimonials[activeIndex].title}, {testimonials[activeIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-blue-500' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FAQ SECTION
// ============================================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Turing'e nasıl kayıt olabilirim?",
      answer: "Turing'e kayıt olmak için 'Bizimle Çalışın' butonuna tıklayarak organizatör veya hizmet sağlayıcı olarak başvurunuzu yapabilirsiniz. Ekibimiz başvurunuzu inceleyip sizinle iletişime geçecektir."
    },
    {
      question: "Hizmet sağlayıcılar nasıl değerlendiriliyor?",
      answer: "Tüm hizmet sağlayıcılarımız detaylı bir doğrulama sürecinden geçer. Müşteri yorumları, tamamlanan projeler ve profesyonel referanslar değerlendirilir."
    },
    {
      question: "Platform komisyon oranları nedir?",
      answer: "Komisyon oranlarımız hizmet kategorisine göre değişmektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Ödeme güvenliği nasıl sağlanıyor?",
      answer: "Tüm ödemeler güvenli ödeme altyapımız üzerinden gerçekleştirilir. Hizmet tamamlanana kadar ödemeler emanette tutulur ve her iki taraf için güvence sağlanır."
    },
    {
      question: "İptal ve iade politikası nedir?",
      answer: "İptal ve iade koşulları her hizmet sağlayıcının belirlediği politikalara göre değişir. Rezervasyon yapmadan önce ilgili koşulları incelemenizi öneririz."
    },
  ]

  return (
    <section id="sss" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-gray-600">
            Merak ettiklerinize hızlı yanıtlar
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-blue-600' : 'bg-gray-100'}`}>
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-600" />
                  )}
                </div>
              </button>

              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// CTA SECTION
// ============================================
function CTASection({ onHemenBasla }) {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Etkinlik yönetiminizi bir üst seviyeye taşıyın
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Eski yöntemleri geride bırakın. Turing ile etkinliklerinizi daha verimli, daha profesyonel yönetin.
        </p>
        <button
          onClick={onHemenBasla}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-blue-600 bg-white hover:bg-gray-100 transition-colors shadow-lg"
        >
          Hemen Başlayın
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer({ onNasilCalisir }) {
  const footerSections = [
    {
      title: 'Çözümler',
      links: [
        { name: 'Booking & Sanatçı', href: '#cozumler' },
        { name: 'Teknik Ekipman', href: '#cozumler' },
        { name: 'Mekan', href: '#cozumler' },
        { name: 'Konaklama', href: '#cozumler' },
        { name: 'Ulaşım', href: '#cozumler' },
        { name: 'Operasyon', href: '#cozumler' },
      ]
    },
    {
      title: 'Şirket',
      links: [
        { name: 'Hakkımızda', href: '#', comingSoon: true },
        { name: 'Kariyer', href: '#', comingSoon: true },
        { name: 'Blog', href: '#', comingSoon: true },
        { name: 'Basın Odası', href: '#', comingSoon: true },
      ]
    },
    {
      title: 'Destek',
      links: [
        { name: 'Yardım Merkezi', href: '#', comingSoon: true },
        { name: 'SSS', href: '#sss' },
        { name: 'İletişim', href: '#iletisim' },
        { name: 'Nasıl Çalışır', onClick: onNasilCalisir },
      ]
    },
    {
      title: 'Yasal',
      links: [
        { name: 'Kullanım Koşulları', href: '#', comingSoon: true },
        { name: 'Gizlilik Politikası', href: '#', comingSoon: true },
        { name: 'KVKK', href: '#', comingSoon: true },
        { name: 'Çerez Politikası', href: '#', comingSoon: true },
      ]
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/turingtr', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/turingtr', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/turingtr', label: 'LinkedIn' },
  ]

  return (
    <footer id="iletisim" className="bg-[#121212] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image src="/turing-icon.png" alt="Turing" width={32} height={32} />
              <span className="font-bold text-xl text-white">turing</span>
            </a>
            <p className="text-white/50 text-sm mb-6 max-w-xs leading-relaxed">
              Etkinlik dünyasının dijital buluşma noktası. Organizatörler ve hizmet sağlayıcılar için tek platform.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.onClick ? (
                      <button onClick={link.onClick} className="text-white/50 hover:text-white text-sm transition-colors">
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className={`text-sm transition-colors ${link.comingSoon ? 'text-white/30 cursor-not-allowed' : 'text-white/50 hover:text-white'}`}
                        onClick={link.comingSoon ? (e) => e.preventDefault() : undefined}
                      >
                        {link.name}
                        {link.comingSoon && <span className="ml-1 text-xs text-blue-400/60">(Yakında)</span>}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
            <a href="mailto:info@turingtr.com" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@turingtr.com
            </a>
            <a href="tel:+908501234567" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              0850 123 45 67
            </a>
          </div>
          <div className="text-white/40 text-sm">
            © 2026 Turing. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  const [isHemenBaslaOpen, setIsHemenBaslaOpen] = useState(false)
  const [isNasilCalisirOpen, setIsNasilCalisirOpen] = useState(false)
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)

  return (
    <main>
      <Navbar
        onHemenBasla={() => setIsHemenBaslaOpen(true)}
        onNasilCalisir={() => setIsNasilCalisirOpen(true)}
        onEarlyAccess={() => setIsEarlyAccessOpen(true)}
      />
      <HeroSection
        onHemenBasla={() => setIsHemenBaslaOpen(true)}
        onNasilCalisir={() => setIsNasilCalisirOpen(true)}
      />
      <SolutionsSection />
      <SolutionDetailsSection onHemenBasla={() => setIsHemenBaslaOpen(true)} />
      <AppShowcaseSection onEarlyAccess={() => setIsEarlyAccessOpen(true)} />
      <AppGallerySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection onHemenBasla={() => setIsHemenBaslaOpen(true)} />
      <Footer onNasilCalisir={() => setIsNasilCalisirOpen(true)} />

      <HemenBaslaModal isOpen={isHemenBaslaOpen} onClose={() => setIsHemenBaslaOpen(false)} />
      <NasilCalisirModal isOpen={isNasilCalisirOpen} onClose={() => setIsNasilCalisirOpen(false)} />
      <EarlyAccessModal isOpen={isEarlyAccessOpen} onClose={() => setIsEarlyAccessOpen(false)} />
    </main>
  )
}
