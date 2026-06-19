export const siteContent = {
  brand: {
    name: "MSÇ İnşaat",
    shortName: "MSÇ",
    subtitle: "İNŞAAT",
    slogan: "Profesyonel yapı çözümleri.",
    copyright: "© 2026 MSÇ İnşaat. Tüm hakları saklıdır.",
    footerDescription:
      "Anahtar teslim fabrika, taahhüt, devlet ihaleleri, yap-sat, seramik satışı ve dekorasyon alanlarında profesyonel yapı çözümleri.",
  },

  seo: {
    keywords: [
      "MSÇ İnşaat",
      "anahtar teslim fabrika",
      "taahhüt",
      "devlet ihaleleri",
      "yap-sat",
      "seramik satışı",
      "dekorasyon",
      "inşaat firması",
    ],
  },

  contact: {
    phone: "+90 532 155 58 11",
    phoneHref: "tel:+905321555811",
    email: "info@mscinsaat.com",
    emailHref: "mailto:info@mscinsaat.com",
    whatsappNumber: "905321555811",
    whatsappHref:
      "https://wa.me/+905321555811?text=Merhaba%20MSÇ%20İnşaat%20hakkında%20bilgi%20almak%20istiyorum.",
    location: "Türkiye Geneli Hizmet",
    workingHours: "Pzt - Cmt / 09:00 - 18:00",
    topbarLeft: "Türkiye Geneli Profesyonel Yapı Çözümleri",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Bilecik+Merkez,+Bilecik,+Turkey&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },

  nav: {
    links: [
      { label: "Anasayfa", href: "/" },
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
      { label: "Projelerimiz", href: "/projelerimiz" },
      { label: "Referanslarımız", href: "/referanslarimiz" },
      { label: "İletişim", href: "/iletisim" },
    ],
    ctaLabel: "Teklif Al",
    homeAriaLabel: "MSÇ İnşaat Ana Sayfa",
    mobileToggleLabel: "Mobil menüyü aç/kapat",
  },

  common: {
    ctas: {
      services: { label: "Hizmetlerimizi İncele", href: "/hizmetlerimiz" },
      contact: { label: "Bize Ulaşın", href: "/iletisim" },
      quote: { label: "Teklif Talebi Oluştur", href: "/iletisim" },
      call: "Hemen Ara",
    },
    imagesAlt: {
      logo: "MSÇ İnşaat Logo",
      homeAbout: "MSÇ İnşaat saha çalışması",
      aboutHero: "MSÇ İnşaat hakkında",
      aboutStory: "Baretli inşaat ekibi saha koordinasyonu",
      aboutApproach: "MSÇ İnşaat çalışma yaklaşımı",
      aboutWhyUs: "MSÇ İnşaat proje planlama yaklaşımı",
      mapTitle: "MSÇ İnşaat Konum",
    },
  },

  social: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],

  footerServices: [
    "Anahtar Teslim Fabrika",
    "Taahhüt",
    "Devlet İhaleleri",
    "Yap-Sat",
    "Seramik Satışı",
    "Dekorasyon",
  ],

  footer: {
    menuTitle: "Menü",
    servicesTitle: "Hizmetler",
    contactTitle: "İletişim",
  },

  images: {
    logo: "/msclogo.png",
    logoWhite: "/msclogowh.png",
    favicon: "/mscfavicon.svg",
    ogImage: "/msclogoog.png",
    heroVideo: "/hero.mp4",
    about: "",
    aboutHero: "/halmeydan.webp",
    aboutStory:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80",
    aboutStoryTeam:
      "https://images.unsplash.com/photo-1771971015617-db6bfb2f1e83?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1200",
    aboutSite:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    aboutBlueprint:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    serviceFabrika:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    serviceTaahhut:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    projectFeatured:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    projectApproach: "/showroom.webp",
  },

  // Referans kartları (mock). UI'da her zaman ilk 8 öğe gösterilir; 8'den fazla
  // öğe varsa "Tümünü Gör" butonu çıkar. Her kart kurum adını (displayName) ve
  // yapılan işi (subtitle) gösterir; görsel kullanılmaz.
  references: [
    {
      key: "acme-yapi",
      displayName: "SAYDAM OTOMASYON ENERJİ SAN. VE TİC. LTD. ŞTİ.",
      subtitle:
        "Prefabrik Bina Temelleri, Soket ve Kirişleri, Perde Betonları ve Saha Betonları",
    },
    {
      key: "nova-endustri",
      displayName: "ECZACIBAŞI ESAN ENDÜSTRİYEL HAMMADDELER A.Ş. – BİLECİK",
      subtitle:
        "Arıtma Havuzları, İstinat Duvarları, Saha Betonları Temizlik İşleri Yapımı ve Onarım İşleri",
    },
    {
      key: "kaya-insaat",
      displayName: "TERMAL SERAMİK SAN. VE TİC. A.Ş. – SÖĞÜT / BİLECİK",
      subtitle:
        "2. Fabrika İlave Kapalı Alan Temeli, Perde Betonları ve Saha Betonları",
    },
    {
      key: "delta-lojistik",
      displayName: "AKGÜN TOPRAK SAN. İNŞ. VE TİC. A.Ş. – ESKİŞEHİR",
      subtitle:
        "Fabrika Çiti ve KedaPres Temelleri, Makine Temelleri ve Saha Betonları",
    },
    {
      key: "orion-fabrika",
      displayName: "BİLECİK İL ÖZEL İDARESİ",
      subtitle: "Bilecik Gölpazarı Şehit Kemal Ay Lisesi Yapımı",
    },
    {
      key: "vertex-yapi",
      displayName: "BİLECİK / GÖLPAZARI",
      subtitle:
        "21 Derslikli İmam Hatip Lisesi, 100 Öğrenci KapasiteliPansiyon Binası, Tatbikat Camii ve Çevre Düzenlemesi Yapım İşi",
    },
    {
      key: "polaris-grup",
      displayName: "VALİLİK (YİKOP) İÇİŞLERİ BAKANLIĞI MÜSTEŞARLIK",
      subtitle:
        "Eskişehir Çankaya İlk Öğretim Okulu ve Çevre Düzenlemesi Yapımı",
    },
    {
      key: "atlas-seramik",
      displayName: "AFYON İL ÖZEL İDARESİ",
      subtitle: "Bolvadin 24 Derslikli Teknik Lise Yapımı ve Çevre Düzenlemesi",
    },
    {
      key: "meridyen-yapi",
      displayName: "BOZÜYÜK BELEDİYESİ",
      subtitle: "Akpınar Mahalle Konağı Yapım İşi",
    },
    {
      key: "zenit-insaat",
      displayName: "BOZÜYÜK BELEDİYESİ",
      subtitle: "Yediler Mahalle Konağı Yapım İşi",
    },
    {
      key: "kuzey-grup",
      displayName: "TEPEBAŞI BELEDİYESİ / ESKİŞEHİR",
      subtitle:
        "Tepebaşı Belediyesi Sınırları İçerisinde Halı Sahalar ve Tesis Binaları Yapım İşi",
    },

    {
      key: "zenit-insaat",
      displayName: "BOZÜYÜK BELEDİYESİ",
      subtitle: "Hal Meydanı ve Cumhuriyet Meydanı Projesi",
    },
  ],

  home: {
    meta: {
      title: "MSÇ İnşaat | Anahtar Teslim Fabrika, Taahhüt ve Yapı Çözümleri",
      description:
        "MSÇ İnşaat; anahtar teslim fabrika, taahhüt, devlet ihaleleri, yap-sat, seramik satışı ve dekorasyon alanlarında profesyonel yapı çözümleri sunar.",
    },

    heroSlides: [
      {
        kicker: "Anahtar Teslim Yapı Uzmanlığı",
        title: "Fabrika, taahhüt ve modern yapı projelerinde",
        titleHighlight: "güvenilir çözüm ortağınız.",
        description:
          "MSÇ İnşaat; planlamadan uygulamaya, malzeme seçiminden teslim sürecine kadar her aşamada kontrollü, şeffaf ve kaliteli yapı hizmeti sunar.",
        buttons: [
          { label: "Hizmetleri İncele", href: "/hizmetlerimiz" },
          { label: "Projelerimizi Gör", href: "/projelerimiz" },
        ],
        card: {
          label: "Aktif Proje Planı",
          value: "360°",
          text: "Keşif, projelendirme, uygulama ve teslim süreci.",
          progress: 86,
        },
      },
      {
        kicker: "Taahhüt ve Saha Yönetimi",
        title: "Güçlü saha organizasyonu ile",
        titleHighlight: "zamanında teslim edilen projeler.",
        description:
          "Endüstriyel yapılar, ticari alanlar, kamu projeleri ve özel inşaat süreçlerinde teknik disiplin, kaliteli işçilik ve doğru planlama ile ilerliyoruz.",
        buttons: [
          { label: "Projenizi Anlatın", href: "/iletisim" },
          { label: "Sürecimiz", href: "#surec" },
        ],
        card: {
          label: "Saha Kontrolü",
          value: "7/24",
          text: "Planlama, metraj, ekip koordinasyonu ve kalite kontrol takibi.",
          progress: 92,
        },
      },
      {
        kicker: "Dekorasyon ve Seramik Çözümleri",
        title: "Yapının ruhunu tamamlayan",
        titleHighlight: "estetik ve fonksiyonel detaylar.",
        description:
          "Seramik satışı, iç mekân dekorasyonu, zemin-duvar uygulamaları ve yaşam alanı düzenlemelerinde modern, kaliteli ve uzun ömürlü çözümler üretiyoruz.",
        buttons: [
          { label: "Seramik Çözümleri", href: "/hizmetlerimiz#seramik" },
          { label: "Hemen İletişime Geç", href: "/iletisim" },
        ],
        card: {
          label: "Tasarım Odaklı",
          value: "Premium",
          text: "Malzeme, renk, uygulama ve mimari uyum desteği.",
          progress: 78,
        },
      },
    ],

    referencesSection: {
      kicker: "Referanslarımız",
      title: "Bizi tercih eden",
      titleHighlight: "kurum ve markalar.",
      description:
        "Fabrika, taahhüt, yap-sat, seramik ve dekorasyon projelerinde birlikte çalıştığımız iş ortaklarımız.",
      ctaLabel: "Tümünü Gör",
      ctaHref: "/referanslarimiz",
    },

    stats: [
      { value: 120, label: "Tamamlanan Uygulama", icon: "building-2" },
      { value: 45, label: "Aktif Ekip Kapasitesi", icon: "hard-hat" },
      { value: 98, label: "Müşteri Memnuniyeti", icon: "handshake" },
      { value: 15, label: "Yıllık Saha Deneyimi", icon: "calendar-check" },
    ],

    aboutPreview: {
      kicker: "MSÇ İnşaat Hakkında",
      title: "Projeyi sadece inşa etmiyor,",
      titleHighlight: "doğru süreçle yönetiyoruz.",
      description:
        "MSÇ İnşaat olarak her projede önce ihtiyacı doğru analiz ederiz. Ardından keşif, metraj, bütçe, ekip ve uygulama planını tek bir süreç altında toplarız. Böylece müşterilerimiz neyin, ne zaman ve nasıl yapılacağını net şekilde görür.",
      features: [
        "Anahtar teslim fabrika ve ticari yapı çözümleri",
        "Taahhüt, kamu ihalesi ve özel proje uygulamaları",
        "Dekorasyon, seramik ve ince işçilik hizmetleri",
      ],
      experienceYears: "15+",
      experienceLabel: "Yıllık yapı ve uygulama deneyimi",
      badge: "Kontrollü teslim süreci",
      ctaLabel: "Kurumsal Yapımızı İncele",
    },

    servicesSection: {
      kicker: "Hizmet Alanlarımız",
      title: "Her yapı ihtiyacına özel",
      titleHighlight: "profesyonel çözüm.",
      description:
        "Fabrika projelerinden dekorasyon uygulamalarına kadar geniş kapsamlı inşaat ve yapı hizmetleri sunuyoruz.",
      ctaLabel: "Detaylı İncele",
    },

    services: [
      {
        title: "Anahtar Teslim Fabrika",
        description:
          "Planlama, kaba yapı, ince işçilik, mekanik ve teslim süreçlerini tek elden yönetiyoruz.",
        href: "/hizmetlerimiz#fabrika",
        icon: "factory",
        image:
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
      },
      {
        title: "Taahhüt",
        description:
          "Kamu, ticari ve özel projelerde sözleşmeye bağlı, kontrollü ve kaliteli uygulama yapıyoruz.",
        href: "/hizmetlerimiz#taahhut",
        icon: "hard-hat",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        title: "Devlet İhaleleri",
        description:
          "İhale süreçlerine uygun metraj, uygulama, saha yönetimi ve teslim disiplini sağlıyoruz.",
        href: "/hizmetlerimiz#ihale",
        icon: "landmark",
        image:
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
      },
      {
        title: "Yap-Sat",
        description:
          "Arsa değerlendirme, proje geliştirme, inşaat ve satışa hazır yaşam alanı üretimi.",
        href: "/hizmetlerimiz#yapsat",
        icon: "building",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      },
      {
        title: "Seramik Satışı",
        description:
          "Zemin, duvar, banyo, mutfak ve dış cephe için kaliteli seramik ürün alternatifleri.",
        href: "/hizmetlerimiz#seramik",
        icon: "grid-3x3",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
      {
        title: "Dekorasyon",
        description:
          "İç mekânlarda modern, kullanışlı ve estetik dekorasyon uygulamaları geliştiriyoruz.",
        href: "/hizmetlerimiz#dekorasyon",
        icon: "paintbrush",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      },
    ],

    process: {
      kicker: "Çalışma Sürecimiz",
      title: "Projenizi adım adım",
      titleHighlight: "kontrollü şekilde ilerletiyoruz.",
      steps: [
        {
          number: "01",
          title: "Keşif ve İhtiyaç Analizi",
          description:
            "Alan, ihtiyaç, kullanım amacı ve bütçe dengesini analiz ederek doğru proje temelini oluştururuz.",
        },
        {
          number: "02",
          title: "Metraj ve Planlama",
          description:
            "Malzeme, ekip, süre ve uygulama kalemlerini netleştirerek şeffaf bir yol haritası çıkarırız.",
        },
        {
          number: "03",
          title: "Saha Uygulaması",
          description:
            "İş güvenliği, kalite kontrol ve teknik standartlara uygun şekilde sahada uygulama yaparız.",
        },
        {
          number: "04",
          title: "Teslim ve Destek",
          description:
            "Projeyi kontrollü şekilde teslim eder, ihtiyaç halinde bakım ve revizyon desteği sağlarız.",
        },
      ],
    },

    marquee: [
      "MSÇ İnşaat",
      "Anahtar Teslim Fabrika",
      "Taahhüt",
      "Yap-Sat",
      "Seramik",
      "Dekorasyon",
    ],

    projectsPreview: {
      kicker: "Proje Ön İzlemeleri",
      title: "Sahada karşılığı olan",
      titleHighlight: "güçlü uygulamalar.",
      description:
        "Referans niteliğinde örnek proje kartlarını aşağıda görebilirsin. Gerçek projeler eklendiğinde bu alan çok daha güçlü duracak.",
      filters: [
        { label: "Tümü", value: "all" },
        { label: "Fabrika", value: "fabrika" },
        { label: "Yap-Sat", value: "konut" },
        { label: "Dekorasyon", value: "dekorasyon" },
        { label: "Seramik", value: "seramik" },
      ],
      ctaLabel: "Projeyi Gör",
      projects: [
        {
          category: "konut",
          tag: "Yap-Sat",
          title: "MSÇ 1 BİNA",
          description: "Anahtar Teslim Bina Yapımı.",
          image: "/msc11.webp",
        },
        {
          category: "konut",
          tag: "Yap-Sat",
          title: "Msç 2 Bina",
          description: "Anahtar Teslim Bina Yapımı",
          image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        },
        {
          category: "Konut",
          tag: "Yap-Sat",
          title: "MSÇ 3",
          description: "Anahtar Teslim Bina Yapımı",
          image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        },

        {
          category: "Depo",
          tag: "Depo",
          title: "MSÇ Seramik Depo",
          description: "Anahtar Teslim Depo Yapımı",
          image: "/depo.webp",
        },

        {
          category: "Showroom",
          tag: "Showroom",
          title: "Termal Seramik Showroom",
          description: "Showroom Yapımı",
          image: "/showroom.webp",
        },

        {
          category: "Proje",
          tag: "Söğüt Saat Kulesi",
          title: "Söğüt Saat Kulesi",
          description: "Söğüt Saat Kulesi Yapımı",
          image: "/saatkule.webp",
        },

        {
          category: "Otel",
          tag: "Söğüt Termal Seramik Butik Otel",
          title: "Söğüt Termal Seramik Butik Otel",
          description: "Otel Yapımı",
          image: "/otel.webp",
        },

        {
          category: "Devlet",
          tag: "Boztram Bakım Atölyesi",
          title: "Boztram Bakım Atölyesi",
          description: "Bozüyük Belediyesi Boztram Bakım Atölyesi",
          image: "/boztram.webp",
        },

        {
          category: "Devlet",
          tag: "Akpınar Mahalle Konağı",
          title: "Akpınar Mahalle Konağı",
          description: "Bozüyük Belediyesi Mahalle Konağı Yapımı",
          image: "/akpkonak.webp",
        },
      ],
    },

    cta: {
      kicker: "Projeniz İçin İlk Adımı Atın",
      title:
        "Yeni bir yapı, fabrika veya dekorasyon projesi mi planlıyorsunuz?",
      description:
        "Keşif, metraj, uygulama ve teslim süreci için MSÇ İnşaat ekibiyle iletişime geçin.",
      ctaLabel: "Teklif Talebi Oluştur",
    },

    faq: {
      kicker: "Sık Sorulan Sorular",
      title: "Başlamadan önce",
      titleHighlight: "merak edilenler.",
      description:
        "Proje süreci, keşif, teklif ve uygulama aşamaları hakkında sık sorulan bazı soruları burada yanıtladık.",
      items: [
        {
          question: "Keşif hizmeti nasıl ilerliyor?",
          answer:
            "Ön görüşme sonrası ihtiyaçlarınızı dinler, proje alanını değerlendirir ve uygulanabilir bir yol haritası oluştururuz.",
        },
        {
          question: "Anahtar teslim fabrika projesi yapıyor musunuz?",
          answer:
            "Evet. Planlama, kaba yapı, ince işçilik, çevre düzenleme ve teslim aşamalarını bütüncül şekilde ele alıyoruz.",
        },
        {
          question: "Seramik satışı ve uygulaması birlikte yapılabilir mi?",
          answer:
            "Evet. Seramik ürün seçimi, tedarik, uygulama ve son kontrol süreçlerinde destek sağlıyoruz.",
        },
        {
          question: "Teklif almak için ne yapmalıyım?",
          answer:
            "İletişim sayfasındaki formu doldurabilir veya WhatsApp butonundan doğrudan bize ulaşabilirsiniz.",
        },
      ],
    },

    contactPreview: {
      kicker: "İletişime Geç",
      title: "Projenizi konuşalım,",
      titleHighlight: "doğru çözümü birlikte planlayalım.",
      description:
        "Formu doldurduktan sonra ekibimiz sizinle iletişime geçerek ihtiyaçlarınıza uygun bir ön değerlendirme yapar.",
      formServiceOptions: [
        "Anahtar Teslim Fabrika",
        "Taahhüt",
        "Devlet İhaleleri",
        "Yap-Sat",
        "Seramik Satışı",
        "Dekorasyon",
      ],
      form: {
        nameLabel: "Ad Soyad",
        namePlaceholder: "Adınızı yazın",
        phoneLabel: "Telefon",
        phonePlaceholder: "+90 532 155 58 11",
        serviceLabel: "İlgilendiğiniz Hizmet",
        selectPlaceholder: "Seçiniz",
        messageLabel: "Mesajınız",
        messagePlaceholder: "Projenizi kısaca anlatın",
        submitLabel: "Formu Gönder",
      },
    },
  },

  hakkimizda: {
    meta: {
      title: "Hakkımızda | MSÇ İnşaat",
      description:
        "MSÇ İnşaat hakkında bilgi alın. Anahtar teslim fabrika, taahhüt, yap-sat, devlet ihaleleri, seramik satışı ve dekorasyon alanlarında profesyonel yapı çözümleri.",
    },

    hero: {
      kicker: "MSÇ İnşaat Kurumsal",
      title: "Yapıyı sadece inşa etmiyor,",
      titleHighlight: "güven veren bir sürece dönüştürüyoruz.",
      description:
        "MSÇ İnşaat; anahtar teslim fabrika, taahhüt, devlet ihaleleri, yap-sat, seramik satışı ve dekorasyon alanlarında güçlü saha disipliniyle ilerleyen profesyonel bir yapı çözüm markasıdır.",
      visualLabel: {
        title: "Planlı Süreç",
        text: "Keşiften teslimata kadar kontrollü yönetim",
      },
      floatingStat: { value: 15, label: "Yıllık saha deneyimi" },
    },

    summary: [
      {
        title: "Doğru Planlama",
        description:
          "Her projeye başlamadan önce ihtiyaç, bütçe, metraj ve uygulama sürecini netleştiriyoruz.",
        icon: "compass",
      },
      {
        title: "Güçlü Saha Yönetimi",
        description:
          "Ekip, malzeme, zaman ve kalite kontrol adımlarını sahada disiplinli şekilde takip ediyoruz.",
        icon: "hard-hat",
      },
      {
        title: "Şeffaf İletişim",
        description:
          "Müşterilerimizin süreç boyunca bilgi sahibi olmasını ve güvenle ilerlemesini önemsiyoruz.",
        icon: "handshake",
      },
    ],

    story: {
      kicker: "Biz Kimiz?",
      title: "Temelinde güven,",
      titleHighlight: "detayında kalite olan projeler üretiyoruz.",
      paragraphs: [
        "MSÇ İnşaat olarak yapı sektöründe yalnızca uygulama yapan bir firma olmanın ötesinde, proje sürecinin tamamına hâkim olan bir çözüm ortağı olmayı hedefliyoruz. Her yapının; doğru analiz, doğru ekip, doğru malzeme ve doğru zaman yönetimiyle değer kazandığına inanıyoruz.",
        "Fabrika projelerinden konut geliştirmeye, devlet ihalelerinden seramik ve dekorasyon çözümlerine kadar geniş bir hizmet yelpazesinde çalışıyoruz. Her projede müşterimizin beklentisini netleştiriyor, uygulanabilir ve sürdürülebilir çözümler geliştiriyoruz.",
      ],
      imageOverlay: {
        label: "MSÇ İnşaat",
        text: "Güven, kalite ve kontrollü üretim.",
      },
      checks: [
        "Anahtar teslim uygulama kabiliyeti",
        "Saha ve ekip koordinasyonu",
        "Malzeme ve kalite kontrolü",
        "Teslim sonrası destek yaklaşımı",
      ],
    },

    missionVision: {
      kicker: "Vizyon ve Misyon",
      title: "Bugünün ihtiyacını karşılarken",
      titleHighlight: "yarının yapısını düşünüyoruz.",
      description:
        "MSÇ İnşaat için başarı yalnızca projeyi tamamlamak değildir. Başarı; zamanında, güvenli, kaliteli ve uzun ömürlü yapılar ortaya koymaktır.",
      vision: {
        title: "Vizyonumuz",
        description:
          "Yapı sektöründe güvenilirliği, kaliteli işçiliği ve süreç yönetimini ön plana çıkaran; endüstriyel, ticari ve yaşam alanı projelerinde tercih edilen güçlü bir marka olmak.",
        items: [
          "Güven veren proje yönetimi",
          "Uzun ömürlü yapı anlayışı",
          "Modern uygulama disiplini",
        ],
      },
      mission: {
        title: "Misyonumuz",
        description:
          "Her projede müşterinin ihtiyacını doğru analiz ederek; kaliteli malzeme, profesyonel ekip ve kontrollü saha yönetimiyle sürdürülebilir yapı çözümleri sunmak.",
        items: [
          "Şeffaf teklif ve planlama",
          "Teknik standartlara uygun uygulama",
          "Zamanında ve kontrollü teslim",
        ],
      },
    },

    values: {
      kicker: "Değerlerimiz",
      title: "Her projede aynı ciddiyet,",
      titleHighlight: "aynı kalite standardı.",
      items: [
        {
          number: "01",
          title: "Güven",
          description:
            "Süreç boyunca net bilgi, doğru yönlendirme ve gerçekçi planlama ile müşterilerimize güven veririz.",
          icon: "shield",
        },
        {
          number: "02",
          title: "Kalite",
          description:
            "Malzeme seçiminden uygulama detayına kadar her aşamada uzun ömürlü sonuç hedefleriz.",
          icon: "medal",
        },
        {
          number: "03",
          title: "Zaman Yönetimi",
          description:
            "Projeleri belirlenen takvime göre ilerletir, gecikmeleri önleyecek saha planları oluştururuz.",
          icon: "clock",
        },
        {
          number: "04",
          title: "Ekip Disiplini",
          description:
            "Usta, teknik ekip, tedarik ve saha sorumlularını aynı hedef doğrultusunda koordine ederiz.",
          icon: "users",
        },
      ],
    },

    approach: {
      kicker: "Çalışma Yaklaşımımız",
      title: "Her projeyi ölçer,",
      titleHighlight: "planlar ve kontrollü şekilde uygularız.",
      description:
        "İnşaat sürecinde en büyük farkı detaylı hazırlık oluşturur. Bu yüzden projeye başlamadan önce ihtiyacı, alanı, malzemeyi, bütçeyi ve teslim hedefini netleştiririz. Böylece hem müşteri hem saha ekibi aynı plana göre ilerler.",
      progress: [
        { label: "Planlama Başarısı", value: 92 },
        { label: "Saha Koordinasyonu", value: 88 },
        { label: "Kalite Kontrol", value: 95 },
      ],
      floatingBox: {
        title: "Saha Kontrol Ekibi",
        text: "Uygulama, metraj ve kalite takibi.",
      },
    },

    timeline: {
      kicker: "Proje Yönetim Mantığımız",
      title: "Bir projenin arkasında",
      titleHighlight: "görünmeyen güçlü bir sistem vardır.",
      steps: [
        {
          number: "01",
          title: "Ön Görüşme",
          description:
            "Projenin türünü, beklentileri, alan bilgilerini ve öncelikleri dinleyerek başlangıç verilerini toplarız.",
        },
        {
          number: "02",
          title: "Keşif ve Teknik Analiz",
          description:
            "Sahada veya proje üzerinden ölçüm, uygulanabilirlik, malzeme ve ekip ihtiyacını değerlendiririz.",
        },
        {
          number: "03",
          title: "Teklif ve İş Programı",
          description:
            "İş kalemleri, yaklaşık süre, uygulama planı ve bütçe detaylarını anlaşılır şekilde sunarız.",
        },
        {
          number: "04",
          title: "Uygulama ve Teslim",
          description:
            "Projeyi saha disipliniyle uygular, kalite kontrollerini yapar ve teslim sürecini tamamlarız.",
        },
      ],
    },

    numbers: [
      { value: 120, label: "Tamamlanan uygulama" },
      { value: 45, label: "Ekip ve çözüm ortağı kapasitesi" },
      { value: 98, label: "Müşteri memnuniyeti" },
      { value: 6, label: "Ana hizmet kategorisi" },
    ],

    whyUs: {
      kicker: "Neden MSÇ İnşaat?",
      title: "Çünkü iyi bir yapı,",
      titleHighlight: "iyi yönetilen bir süreçle başlar.",
      description:
        "İnşaatta kalite yalnızca kullanılan malzemeyle değil; doğru planlama, kontrollü işçilik, saha disiplini ve güvenilir iletişimle ortaya çıkar. MSÇ İnşaat olarak bu bütünlüğü her projede sağlamayı hedefliyoruz.",
      items: [
        {
          title: "Tek Elden Süreç Yönetimi",
          description: "Keşiften teslimata kadar tüm adımları koordine ederiz.",
        },
        {
          title: "Uygulanabilir Çözümler",
          description:
            "Gereksiz maliyet oluşturmadan ihtiyaca uygun çözümler üretiriz.",
        },
        {
          title: "Kalite Odaklı Teslim",
          description:
            "Projeyi bitirmek kadar doğru teslim etmeyi de önemseriz.",
        },
      ],
      blueprintCard: {
        title: "Blueprint Planlama",
        text: "Proje öncesi net analiz ve uygulama kurgusu.",
      },
    },

    cta: {
      kicker: "Projeniz İçin Hazırız",
      title:
        "Fabrika, taahhüt, yap-sat veya dekorasyon projenizi birlikte planlayalım.",
      description:
        "MSÇ İnşaat ile ihtiyaçlarınıza uygun, kontrollü ve kaliteli bir yapı süreci başlatabilirsiniz.",
    },
  },

  hizmetlerimiz: {
    meta: {
      title: "Hizmetlerimiz | MSÇ İnşaat",
      description:
        "MSÇ İnşaat hizmetleri: anahtar teslim fabrika, taahhüt, devlet ihaleleri, yap-sat, seramik satışı ve dekorasyon çözümleri.",
    },

    hero: {
      kicker: "MSÇ İnşaat Hizmetleri",
      title: "Yapı, uygulama ve dekorasyon süreçlerinde",
      titleHighlight: "uçtan uca çözüm sunuyoruz.",
      description:
        "MSÇ İnşaat olarak anahtar teslim fabrika, taahhüt, devlet ihaleleri, yap-sat, seramik satışı ve dekorasyon alanlarında projenize özel, planlı ve kaliteli çözümler geliştiriyoruz.",
      heroCard: {
        lines: [
          { label: "Anahtar Teslim", value: "Fabrika" },
          { label: "Profesyonel", value: "Taahhüt" },
          { label: "Modern", value: "Dekorasyon" },
        ],
        bottom: "Keşiften teslimata kadar kontrollü ve şeffaf proje yönetimi.",
      },
    },

    servicesSection: {
      kicker: "Hizmet Alanlarımız",
      title: "Her proje tipi için",
      titleHighlight: "net ve uygulanabilir hizmetler.",
      description:
        "İster fabrika projesi, ister konut geliştirme, ister dekorasyon veya seramik çözümü olsun; süreci doğru planlayıp kaliteli uygulama ile tamamlıyoruz.",
    },

    services: [
      {
        number: "01",
        title: "Anahtar Teslim Fabrika",
        description:
          "Fabrika projelerinde keşif, planlama, kaba yapı, ince işçilik ve teslim sürecini tek merkezden yönetiyoruz.",
        tags: ["Keşif", "Metraj", "Teslim"],
        cta: "Teklif Al",
        image:
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
      },
      {
        number: "02",
        title: "Taahhüt",
        description:
          "Kamu, özel sektör ve ticari projelerde sözleşmeye uygun, kontrollü ve kaliteli saha uygulamaları yapıyoruz.",
        tags: ["Saha", "Uygulama", "Kontrol"],
        cta: "Projeni Anlat",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      },
      {
        number: "03",
        title: "Devlet İhaleleri",
        description:
          "Teknik şartname, metraj, iş kalemi ve teslim kriterlerine uygun şekilde ihale projeleri yürütüyoruz.",
        tags: ["Şartname", "Metraj", "Teslim"],
        cta: "Bilgi Al",
        image:
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
      },
      {
        number: "04",
        title: "Yap-Sat",
        description:
          "Arsa değerlendirme, proje geliştirme ve satışa hazır yaşam alanı üretiminde profesyonel süreç yönetimi sağlıyoruz.",
        tags: ["Arsa", "Konut", "Satış"],
        cta: "Görüşelim",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      },
      {
        number: "05",
        title: "Seramik Satışı",
        description:
          "Banyo, mutfak, zemin ve duvar uygulamaları için kaliteli seramik ürün seçenekleri sunuyoruz.",
        tags: ["Zemin", "Banyo", "Mutfak"],
        cta: "Ürün Sor",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
      {
        number: "06",
        title: "Dekorasyon",
        description:
          "İç mekânlarda modern, estetik ve kullanışlı dekorasyon uygulamaları geliştiriyoruz.",
        tags: ["İç Mekân", "Tasarım", "Yenileme"],
        cta: "Başlayalım",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      },
    ],

    advantages: {
      kicker: "Hizmet Yaklaşımımız",
      title: "Sadece uygulama değil,",
      titleHighlight: "sürecin tamamını yönetiyoruz.",
      description:
        "İnşaatta kaliteli sonuç, doğru planlama ile başlar. Bu yüzden her hizmet alanında önce ihtiyacı anlar, sonra malzeme, ekip, zaman ve uygulama detaylarını planlarız.",
      items: [
        {
          title: "Keşif ve Metraj",
          description:
            "İşe başlamadan önce kapsam, ölçü ve ihtiyaçlar netleştirilir.",
        },
        {
          title: "Saha Yönetimi",
          description:
            "Ekip, malzeme ve uygulama takvimi kontrollü şekilde ilerletilir.",
        },
        {
          title: "Kalite Kontrol",
          description:
            "İşçilik, malzeme ve teslim süreci belirli standartlara göre kontrol edilir.",
        },
      ],
    },

    process: {
      kicker: "Çalışma Sürecimiz",
      title: "Projeniz için sade,",
      titleHighlight: "anlaşılır ve kontrollü bir yol haritası.",
      steps: [
        {
          number: "01",
          title: "Ön Görüşme",
          description:
            "İhtiyacınızı, proje tipini ve beklentilerinizi öğreniriz.",
        },
        {
          number: "02",
          title: "Planlama",
          description:
            "Keşif, metraj, malzeme ve uygulama sürecini netleştiririz.",
        },
        {
          number: "03",
          title: "Uygulama",
          description:
            "Saha ekibiyle kontrollü ve düzenli uygulama sürecine geçeriz.",
        },
        {
          number: "04",
          title: "Teslim",
          description: "Son kontrolleri tamamlayarak projeyi teslim ederiz.",
        },
      ],
    },

    cta: {
      kicker: "Projenizi Planlayalım",
      title:
        "Hangi hizmete ihtiyacınız varsa doğru çözümü birlikte oluşturalım.",
      description:
        "MSÇ İnşaat ile projenizi keşif, planlama, uygulama ve teslim aşamalarıyla güvenle başlatabilirsiniz.",
    },
  },

  projelerimiz: {
    meta: {
      title: "Projelerimiz | MSÇ İnşaat",
      description:
        "MSÇ İnşaat projeleri: fabrika, taahhüt, yap-sat, seramik ve dekorasyon alanlarında tamamlanan örnek projeler.",
    },

    hero: {
      kicker: "MSÇ İnşaat Proje Galerisi",
      title: "Sahada karşılığı olan,",
      titleHighlight: "güven veren projeler üretiyoruz.",
      description:
        "Fabrika, taahhüt, yap-sat, seramik ve dekorasyon alanlarında planlı ilerleyen, kaliteli uygulama ile tamamlanan proje örneklerimizi inceleyin.",
      panel: {
        label: "Aktif Proje Yaklaşımı",
        value: 120,
        valueLabel: "Tamamlanan uygulama ve saha deneyimi",
        items: [
          "Fabrika & endüstriyel yapılar",
          "Konut ve yap-sat uygulamaları",
          "Seramik ve dekorasyon projeleri",
        ],
      },
    },

    featured: {
      kicker: "Proje Vitrini",
      badge: "Öne Çıkan Proje",
      title: "Endüstriyel yapıdan ince işçiliğe kadar",
      titleHighlight: "uçtan uca kontrol edilen süreç.",
      description:
        "Bu örnek proje alanı, MSÇ İnşaat'ın proje yaklaşımını göstermek için hazırlandı. Gerçek proje görselleri ve bilgiler eklendiğinde burada firmanın en güçlü referanslarından biri etkileyici şekilde sunulabilir.",
      meta: [
        { label: "Proje Tipi", value: "Anahtar Teslim Uygulama" },
        { label: "Kapsam", value: "Planlama, kaba yapı, ince işçilik" },
        { label: "Teslim", value: "Kontrollü saha yönetimi" },
      ],
      ctaLabel: "Benzer Proje İçin Teklif Al",
    },

    marquee: [
      "Fabrika Projeleri",
      "Taahhüt Uygulamaları",
      "Yap-Sat Konutları",
      "Seramik Çözümleri",
      "Dekorasyon Projeleri",
      "MSÇ İnşaat",
    ],

    gallery: {
      kicker: "Proje Galerisi",
      title: "Proje türüne göre",
      titleHighlight: "çalışmalarımızı keşfedin.",
      description:
        "Aşağıdaki proje kartları örnek içeriklerle hazırlanmıştır. Gerçek proje fotoğrafları ve açıklamalarıyla kolayca güncelleyebilirsiniz.",
      filters: [
        { label: "Tümü", value: "all" },
        { label: "Fabrika", value: "fabrika" },
        { label: "Taahhüt", value: "taahhut" },
        { label: "Yap-Sat", value: "yapsat" },
        { label: "Seramik", value: "seramik" },
        { label: "Dekorasyon", value: "dekorasyon" },
      ],
      // "Detay Gör" modalindeki sabit etiketler
      detail: {
        cardCtaLabel: "Detay Gör",
        locationLabel: "Konum",
        yearLabel: "Yıl",
        projectCtaLabel: "Projeye Git",
      },
      // Her projenin "Detay Gör" ile açılan modal içeriği buradan yönetilir:
      // location (Konum), year (Yıl) ve detailHref ("Projeye Git" bağlantısı).
      projects: [
        {
          category: "Bina",
          tag: "Bina",
          title: "MSÇ 1 ",
          description:
            "Üretim ihtiyacına göre planlanan geniş açıklıklı fabrika yapısı, saha yönetimi ve teslim süreci.",
          tags: ["Planlama", "Kaba Yapı", "Teslim"],
          image: "/msc11.webp",
          location: "Söğüt",
          year: "2026",
          slug: "endustriyel-uretim-tesisi",
        },
        {
          category: "Bina",
          tag: "Bina",
          title: "MSÇ 2",
          description:
            "Üretim ihtiyacına göre planlanan geniş açıklıklı fabrika yapısı, saha yönetimi ve teslim süreci.",
          tags: ["Planlama", "Kaba Yapı", "Teslim"],
          image: "/msc222.webp",
          location: "Söğüt",
          year: "2026",
          slug: "ticari-alan-uygulamasi",
        },
        {
          category: "Bina",
          tag: "Bina",
          title: "MSÇ 3",
          description:
            "Üretim ihtiyacına göre planlanan geniş açıklıklı fabrika yapısı, saha yönetimi ve teslim süreci.",
          tags: ["Konut", "Mimari", "Yaşam"],
          image: "/msc333.webp",
          location: "Söğüt",
          year: "2026",
          slug: "modern-konut-projesi",
        },
        {
          category: "Depo",
          tag: "Depo",
          title: "MSÇ Seramik Depo",
          description: "Söğütte Yapılan MSÇ Seramik Deposu",
          tags: ["Zemin", "Banyo", "Mutfak"],
          image: "/depo.webp",
          location: "Söğüt",
          year: "2026",
          slug: "premium-seramik-uygulamasi",
        },
        {
          category: "Showroom",
          tag: "Showroom",
          title: "Termal Seramik Showroom",
          description:
            "Renk, malzeme, zemin, duvar ve aydınlatma detaylarıyla yenilenen modern  mekân çalışması.",
          tags: ["İç Mekân", "Tasarım", "Yenileme"],
          image: "/showroom.webp",
          location: "Söğüt",
          year: "2026",
          slug: "ic-mekan-yenileme",
        },
        {
          category: "Devlet",
          tag: "Devlet",
          title: "Söğüt Saat Kulesi",
          description:
            "Söğüt'ün simgesi olan saat kulesinin yapılması ve şehre katılması",
          tags: ["Depo", "Üretim", "Alan"],
          image: "/saatkule.webp",
          location: "Söğüt",
          year: "2026",
          slug: "depo-ve-uretim-alani",
        },
        {
          category: "Otel",
          tag: "Otel",
          title: "Termal Seramik Butik Otel",
          description: "Söğüt'te anahtar teslim butik otel yapımı",
          tags: ["Şartname", "Uygulama", "Teslim"],
          image: "/otel.webp",
          location: "Söğüt",
          year: "2026",
          slug: "kamu-uygulama-alani",
        },
        {
          category: "Devlet",
          tag: "Cumhuriyet Meydanı",
          title: "Cumhuriyet Meydanı",
          description:
            "Şehrin en önemli noktasının revize edilmesi ve halka sunulması",
          tags: ["Plan", "Cephe", "Satış"],
          image: "/cumhu.webp",
          location: "Bozüyük",
          year: "2026",
          slug: "satisa-hazir-yasam-alani",
        },
        {
          category: "Devlet",
          tag: "Hal Meydanı",
          title: "Hal Meydanı",
          description:
            "Şehrin en büyük ticaret alanının a'dan z'ye yapılması ve halka sunulması",
          tags: ["Meydan", "Modern", "Fonksiyon"],
          image: "/halmeydan.webp",
          location: "Bozüyük",
          year: "2026",
          slug: "ofis-dekorasyon-projesi",
        },

        {
          category: "Devlet",
          tag: "Atölye",
          title: " Boztram Bakım Atöylesi",
          description: "Bakım Atölyesinin Yapımı",
          tags: ["Atölye", "Modern", "Fonksiyon"],
          image: "/boztram.webp",
          location: "Bozüyük",
          year: "2026",
          slug: "ofis-dekorasyon-projesi",
        },

        {
          category: "Devlet",
          tag: "Mahalle Konağı",
          title: " Akpınar Mahalle Konağı",
          description:
            "Tüm kapsamıyla mahalle konağının yapım süreci ve halka teslimi",
          tags: ["Konak", "Modern", "Fonksiyon"],
          image: "/akpkonak.webp",
          location: "Bozüyük",
          year: "2026",
          slug: "ofis-dekorasyon-projesi",
        },

        {
          category: "Devlet",
          tag: "Mahalle Konağı",
          title: " Yediler Mahalle Konağı",
          description:
            "Tüm kapsamıyla mahalle konağının yapım süreci ve halka teslimi",
          tags: ["Konak", "Modern", "Fonksiyon"],
          image: "/konaky.webp",
          location: "Bozüyük",
          year: "2026",
          slug: "ofis-dekorasyon-projesi",
        },
      ],
    },

    approach: {
      kicker: "Proje Yaklaşımımız",
      title: "Güçlü sonuçlar,",
      titleHighlight: "doğru proje yönetimiyle başlar.",
      description:
        "Her proje kendi içinde farklı ihtiyaçlara sahiptir. Bu yüzden MSÇ İnşaat olarak ilk aşamada alanı, kullanım amacını, bütçeyi, malzeme ihtiyacını ve teslim hedefini birlikte değerlendiririz.",
      items: [
        {
          title: "Ölçülebilir Planlama",
          text: "Metraj, malzeme ve iş kalemleri netleştirilir.",
        },
        {
          title: "Kontrollü Saha Yönetimi",
          text: "Ekip, zaman ve kalite adımları takip edilir.",
        },
        {
          title: "Teslim Odaklı Uygulama",
          text: "Proje teslimi öncesi kalite kontrolleri yapılır.",
        },
      ],
      floatingCard: {
        title: "360° Proje Takibi",
        text: "Keşif, planlama, uygulama ve teslim.",
      },
    },

    process: {
      kicker: "Proje Süreci",
      title: "Bir projenin arkasında",
      titleHighlight: "güçlü bir iş akışı vardır.",
      steps: [
        {
          number: "01",
          title: "İhtiyaç Analizi",
          description:
            "Projenin hedefi, kapsamı ve beklentileri netleştirilir.",
        },
        {
          number: "02",
          title: "Teknik Planlama",
          description: "Metraj, malzeme, ekip ve uygulama adımları çıkarılır.",
        },
        {
          number: "03",
          title: "Saha Uygulaması",
          description:
            "Belirlenen takvime göre kontrollü uygulama süreci başlar.",
        },
        {
          number: "04",
          title: "Teslim ve Kontrol",
          description:
            "Son kontroller yapılır ve proje teslim süreci tamamlanır.",
        },
      ],
    },

    numbers: [
      { value: 120, label: "Tamamlanan uygulama" },
      { value: 6, label: "Ana hizmet kategorisi" },
      { value: 98, label: "Müşteri memnuniyeti" },
      { value: 15, label: "Yıllık saha deneyimi" },
    ],

    cta: {
      kicker: "Sıradaki Proje Sizin Olabilir",
      title:
        "Fabrika, konut, dekorasyon veya taahhüt projenizi birlikte planlayalım.",
      description:
        "MSÇ İnşaat ile projenizi keşif, planlama, uygulama ve teslim aşamalarıyla güvenli şekilde başlatabilirsiniz.",
    },
  },

  referanslarimiz: {
    meta: {
      title: "Referanslarımız | MSÇ İnşaat",
      description:
        "MSÇ İnşaat referansları: fabrika, taahhüt, yap-sat, seramik ve dekorasyon projelerinde güven veren iş ortaklıkları.",
    },

    hero: {
      kicker: "Güven Veren İş Ortaklıkları",
      title: "Tamamlanan her proje,",
      titleHighlight: "bizim için güçlü bir referanstır.",
      description:
        "MSÇ İnşaat olarak fabrika, taahhüt, yap-sat, seramik ve dekorasyon alanlarında müşterilerimize planlı, kaliteli ve güvenilir yapı çözümleri sunuyoruz.",
      trustPanel: {
        value: 98,
        label: "Müşteri memnuniyeti odaklı süreç yönetimi",
        items: [
          "Şeffaf teklif ve planlama",
          "Kontrollü saha yönetimi",
          "Kalite odaklı teslim",
        ],
      },
    },

    referencesSection: {
      kicker: "Referanslarımız",
      title: "Bizi tercih eden",
      titleHighlight: "kurum ve markalar.",
      description:
        "Fabrika, taahhüt, yap-sat, seramik ve dekorasyon projelerinde birlikte çalıştığımız iş ortaklarımız.",
    },

    stats: [
      { value: 120, label: "Tamamlanan uygulama" },
      { value: 45, label: "Ekip ve çözüm ortağı kapasitesi" },
      { value: 15, label: "Yıllık saha deneyimi" },
      { value: 6, label: "Ana hizmet kategorisi" },
    ],

    referenceAreas: {
      kicker: "Referans Alanlarımız",
      title: "Farklı sektörlerde",
      titleHighlight: "güvenilir çözüm ortağı.",
      description:
        "Gerçek müşteri logoları eklendiğinde bu alan direkt marka referans vitrini gibi çalışır. Şimdilik kurumsal alanları temsil eden premium kartlarla hazırlandı.",
      items: [
        {
          number: "01",
          title: "Endüstriyel Tesisler",
          description: "Fabrika, depo ve üretim alanı projeleri.",
          icon: "factory",
        },
        {
          number: "02",
          title: "Kamu ve İhale Projeleri",
          description: "Şartnameye uygun taahhüt uygulamaları.",
          icon: "landmark",
        },
        {
          number: "03",
          title: "Konut Geliştirme",
          description: "Yap-sat ve yaşam alanı projeleri.",
          icon: "building",
        },
        {
          number: "04",
          title: "Ticari Alanlar",
          description: "Mağaza, ofis ve kurumsal alan uygulamaları.",
          icon: "store",
        },
        {
          number: "05",
          title: "Seramik Çözümleri",
          description: "Zemin, duvar, banyo ve mutfak uygulamaları.",
          icon: "grid-3x3",
        },
        {
          number: "06",
          title: "Dekorasyon Projeleri",
          description: "İç mekân yenileme ve tasarım uygulamaları.",
          icon: "paintbrush",
        },
      ],
    },

    marquee: [
      "Güvenilir Yapı Çözümleri",
      "Fabrika Projeleri",
      "Taahhüt Uygulamaları",
      "Yap-Sat",
      "Seramik",
      "Dekorasyon",
    ],

    projectTypes: {
      kicker: "Referans Proje Türleri",
      title: "Her proje türünde",
      titleHighlight: "aynı kalite ve süreç disiplini.",
      description:
        "MSÇ İnşaat için referans yalnızca tamamlanmış bir iş değildir. Referans; doğru planlanmış, kontrollü uygulanmış ve güvenle teslim edilmiş bir sürecin sonucudur.",
      progress: [
        { label: "Fabrika ve Endüstriyel Yapılar", value: 92 },
        { label: "Taahhüt ve Kamu Uygulamaları", value: 88 },
        { label: "Dekorasyon ve Seramik Çözümleri", value: 95 },
      ],
    },

    whyChosen: {
      kicker: "Neden Tercih Ediliyoruz?",
      title: "Çünkü projeyi yalnızca yapmıyor,",
      titleHighlight: "süreci güvenle yönetiyoruz.",
      items: [
        {
          number: "01",
          title: "Net Planlama",
          description:
            "İşe başlamadan önce kapsam, metraj, süre ve uygulama adımları anlaşılır şekilde belirlenir.",
          icon: "clipboard-check",
        },
        {
          number: "02",
          title: "Saha Disiplini",
          description:
            "Ekip, malzeme, işçilik ve kalite kontrol adımları düzenli şekilde takip edilir.",
          icon: "hard-hat",
        },
        {
          number: "03",
          title: "Şeffaf İletişim",
          description:
            "Müşteri süreç boyunca bilgilendirilir ve projenin ilerleyişi net şekilde aktarılır.",
          icon: "message-circle",
        },
        {
          number: "04",
          title: "Kaliteli Teslim",
          description:
            "Uygulama tamamlandıktan sonra son kontroller yapılır ve proje teslim edilir.",
          icon: "award",
        },
      ],
    },

    cta: {
      kicker: "Sizin Projeniz De Referansımız Olsun",
      title: "MSÇ İnşaat ile güven veren bir yapı süreci başlatın.",
      description:
        "Fabrika, taahhüt, yap-sat, seramik veya dekorasyon projenizi birlikte değerlendirelim.",
    },
  },

  iletisim: {
    meta: {
      title: "İletişim | MSÇ İnşaat",
      description:
        "MSÇ İnşaat ile iletişime geçin. Anahtar teslim fabrika, taahhüt, yap-sat, seramik ve dekorasyon projeleriniz için teklif alın.",
    },

    hero: {
      kicker: "MSÇ İnşaat İletişim",
      title: "Projenizi konuşalım,",
      titleHighlight: "doğru çözümü birlikte planlayalım.",
      description:
        "Fabrika, taahhüt, yap-sat, seramik veya dekorasyon projeniz için bizimle iletişime geçin. İhtiyacınızı analiz edelim, süreci netleştirelim ve size uygun yol haritasını oluşturalım.",
      radar: {
        center: { label: "MSÇ", sublabel: "Türkiye Geneli" },
        pins: [
          { label: "Fabrika" },
          { label: "Yap-Sat" },
          { label: "Dekorasyon" },
        ],
        bottom:
          "Projeniz nerede olursa olsun, ihtiyaçlarınıza uygun keşif ve planlama süreci oluşturuyoruz.",
      },
      radarTitle: "Hizmet Bölgelerimiz",
      fillButton: "Formu Doldur",
      whatsappButton: "WhatsApp",
    },

    channels: [
      {
        type: "phone",
        label: "Telefon",
        value: "+90 532 155 58 11",
        description:
          "Hızlı bilgi almak ve proje ön görüşmesi yapmak için bizi arayın.",
        icon: "phone",
      },
      {
        type: "whatsapp",
        label: "WhatsApp",
        value: "Hızlı Mesaj",
        description:
          "Proje detayınızı WhatsApp üzerinden bize direkt gönderebilirsiniz.",
        icon: "message-circle",
      },
      {
        type: "email",
        label: "E-posta",
        value: "info@mscinsaat.com",
        description:
          "Teklif, proje dosyası veya detaylı bilgi için e-posta gönderebilirsiniz.",
        icon: "mail",
      },
      {
        type: "location",
        label: "Hizmet Bölgesi",
        value: "Türkiye Geneli",
        description:
          "Projenin kapsamına göre farklı şehirlerde keşif ve uygulama desteği sağlıyoruz.",
        icon: "map-pin",
      },
    ],

    form: {
      kicker: "Teklif ve Ön Görüşme Formu",
      title: "Projenizi anlatın,",
      titleHighlight: "size en uygun çözümü hazırlayalım.",
      description:
        "Formu doldurduktan sonra bilgilerinizi WhatsApp mesajı olarak hazırlıyoruz. Böylece proje detayınız direkt bize ulaşır ve süreç daha hızlı başlar.",
      serviceOptions: [
        { label: "Fabrika", value: "Anahtar Teslim Fabrika" },
        { label: "Taahhüt", value: "Taahhüt" },
        { label: "İhale", value: "Devlet İhaleleri" },
        { label: "Yap-Sat", value: "Yap-Sat" },
        { label: "Seramik", value: "Seramik Satışı" },
        { label: "Dekorasyon", value: "Dekorasyon" },
      ],
      areaOptions: [
        "0 - 100 m²",
        "100 - 500 m²",
        "500 - 1.000 m²",
        "1.000 m² ve üzeri",
        "Henüz net değil",
      ],
      budgetOptions: [
        "Keşif sonrası netleşecek",
        "Orta ölçekli bütçe",
        "Geniş kapsamlı bütçe",
        "Sadece bilgi almak istiyorum",
      ],
      labels: {
        whatsappIntro: "Merhaba, ben",
        name: "Ad Soyad",
        namePlaceholder: "Adınızı yazın",
        phone: "Telefon",
        phonePlaceholder: "+90 532 155 58 11",
        email: "E-posta",
        emailPlaceholder: "ornek@mail.com",
        city: "Şehir / Konum",
        cityPlaceholder: "Örn: Bilecik, İstanbul...",
        service: "İlgilendiğiniz Hizmet",
        select: "Seçiniz",
        area: "Yaklaşık Proje Alanı",
        budget: "Bütçe Durumu",
        detail: "Proje Detayı",
        detailPlaceholder:
          "Projenizi, ihtiyaçlarınızı veya almak istediğiniz hizmeti kısaca anlatın...",
        submit: "WhatsApp ile Gönder",
        mailButton: "Mail ile yaz",
        progressTitle: "Form Tamamlanma Durumu",
        summaryTitle: "Canlı Form Özeti",
        notProvided: "Belirtilmedi",
        summary: {
          name: "Ad Soyad",
          phone: "Telefon",
          email: "E-posta",
          city: "Şehir",
          service: "Hizmet",
          area: "Proje Alanı",
          budget: "Bütçe",
        },
      },
    },

    workingHours: {
      kicker: "Çalışma ve Dönüş Süreci",
      title: "Mesajınızı aldıktan sonra",
      titleHighlight: "en kısa sürede dönüş sağlıyoruz.",
      description:
        "Projenizin kapsamına göre ön görüşme, keşif planlaması ve teklif değerlendirmesi için sizinle iletişime geçiyoruz.",
      hours: [
        { day: "Pazartesi - Cuma", time: "09:00 - 18:00" },
        { day: "Cumartesi", time: "09:00 - 15:00" },
        { day: "Pazar", time: "Kapalı" },
      ],
      responseNote: {
        title: "Hızlı dönüş için",
        text: "Hizmet türü, şehir, yaklaşık alan ve proje detayını formda belirtmeniz yeterlidir.",
      },
      mapInfo: {
        title: "Hizmet Bölgesi",
        text: "Türkiye Geneli Proje Desteği",
      },
    },

    contactFlow: {
      kicker: "İletişimden Teslime",
      title: "Bize ulaştıktan sonra",
      titleHighlight: "süreç nasıl ilerler?",
      steps: [
        {
          number: "01",
          title: "Mesajınızı Alırız",
          description:
            "Form, telefon veya WhatsApp üzerinden gönderdiğiniz talebi değerlendiririz.",
          icon: "message-square",
        },
        {
          number: "02",
          title: "Ön Görüşme Yaparız",
          description:
            "Proje kapsamı, alan, hizmet türü ve ihtiyaçlarınızı netleştiririz.",
          icon: "message-circle",
        },
        {
          number: "03",
          title: "Keşif Planlarız",
          description:
            "Gerekli ise sahada keşif, metraj ve uygulama planı oluştururuz.",
          icon: "ruler",
        },
        {
          number: "04",
          title: "Teklif Sunarız",
          description:
            "İş kalemlerine göre anlaşılır, şeffaf ve uygulanabilir teklif hazırlarız.",
          icon: "file-signature",
        },
      ],
    },

    faq: {
      kicker: "İletişim Hakkında",
      title: "Başlamadan önce",
      titleHighlight: "merak edilenler.",
      description:
        "Form, keşif, teklif ve iletişim süreci hakkında sık sorulan soruları burada cevapladık.",
      items: [
        {
          question: "Teklif almak için hangi bilgiler gerekli?",
          answer:
            "Hizmet türü, şehir, yaklaşık alan, proje detayı ve varsa görseller/planlar teklif sürecini hızlandırır.",
        },
        {
          question: "Keşif hizmeti nasıl planlanıyor?",
          answer:
            "Ön görüşme sonrası projenin kapsamına göre saha keşfi veya proje üzerinden değerlendirme yapılır.",
        },
        {
          question: "WhatsApp üzerinden proje detayı gönderebilir miyim?",
          answer:
            "Evet. Formu doldurduğunuzda bilgileriniz otomatik WhatsApp mesajına dönüştürülür.",
        },
        {
          question: "Türkiye genelinde hizmet veriyor musunuz?",
          answer:
            "Projenin kapsamına göre farklı şehirlerde keşif, planlama ve uygulama desteği sağlanabilir.",
        },
      ],
    },

    cta: {
      kicker: "İlk Adımı Atın",
      title: "Yeni projenizi MSÇ İnşaat ile güvenle başlatın.",
      description:
        "Bize ulaşın; projenizin ihtiyacını birlikte analiz edelim ve doğru uygulama sürecini planlayalım.",
    },
  },
};
