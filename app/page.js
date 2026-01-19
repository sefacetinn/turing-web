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

      <div
        className="relative w-full max-w-md rounded-3xl border border-white/10 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1b4e 100%)', boxShadow: '0 25px 80px rgba(139,92,246,0.3)' }}
      >
        <button onClick={resetModal} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all z-10">
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-10 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 8px 40px rgba(16,185,129,0.4)' }}>
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-outfit">Kayıt Başarılı!</h3>
            <p className="text-white/60 mb-6 font-inter">Uygulama yayınlandığında sizi bilgilendireceğiz. Erken erişim listesine eklendiniz!</p>
            <button onClick={resetModal} className="px-8 py-3 rounded-2xl font-semibold text-white font-outfit transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}>
              Tamam
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', boxShadow: '0 8px 32px rgba(139,92,246,0.4)' }}>
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-outfit">Erken Erişim</h3>
              <p className="text-white/60 font-inter text-sm">Turing uygulamasına ilk erişenlerden olun!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm mb-2 font-inter">Adınız</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Adınızı girin"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 transition-colors font-inter"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2 font-inter">E-posta</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@email.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 transition-colors font-inter"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2 font-inter">Platform Tercihiniz</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPlatform('ios')}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl border transition-all ${
                      platform === 'ios'
                        ? 'bg-white/10 border-violet-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                    }`}
                  >
                    <Apple className="w-5 h-5" />
                    <span className="font-inter text-sm">iOS</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlatform('android')}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl border transition-all ${
                      platform === 'android'
                        ? 'bg-white/10 border-violet-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                    }`}
                  >
                    <Play className="w-5 h-5" />
                    <span className="font-inter text-sm">Android</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !email || !name || !platform}
                className="w-full py-4 rounded-xl font-semibold text-white font-outfit transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', boxShadow: '0 8px 32px rgba(139,92,246,0.3)' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Kaydediliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Erken Erişim İste
                  </>
                )}
              </button>
            </form>

            <p className="text-white/40 text-xs text-center mt-4 font-inter">
              Bilgileriniz gizli tutulacak ve sadece uygulama bildirimleri için kullanılacaktır.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================
// TOP BANNER
// ============================================
function TopBanner({ onClose, onEarlyAccess }) {
  return (
    <div className="bg-white text-gray-900 py-2.5 px-4 relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm">
        <Sparkles className="w-4 h-4 text-violet-600" />
        <span className="font-medium font-inter">
          <span className="hidden sm:inline">Turing uygulaması yakında iOS ve Android'de! </span>
          <span className="sm:hidden">Uygulama yakında! </span>
          <button onClick={onEarlyAccess} className="text-violet-600 hover:text-violet-700 underline underline-offset-2 font-semibold">
            Erken erişim için kayıt ol
          </button>
        </span>
        <button onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  )
}

