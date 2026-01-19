'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { 
  Network, Zap, Shield, Sparkles, Menu, X, ChevronRight,
  Music, Truck, Building2, MapPin, Users, Wrench,
  CheckCircle2, ArrowRight, Star, Quote,
  Apple, Play, Mail, Phone, Instagram, Twitter, Linkedin,
  TrendingUp, ChevronDown, Search, Calendar, Send, User, Building, Briefcase,
  Rocket, Check, PlayCircle, PauseCircle, FileCheck
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
      
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10"
        style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1b4e 100%)', boxShadow: '0 25px 80px rgba(139,92,246,0.3)' }}
      >
        <button onClick={resetModal} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all z-10">
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 8px 40px rgba(16,185,129,0.4)' }}>
              <Check className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 font-outfit">Başvurunuz Alındı!</h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto font-inter">En kısa sürede sizinle iletişime geçeceğiz. Turing ailesine hoş geldiniz!</p>
            <button onClick={resetModal} className="px-8 py-4 rounded-2xl font-semibold text-white font-outfit" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}>
              Tamam
            </button>
          </div>
        ) : (
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-2 rounded-full transition-all duration-500 ${s === step ? 'w-12 bg-violet-500' : s < step ? 'w-8 bg-violet-500/50' : 'w-8 bg-white/20'}`} />
              ))}
            </div>

            {step === 1 && (
              <div className="animate-fade-in">
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-outfit">Turing'e Hoş Geldiniz</h3>
                  <p className="text-white/60 font-inter">Sizi tanıyalım. Hangi rolde katılmak istiyorsunuz?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <button onClick={() => { setUserType('organizer'); setStep(2) }} className="group relative p-8 rounded-3xl text-left transition-all duration-500 hover:scale-105 border" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 100%)', borderColor: 'rgba(139,92,246,0.3)' }}>
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', boxShadow: '0 8px 32px rgba(139,92,246,0.4)' }}>
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 font-outfit">Organizatörüm</h4>
                    <p className="text-white/60 text-sm font-inter">Etkinlik düzenliyorum, hizmet sağlayıcı arıyorum</p>
                    <ChevronRight className="absolute bottom-8 right-8 w-6 h-6 text-violet-400 group-hover:translate-x-2 transition-transform" />
                  </button>

                  <button onClick={() => { setUserType('provider'); setStep(2) }} className="group relative p-8 rounded-3xl text-left transition-all duration-500 hover:scale-105 border" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)', borderColor: 'rgba(16,185,129,0.3)' }}>
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 8px 32px rgba(16,185,129,0.4)' }}>
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 font-outfit">Hizmet Sağlayıcıyım</h4>
                    <p className="text-white/60 text-sm font-inter">Hizmet sunuyorum, müşteri bulmak istiyorum</p>
                    <ChevronRight className="absolute bottom-8 right-8 w-6 h-6 text-emerald-400 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <button onClick={() => setStep(1)} className="flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  <span className="font-inter">Geri</span>
                </button>

                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-outfit">
                    {userType === 'organizer' ? 'Ne tür hizmet arıyorsunuz?' : 'Hangi alanda hizmet veriyorsunuz?'}
                  </h3>
                  <p className="text-white/60 font-inter">İlgilendiğiniz kategoriyi seçin</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map((cat) => (
                    <button key={cat.id} onClick={() => { setFormData({...formData, category: cat.id}); setStep(3) }} className="group p-6 rounded-2xl text-left transition-all duration-300 hover:scale-105 bg-white/5 border border-white/10 hover:bg-white/10">
                      <cat.icon className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
                      <h4 className="text-white font-semibold text-sm font-outfit">{cat.name}</h4>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <button onClick={() => setStep(2)} className="flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  <span className="font-inter">Geri</span>
                </button>

                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-outfit">Son Adım</h3>
                  <p className="text-white/60 font-inter">İletişim bilgilerinizi girin</p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input type="text" placeholder="Ad Soyad" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors font-inter" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input type="email" placeholder="E-posta Adresi" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors font-inter" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input type="tel" placeholder="Telefon Numarası" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors font-inter" />
                  </div>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input type="text" placeholder="Şirket / Marka Adı (Opsiyonel)" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors font-inter" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <select value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500/50 transition-colors appearance-none cursor-pointer font-inter">
                      <option value="" className="bg-[#1a0533]">Şehir Seçin</option>
                      {cities.map(city => <option key={city} value={city} className="bg-[#1a0533]">{city}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                  </div>
                  <button onClick={handleSubmit} disabled={!formData.name || !formData.email || !formData.phone || !formData.city || isSubmitting} className="w-full mt-6 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3 font-outfit" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', boxShadow: '0 8px 32px rgba(139,92,246,0.4)' }}>
                    {isSubmitting ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Gönderiliyor...</> : <><Send className="w-5 h-5" />Başvuruyu Gönder</>}
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
    { number: '01', title: 'İhtiyacınızı Belirleyin', description: 'Etkinliğiniz için ihtiyaç duyduğunuz hizmet kategorisini seçin.', details: ['Ses sistemi, ışık, sahne kurulumu', 'DJ, sanatçı ve performans grupları', 'Konaklama ve transfer hizmetleri'], icon: Search, color: '#8b5cf6' },
    { number: '02', title: 'Teklifleri Karşılaştırın', description: 'Dakikalar içinde onlarca profesyonelden teklif alın.', details: ['Detaylı fiyat teklifleri', 'Hizmet sağlayıcı profilleri', 'Müşteri değerlendirmeleri'], icon: TrendingUp, color: '#10b981' },
    { number: '03', title: 'Güvenle Anlaşın', description: 'Seçtiğiniz tedarikçiyle güvenli şekilde anlaşın.', details: ['Dijital sözleşme yönetimi', 'Güvenli ödeme altyapısı', 'Bütçe takip sistemi'], icon: Shield, color: '#ec4899' },
    { number: '04', title: 'Etkinliği Gerçekleştirin', description: 'Tüm süreci tek panelden yönetin.', details: ['Gerçek zamanlı takip', 'Tedarikçi koordinasyonu', 'Check-list yönetimi'], icon: Rocket, color: '#f59e0b' }
  ]

  useEffect(() => {
    if (isOpen && isPlaying) {
      intervalRef.current = setInterval(() => setActiveStep((prev) => (prev + 1) % steps.length), 4000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isOpen, isPlaying])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10" style={{ background: 'linear-gradient(135deg, #0f0318 0%, #1a0533 50%, #0f0318 100%)', boxShadow: '0 25px 100px rgba(139,92,246,0.2)' }}>
        <button onClick={onClose} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all z-10">
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6 font-inter">İnteraktif Rehber</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-outfit">Turing Nasıl Çalışır?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-inter">4 basit adımda etkinliğinizi profesyonelce planlayın</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <button key={index} onClick={() => { setActiveStep(index); setIsPlaying(false); clearInterval(intervalRef.current) }} className={`w-full text-left p-5 rounded-2xl transition-all duration-500 ${activeStep === index ? 'bg-white/10 border-l-4' : 'bg-white/5 hover:bg-white/8 border-l-4 border-transparent'}`} style={{ borderLeftColor: activeStep === index ? step.color : 'transparent' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500" style={{ background: activeStep === index ? step.color : 'rgba(255,255,255,0.1)', boxShadow: activeStep === index ? `0 8px 32px ${step.color}40` : 'none' }}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: `${step.color}20`, color: step.color }}>{step.number}</span>
                        <h3 className={`font-bold transition-colors font-outfit ${activeStep === index ? 'text-white' : 'text-white/70'}`}>{step.title}</h3>
                      </div>
                      <p className={`text-sm transition-colors font-inter ${activeStep === index ? 'text-white/60' : 'text-white/40'}`}>{step.description}</p>
                    </div>
                  </div>
                  {activeStep === index && (
                    <div className="mt-4 pl-16 animate-fade-in">
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/50 text-sm font-inter">
                            <Check className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} />{detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              ))}
              <div className="flex items-center justify-center gap-4 pt-4">
                <button onClick={() => { setIsPlaying(!isPlaying); if (isPlaying) clearInterval(intervalRef.current) }} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  {isPlaying ? <><PauseCircle className="w-5 h-5" /><span className="text-sm font-inter">Duraklat</span></> : <><PlayCircle className="w-5 h-5" /><span className="text-sm font-inter">Otomatik Oynat</span></>}
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-72 h-[560px] rounded-[3rem] p-3 transition-all duration-700" style={{ background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)', boxShadow: `0 25px 80px ${steps[activeStep].color}30, 0 0 0 1px rgba(255,255,255,0.1)` }}>
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #1a0533 0%, #2d1b4e 100%)' }}>
                  <div className="absolute top-0 left-0 right-0 flex justify-center pt-3 z-10">
                    <div className="w-28 h-7 bg-black rounded-full" />
                  </div>
                  <div className="p-6 pt-14 h-full overflow-hidden">
                    <div className="flex items-center gap-2 mb-6">
                      <Image src="/turing-icon.png" alt="Turing" width={32} height={32} />
                      <span className="text-white font-semibold">Turing</span>
                    </div>
                    {activeStep === 0 && (
                      <div className="animate-fade-in space-y-3">
                        <div className="bg-white/10 rounded-2xl p-4 mb-4 flex items-center gap-3">
                          <Search className="w-5 h-5 text-white/50" />
                          <span className="text-white/50 text-sm">Hizmet ara...</span>
                        </div>
                        {['Ses Sistemi', 'DJ & Sanatçı', 'Işık Sistemi'].map((item, i) => (
                          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500" />
                            <span className="text-white/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="animate-fade-in">
                        <div className="text-white font-semibold mb-4">Teklifler (12)</div>
                        {[{ name: 'Pro Sound', price: '₺15,000', rating: 4.9 }, { name: 'Elite Audio', price: '₺18,500', rating: 4.8 }].map((offer, i) => (
                          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 mb-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500" />
                                <span className="text-white text-sm font-medium">{offer.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                <span className="text-white/70 text-xs">{offer.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-emerald-400 font-bold">{offer.price}</span>
                              <button className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs">İncele</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="animate-fade-in">
                        <div className="text-white font-semibold mb-4">Sözleşme</div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4">
                          <div className="flex items-center gap-3 mb-4">
                            <FileCheck className="w-8 h-8 text-pink-400" />
                            <div>
                              <div className="text-white text-sm font-medium">Pro Sound ile Anlaşma</div>
                              <div className="text-white/50 text-xs">Ses Sistemi Kiralama</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm"><span className="text-white/50">Toplam</span><span className="text-white">₺15,000</span></div>
                            <div className="flex justify-between text-sm"><span className="text-white/50">Ön Ödeme</span><span className="text-emerald-400">₺5,000</span></div>
                          </div>
                        </div>
                        <button className="w-full py-3 rounded-xl text-white font-semibold text-sm" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}>Onayla & Öde</button>
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="animate-fade-in">
                        <div className="text-white font-semibold mb-4">Etkinlik Paneli</div>
                        <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white text-sm font-medium">Festival 2026</span>
                            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs">Aktif</span>
                          </div>
                          <div className="text-white/50 text-xs">15 Temmuz 2026 • İstanbul</div>
                        </div>
                        {[{ task: 'Ses sistemi kurulumu', status: 'done' }, { task: 'Işık kontrolü', status: 'progress' }].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 mb-2">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.status === 'done' ? 'bg-emerald-500' : 'bg-amber-500'}`}>
                              {item.status === 'done' && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-white/70 text-sm">{item.task}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button onClick={onClose} className="px-10 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 font-outfit" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', boxShadow: '0 8px 32px rgba(139,92,246,0.4)' }}>
              Hemen Başla
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// NAVBAR
// ============================================
function Navbar({ onHemenBasla, onNasilCalisir }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#1a0533]/90 backdrop-blur-xl shadow-2xl shadow-purple-900/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image src="/turing-icon.png" alt="Turing" width={40} height={40} className="transition-transform duration-300 group-hover:scale-110" />
            <Image src="/turing-logo.png" alt="Turing" width={80} height={28} className="hidden sm:block" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[{ name: 'Özellikler', href: '#ozellikler' }, { name: 'Nasıl Çalışır', onClick: onNasilCalisir }, { name: 'Hizmetler', href: '#hizmetler' }, { name: 'İletişim', href: '#iletisim' }].map((link) => (
              <a key={link.name} href={link.onClick ? undefined : link.href} onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick() } : undefined} className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium cursor-pointer font-inter">
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={onHemenBasla} className="hidden md:block px-6 py-2.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105 font-outfit" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', boxShadow: '0 4px 20px rgba(139,92,246,0.3)' }}>
            Hemen Başla
          </button>

          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            {['Özellikler', 'Nasıl Çalışır', 'Hizmetler', 'İletişim'].map((name) => (
              <a key={name} href="#" className="block py-3 text-white/70 hover:text-white transition-colors">{name}</a>
            ))}
            <button onClick={() => { onHemenBasla(); setIsMobileMenuOpen(false) }} className="w-full mt-4 px-6 py-3 rounded-xl font-semibold text-white text-sm" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}>
              Hemen Başla
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection({ onHemenBasla, onNasilCalisir }) {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1b4e 25%, #4a1942 50%, #2d1b4e 75%, #1a0533 100%)' }}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute rounded-full animate-float" style={{ width: Math.random() * 300 + 100, height: Math.random() * 300 + 100, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, background: i % 3 === 0 ? 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' : i % 3 === 1 ? 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)', animationDelay: `${i * 0.5}s`, animationDuration: `${15 + Math.random() * 10}s` }} />
        ))}
      </div>

      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-white/80 font-medium tracking-wide font-inter">Planla • Yönet • Gerçekleştir</span>
          </div>
        </div>

        <h1 className="text-center mb-6 animate-fade-in-up">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight font-outfit" style={{ textShadow: '0 4px 30px rgba(139,92,246,0.3)' }}>Etkinlik Dünyasının</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold mt-2 bg-clip-text text-transparent font-outfit" style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #10b981 100%)' }}>Dijital Buluşma Noktası</span>
        </h1>

        <p className="text-center text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up font-inter" style={{ animationDelay: '0.2s' }}>
          Turing, müzik ve etkinlik sektöründe hizmet sağlayıcılarla organizatörleri tek platformda buluşturur. Türkiye'nin 81 ilinde binlerce profesyonel, bir tık uzağınızda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button onClick={onHemenBasla} className="group px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-2 font-outfit" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', boxShadow: '0 8px 32px rgba(139,92,246,0.4)' }}>
            Hemen Başla <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={onNasilCalisir} className="px-8 py-4 rounded-2xl font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center gap-2 font-outfit">
            <PlayCircle className="w-5 h-5" /> Nasıl Çalışır?
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: Network, title: 'Geniş Hizmet Ağı', description: 'Booking, teknik ekipman, konaklama, mekan, ulaşım ve operasyon kategorilerinde 7/24 erişim', gradient: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.3)', iconBg: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', glow: 'rgba(139,92,246,0.4)' },
            { icon: Zap, title: 'Anında Teklif Sistemi', description: "Türkiye'nin 81 ilinde binlerce hizmet sağlayıcıdan dakikalar içinde teklif alın", gradient: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.3)', iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', glow: 'rgba(16,185,129,0.4)' },
            { icon: Shield, title: 'Güvenli İşlem', description: 'Sözleşme yönetimi, bütçe takibi ve güvenli ödeme altyapısı', gradient: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.3)', iconBg: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', glow: 'rgba(236,72,153,0.4)' }
          ].map((card, index) => (
            <div key={index} className="group relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ background: `linear-gradient(135deg, ${card.gradient} 0%, ${card.gradient.replace('0.15', '0.05')} 100%)`, border: `1px solid ${card.border}`, backdropFilter: 'blur(10px)', animationDelay: `${0.6 + index * 0.1}s` }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${card.gradient} 0%, transparent 70%)` }} />
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: card.iconBg, boxShadow: `0 8px 32px ${card.glow}` }}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3 font-outfit">{card.title}</h3>
              <p className="relative text-white/60 leading-relaxed font-inter">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #0f0318 0%, transparent 100%)' }} />
    </section>
  )
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const services = [
    { icon: Music, name: 'Booking', description: 'DJ, sanatçı ve performans grupları', color: '#8b5cf6' },
    { icon: Wrench, name: 'Teknik Ekipman', description: 'Ses, ışık ve sahne sistemleri', color: '#f59e0b' },
    { icon: Building2, name: 'Konaklama', description: 'Otel ve konaklama çözümleri', color: '#10b981' },
    { icon: MapPin, name: 'Mekan', description: 'Etkinlik alanları ve venue seçenekleri', color: '#ec4899' },
    { icon: Truck, name: 'Ulaşım', description: 'Transfer ve lojistik hizmetleri', color: '#3b82f6' },
    { icon: Users, name: 'Operasyon', description: 'Personel ve organizasyon desteği', color: '#ef4444' },
  ]

  return (
    <section id="hizmetler" className="py-24 relative overflow-hidden" style={{ background: '#0f0318' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6 font-inter">Hizmet Kategorileri</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">Her İhtiyaca <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)' }}>Tek Platform</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-inter">Etkinliğiniz için gereken tüm hizmetleri tek bir çatı altında bulun.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                <service.icon className="w-7 h-7" style={{ color: service.color }} />
              </div>
              <h3 className="relative text-lg font-bold text-white mb-2 font-outfit">{service.name}</h3>
              <p className="relative text-white/50 text-sm font-inter">{service.description}</p>
              <ChevronRight className="absolute bottom-6 right-6 w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// STATS SECTION
// ============================================
function StatsSection() {
  return (
    <section className="py-20 relative" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1b4e 50%, #1a0533 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{ value: '81', label: 'İl Kapsamı', suffix: '' }, { value: '10', label: 'Hizmet Sağlayıcı', suffix: 'K+' }, { value: '50', label: 'Tamamlanan Etkinlik', suffix: 'K+' }, { value: '4.9', label: 'Kullanıcı Puanı', suffix: '/5' }].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-outfit">{stat.value}<span className="text-violet-400">{stat.suffix}</span></div>
              <div className="text-white/60 font-inter">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function TestimonialsSection() {
  return (
    <section className="py-24 relative" style={{ background: '#0f0318' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 font-inter">Kullanıcı Yorumları</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">Binlerce Profesyonel <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #10b981 0%, #8b5cf6 100%)' }}>Turing'i Tercih Ediyor</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "Turing sayesinde festival organizasyonumuz için tüm teknik ekipmanı 2 gün içinde bulduk.", author: "Mehmet Yılmaz", role: "Festival Organizatörü" },
            { quote: "Hizmet sağlayıcı olarak Turing'e katıldım ve müşteri portföyüm %300 arttı.", author: "Ayşe Kaya", role: "Ses & Işık Firması" },
            { quote: "Kurumsal etkinliklerimiz için tek kullandığımız platform. Güvenli ödeme sistemi harika.", author: "Can Demir", role: "Etkinlik Müdürü" }
          ].map((testimonial, index) => (
            <div key={index} className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <Quote className="w-10 h-10 text-violet-500/30 mb-6" />
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}</div>
              <p className="text-white/70 leading-relaxed mb-6 font-inter">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-white font-outfit">{testimonial.author}</div>
                <div className="text-white/50 text-sm font-inter">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// APP CTA SECTION
// ============================================
function AppCtaSection({ onHemenBasla }) {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d1b4e 0%, #4a1942 50%, #2d1b4e 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">Turing'i Hemen <span className="bg-clip-text text-transparent block mt-2" style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)' }}>İndirin</span></h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl font-inter">Etkinlik dünyasının tüm profesyonelleri cebinizde. iOS ve Android için şimdi ücretsiz indirin.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl hover:scale-105 transition-transform duration-300">
                <Apple className="w-8 h-8 text-black" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="text-lg font-semibold text-black font-outfit">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl hover:scale-105 transition-transform duration-300">
                <Play className="w-8 h-8 text-black" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="text-lg font-semibold text-black font-outfit">Google Play</div>
                </div>
              </button>
            </div>

            <button onClick={onHemenBasla} className="mt-8 text-white/60 hover:text-white transition-colors flex items-center gap-2 justify-center lg:justify-start font-inter">
              <span>veya web'den hemen başlayın</span> <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-[580px] rounded-[3rem] p-3" style={{ background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)', boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)' }}>
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a0533 0%, #2d1b4e 100%)' }}>
                <div className="flex justify-center pt-3"><div className="w-24 h-6 bg-black rounded-full" /></div>
                <div className="p-6 pt-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Image src="/turing-icon.png" alt="Turing" width={40} height={40} />
                    <div>
                      <div className="text-white font-semibold">Turing</div>
                      <div className="text-white/50 text-xs">Planla • Yönet • Gerçekleştir</div>
                    </div>
                  </div>
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500" />
                        <div className="flex-1">
                          <div className="h-3 bg-white/20 rounded w-24 mb-1" />
                          <div className="h-2 bg-white/10 rounded w-16" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer id="iletisim" className="py-16 border-t border-white/10" style={{ background: '#0f0318' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/turing-icon.png" alt="Turing" width={40} height={40} />
              <Image src="/turing-logo.png" alt="Turing" width={80} height={28} />
            </div>
            <p className="text-white/50 mb-6 max-w-sm font-inter">Etkinlik dünyasının dijital buluşma noktası. Hizmet sağlayıcılar ve organizatörler için tek platform.</p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Ürün', links: ['Özellikler', 'Fiyatlandırma', 'Nasıl Çalışır', 'SSS'] },
            { title: 'Şirket', links: ['Hakkımızda', 'Blog', 'Kariyer', 'İletişim'] },
            { title: 'Yasal', links: ['Gizlilik Politikası', 'Kullanım Koşulları', 'KVKK'] }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 font-outfit">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}><a href="#" className="text-white/50 hover:text-white transition-colors duration-300 font-inter">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="mailto:info@turingtr.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Mail className="w-5 h-5" /><span className="font-inter">info@turingtr.com</span>
            </a>
            <a href="tel:+908501234567" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Phone className="w-5 h-5" /><span className="font-inter">0850 123 45 67</span>
            </a>
          </div>
          <div className="text-white/40 text-sm font-inter">© 2026 Turing. Tüm hakları saklıdır.</div>
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

  return (
    <main>
      <Navbar onHemenBasla={() => setIsHemenBaslaOpen(true)} onNasilCalisir={() => setIsNasilCalisirOpen(true)} />
      <HeroSection onHemenBasla={() => setIsHemenBaslaOpen(true)} onNasilCalisir={() => setIsNasilCalisirOpen(true)} />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <AppCtaSection onHemenBasla={() => setIsHemenBaslaOpen(true)} />
      <Footer />
      <HemenBaslaModal isOpen={isHemenBaslaOpen} onClose={() => setIsHemenBaslaOpen(false)} />
      <NasilCalisirModal isOpen={isNasilCalisirOpen} onClose={() => setIsNasilCalisirOpen(false)} />
    </main>
  )
}