// ============================================
// NAVBAR
// ============================================
function Navbar({ onHemenBasla, onNasilCalisir, hasBanner }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Özellikler', href: '#ozellikler' },
    { name: 'Nasıl Çalışır', onClick: onNasilCalisir },
    { name: 'Hizmetler', href: '#hizmetler' },
    { name: 'İletişim', href: '#iletisim' }
  ]

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'top-0 bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
        : hasBanner ? 'top-[44px] bg-transparent' : 'top-0 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`relative transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <Image
                src="/turing-icon.png"
                alt="Turing"
                width={44}
                height={44}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className={`font-outfit font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              turing
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.onClick ? undefined : link.href}
                onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick() } : undefined}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium cursor-pointer font-inter transition-all duration-300 group ${
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-6 ${
                  isScrolled ? 'bg-violet-600' : 'bg-white'
                }`} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onHemenBasla}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 font-outfit flex items-center gap-2 ${
                isScrolled
                  ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-white text-gray-900 hover:bg-white/90'
              }`}
            >
              Hemen Başla
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden pb-6 pt-2 animate-fade-in ${isScrolled ? 'border-t border-gray-100' : 'border-t border-white/10'}`}>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.onClick ? undefined : link.href}
                  onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(); setIsMobileMenuOpen(false) } : () => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => { onHemenBasla(); setIsMobileMenuOpen(false) }}
              className="w-full mt-4 px-6 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-violet-600 to-pink-600 shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2"
            >
              Hemen Başla
              <ArrowRight className="w-4 h-4" />
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
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full animate-float-slow" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full animate-float" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/3 w-72 h-72 rounded-full animate-float-fast" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '4s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        {/* Badge */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="group inline-flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
            </span>
            <span className="text-sm text-white/90 font-medium tracking-wide font-inter">Türkiye'nin 1 Numaralı Etkinlik Platformu</span>
            <ChevronRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-center mb-8">
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white/80 leading-tight tracking-tight font-outfit animate-fade-in-up mb-2">
            Etkinliğinizi Planlamak
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight font-outfit animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hiç Bu Kadar <span className="text-gradient">Kolay</span> Olmamıştı
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-center text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up font-inter" style={{ animationDelay: '0.25s' }}>
          Ses, ışık, sanatçı, mekan, konaklama... Etkinliğiniz için ihtiyacınız olan
          <span className="text-white font-medium"> her şey tek platformda.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <button onClick={onHemenBasla} className="group relative px-10 py-5 rounded-2xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 font-outfit animate-pulse-glow overflow-hidden" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}>
            <span className="relative z-10">Ücretsiz Başla</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          <button onClick={onNasilCalisir} className="group px-10 py-5 rounded-2xl font-semibold text-white text-lg glass hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-3 font-outfit">
            <PlayCircle className="w-6 h-6 text-violet-400" />
            <span>Nasıl Çalışır?</span>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '10K+', label: 'Aktif Kullanıcı' },
            { value: '50K+', label: 'Tamamlanan Etkinlik' },
            { value: '4.9/5', label: 'Kullanıcı Puanı' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-semibold font-outfit">{stat.value}</span>
              <span className="text-white/50 font-inter">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div id="ozellikler" className="grid md:grid-cols-3 gap-6 lg:gap-8 scroll-mt-24">
          {[
            { icon: Network, title: 'Geniş Hizmet Ağı', description: 'Booking, teknik ekipman, konaklama, mekan, ulaşım ve operasyon kategorilerinde 7/24 erişim', color: '#8b5cf6' },
            { icon: Zap, title: 'Anında Teklif Al', description: "81 ilde binlerce hizmet sağlayıcıdan dakikalar içinde rekabetçi teklifler alın", color: '#10b981' },
            { icon: Shield, title: 'Güvenli Altyapı', description: 'Dijital sözleşme, bütçe takibi ve güvenli ödeme sistemi', color: '#ec4899' }
          ].map((card, index) => (
            <div key={index} className="group relative glass rounded-3xl p-8 hover-lift card-shine animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${card.color}15 0%, transparent 70%)` }} />
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}99 100%)`, boxShadow: `0 8px 32px ${card.color}40` }}>
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="relative text-xl font-bold text-white mb-3 font-outfit group-hover:text-gradient-purple transition-all">{card.title}</h3>
              <p className="relative text-white/50 leading-relaxed font-inter group-hover:text-white/70 transition-colors">{card.description}</p>
              <ChevronRight className="absolute bottom-8 right-8 w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs font-inter tracking-wider uppercase">Keşfet</span>
            <ChevronDown className="w-5 h-5 animate-scroll-down" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to top, #0f0318 0%, transparent 100%)' }} />
    </section>
  )
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const services = [
    { icon: Music, name: 'Booking', description: 'DJ, sanatçı ve performans grupları', color: '#8b5cf6', count: '2,500+' },
    { icon: Wrench, name: 'Teknik Ekipman', description: 'Ses, ışık ve sahne sistemleri', color: '#f59e0b', count: '1,800+' },
    { icon: Building2, name: 'Konaklama', description: 'Otel ve konaklama çözümleri', color: '#10b981', count: '950+' },
    { icon: MapPin, name: 'Mekan', description: 'Etkinlik alanları ve venue seçenekleri', color: '#ec4899', count: '1,200+' },
    { icon: Truck, name: 'Ulaşım', description: 'Transfer ve lojistik hizmetleri', color: '#3b82f6', count: '800+' },
    { icon: Users, name: 'Operasyon', description: 'Personel ve organizasyon desteği', color: '#ef4444', count: '2,100+' },
  ]

  return (
    <section id="hizmetler" className="py-28 relative overflow-hidden" style={{ background: '#0f0318' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2.5 rounded-full glass text-pink-400 text-sm font-medium mb-6 font-inter">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Hizmet Kategorileri
            </span>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-outfit">
            Her İhtiyaca <span className="text-gradient">Tek Platform</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-inter">
            Etkinliğiniz için gereken tüm hizmetleri tek bir çatı altında bulun
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative glass rounded-3xl p-6 md:p-8 hover-lift card-shine cursor-pointer">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ background: `radial-gradient(circle at 30% 30%, ${service.color}20 0%, transparent 60%)` }} />

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}05 100%)`, border: `1px solid ${service.color}30` }}>
                <service.icon className="w-8 h-8 transition-colors" style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-white mb-2 font-outfit group-hover:text-white transition-colors">{service.name}</h3>
              <p className="relative text-white/40 text-sm font-inter mb-4 group-hover:text-white/60 transition-colors">{service.description}</p>

              {/* Provider count */}
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold font-outfit" style={{ color: service.color }}>{service.count}</span>
                <span className="text-white/30 font-inter">sağlayıcı</span>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" style={{ background: `${service.color}20` }}>
                <ArrowRight className="w-5 h-5" style={{ color: service.color }} />
              </div>
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
  const stats = [
    { value: '81', label: 'İl Kapsamı', suffix: '', icon: MapPin, color: '#8b5cf6' },
    { value: '10', label: 'Hizmet Sağlayıcı', suffix: 'K+', icon: Users, color: '#10b981' },
    { value: '50', label: 'Tamamlanan Etkinlik', suffix: 'K+', icon: Calendar, color: '#ec4899' },
    { value: '4.9', label: 'Kullanıcı Puanı', suffix: '/5', icon: Star, color: '#f59e0b' }
  ]

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1b4e 50%, #1a0533 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit">
            Rakamlarla <span className="text-gradient">Turing</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative glass rounded-3xl p-8 text-center hover-lift">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: `${stat.color}20` }}>
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-outfit">
                {stat.value}
                <span style={{ color: stat.color }}>{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-white/50 font-inter text-sm">{stat.label}</div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-500 group-hover:w-16" style={{ background: stat.color }} />
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
  const testimonials = [
    { quote: "Turing sayesinde festival organizasyonumuz için tüm teknik ekipmanı 2 gün içinde bulduk. Artık başka platform düşünmüyoruz.", author: "Mehmet Yılmaz", role: "Festival Organizatörü", company: "SoundWave Events", avatar: "M" },
    { quote: "Hizmet sağlayıcı olarak Turing'e katıldım ve müşteri portföyüm %300 arttı. Ödeme güvencesi muhteşem.", author: "Ayşe Kaya", role: "Genel Müdür", company: "Elite Audio Systems", avatar: "A" },
    { quote: "Kurumsal etkinliklerimiz için tek kullandığımız platform. Teklif karşılaştırma özelliği çok zaman kazandırıyor.", author: "Can Demir", role: "Etkinlik Direktörü", company: "Global Corp", avatar: "C" }
  ]

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#0f0318' }}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 60%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2.5 rounded-full glass text-emerald-400 text-sm font-medium mb-6 font-inter">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-emerald-400" />
              Kullanıcı Yorumları
            </span>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-outfit">
            Binlerce Profesyonel
            <br />
            <span className="text-gradient">Turing'i Tercih Ediyor</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative glass rounded-3xl p-8 hover-lift">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', boxShadow: '0 8px 32px rgba(139,92,246,0.3)' }}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 leading-relaxed mb-8 font-inter text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white font-outfit" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white font-outfit">{testimonial.author}</div>
                  <div className="text-white/40 text-sm font-inter">{testimonial.role}</div>
                  <div className="text-violet-400 text-sm font-inter">{testimonial.company}</div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10" style={{ background: 'linear-gradient(135deg, transparent 50%, #8b5cf6 50%)', borderBottomRightRadius: '1.5rem' }} />
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="flex justify-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass">
            <div className="flex -space-x-3">
              {['M', 'A', 'C', 'E'].map((letter, i) => (
                <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold border-2 border-[#0f0318]" style={{ background: `hsl(${260 + i * 30}, 70%, 50%)` }}>
                  {letter}
                </div>
              ))}
            </div>
            <div className="text-white/60 font-inter">
              <span className="text-white font-semibold">10,000+</span> kullanıcı tarafından güveniliyor
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// APP SCREENSHOTS SECTION
// ============================================
function AppScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  const screenshots = [
    { src: '/app-screenshot-1.png', title: 'Kolay Giriş', desc: 'Hızlı ve güvenli oturum açma' },
    { src: '/app-screenshot-2.png', title: 'Akıllı Dashboard', desc: 'Tüm etkinlikleriniz bir bakışta' },
    { src: '/app-screenshot-3.png', title: 'Geniş Hizmet Ağı', desc: '12+ kategori, binlerce sağlayıcı' },
  ]

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0318 0%, #1a0533 50%, #0f0318 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6 font-inter">Uygulama Önizleme</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">Turing <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)' }}>Mobil Deneyimi</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-inter">Etkinlik yönetiminin geleceği avucunuzun içinde</p>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
          {screenshots.map((shot, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative transition-all duration-500 ${activeIndex === index ? 'scale-100 z-10' : 'scale-75 opacity-50 hover:opacity-70'}`}
            >
              <div
                className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-500 ${activeIndex === index ? 'shadow-2xl' : ''}`}
                style={{
                  width: activeIndex === index ? '280px' : '200px',
                  boxShadow: activeIndex === index ? '0 25px 80px rgba(139,92,246,0.3)' : 'none'
                }}
              >
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={280}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2 font-outfit">{screenshots[activeIndex].title}</h3>
          <p className="text-white/60 font-inter">{screenshots[activeIndex].desc}</p>
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
            <div className="relative w-64 rounded-[2.5rem] overflow-hidden" style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.5)' }}>
              <Image src="/app-screenshot-2.png" alt="Turing App" width={280} height={600} className="w-full h-auto" />
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
function Footer({ onNasilCalisir }) {
  const footerLinks = [
    {
      title: 'Ürün',
      links: [
        { name: 'Özellikler', href: '#ozellikler' },
        { name: 'Hizmetler', href: '#hizmetler' },
        { name: 'Nasıl Çalışır', onClick: onNasilCalisir },
        { name: 'Fiyatlandırma', href: '#', comingSoon: true }
      ]
    },
    {
      title: 'Şirket',
      links: [
        { name: 'Hakkımızda', href: '#', comingSoon: true },
        { name: 'Blog', href: '#', comingSoon: true },
        { name: 'Kariyer', href: '#', comingSoon: true },
        { name: 'İletişim', href: '#iletisim' }
      ]
    },
    {
      title: 'Yasal',
      links: [
        { name: 'Gizlilik Politikası', href: '#', comingSoon: true },
        { name: 'Kullanım Koşulları', href: '#', comingSoon: true },
        { name: 'KVKK', href: '#', comingSoon: true }
      ]
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/turingtr', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/turingtr', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/turingtr', label: 'LinkedIn' }
  ]

  return (
    <footer id="iletisim" className="py-16 border-t border-white/10" style={{ background: '#0f0318' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <Image src="/turing-icon.png" alt="Turing" width={40} height={40} className="group-hover:scale-110 transition-transform" />
              <span className="font-outfit font-bold text-xl text-white">turing</span>
            </a>
            <p className="text-white/50 mb-6 max-w-sm font-inter leading-relaxed">
              Etkinlik dünyasının dijital buluşma noktası. Hizmet sağlayıcılar ve organizatörler için tek platform.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 font-outfit">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-white/50 hover:text-white transition-colors duration-300 font-inter"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className={`font-inter transition-colors duration-300 ${
                          link.comingSoon
                            ? 'text-white/30 cursor-not-allowed'
                            : 'text-white/50 hover:text-white'
                        }`}
                        onClick={link.comingSoon ? (e) => e.preventDefault() : undefined}
                      >
                        {link.name}
                        {link.comingSoon && <span className="ml-2 text-xs text-violet-400/60">(Yakında)</span>}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="mailto:info@turingtr.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
              <Mail className="w-5 h-5 group-hover:text-violet-400 transition-colors" />
              <span className="font-inter">info@turingtr.com</span>
            </a>
            <a href="tel:+908501234567" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
              <Phone className="w-5 h-5 group-hover:text-violet-400 transition-colors" />
              <span className="font-inter">0850 123 45 67</span>
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
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  return (
    <main>
      {showBanner && <TopBanner onClose={() => setShowBanner(false)} onEarlyAccess={() => setIsEarlyAccessOpen(true)} />}
      <Navbar onHemenBasla={() => setIsHemenBaslaOpen(true)} onNasilCalisir={() => setIsNasilCalisirOpen(true)} hasBanner={showBanner} />
      <HeroSection onHemenBasla={() => setIsHemenBaslaOpen(true)} onNasilCalisir={() => setIsNasilCalisirOpen(true)} />
      <ServicesSection />
      <StatsSection />
      <AppScreenshotsSection />
      <TestimonialsSection />
      <AppCtaSection onHemenBasla={() => setIsHemenBaslaOpen(true)} />
      <Footer onNasilCalisir={() => setIsNasilCalisirOpen(true)} />
      <HemenBaslaModal isOpen={isHemenBaslaOpen} onClose={() => setIsHemenBaslaOpen(false)} />
      <NasilCalisirModal isOpen={isNasilCalisirOpen} onClose={() => setIsNasilCalisirOpen(false)} />
      <EarlyAccessModal isOpen={isEarlyAccessOpen} onClose={() => setIsEarlyAccessOpen(false)} />
    </main>
  )
}
