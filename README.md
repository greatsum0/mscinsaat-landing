# MSC Marka Sayfası

Next.js ile geliştirilmiş MSC marka sayfasıdır. Proje **statik site** olarak dışa aktarılır (`output: "export"`). Yani `next build` sonrası oluşan `out/` klasörü, Node.js gerektirmeyen herhangi bir web hosting'e (Natro, cPanel, Plesk, paylaşımlı hosting vb.) doğrudan yüklenebilir.

## Gereksinimler

Sadece build almak için (lokal makinede):

- Node.js 20+
- npm

Hosting tarafında özel bir şey gerekmez — sadece HTML/CSS/JS dosyalarını sunabilen bir web alanı yeterlidir.

## Lokal geliştirme

```bash
npm install
npm run dev
```

Tarayıcıdan aç:

```text
http://localhost:3000
```

## Yayına hazırlama (statik build)

Aşağıdaki komut `out/` klasörünü üretir:

```bash
NEXT_PUBLIC_SITE_URL=https://www.mscinsaat11.com npm run build
```

Build bittiğinde proje kökünde **`out/`** klasörü oluşur. Yayınlanacak olan tüm dosyalar bu klasörün içindedir.

## Hosting'e yükleme

1. Yukarıdaki build komutunu çalıştır, `out/` klasörünü üret.
2. `out/` klasörünün **içindeki tüm dosyaları** (klasörün kendisini değil, içeriğini) hosting'in yayın dizinine yükle:
   - cPanel: `public_html/`
   - Plesk / Natro: `httpdocs/`
3. FTP, hosting dosya yöneticisi veya panelin yükleme aracı ile aktarabilirsin.
4. Domain'e gidip kontrol et.

> Not: `out/` klasörü Git'e dahil değildir (`.gitignore`). Her güncellemede yeniden build alınıp hosting'e yüklenmelidir.

### Natro (cPanel) ile yükleme — adım adım

1. **Belge kökünü bul:** cPanel → **Domains** → `mscinsaat11.com` satırındaki **Document Root** yolunu not al (örn. `.../nossglobal.com/mscinsaat11`).
2. **Dosya Yöneticisi'ni aç:** cPanel → **Dosya Yöneticisi** → o klasöre gir.
3. **Eski içeriği temizle:** Klasördeki eski site dosyalarını sil (`.html` dosyaları, eski `assets/` klasörü vb.). Varsa `.htaccess`'e **dokunma**.
4. **Zip hazırla:** Lokalde `out` klasörünün **içeriğini** zip'le (klasörün kendisini değil).
5. **Yükle:** Dosya Yöneticisi'nde **Yükle** ile zip'i at.
6. **Çıkar:** Yüklenen zip'e sağ tık → **Çıkar / Extract**. Sonra zip dosyasını sil.
7. **Kontrol:** `index.html` doğrudan belge kökünde olmalı. Tarayıcıdan `https://www.mscinsaat11.com` aç.

> Diğer domainler (`mscinsaat11.com.tr`, `mscinsaat11.xyz`) için dosya yüklenmez; sadece `www.mscinsaat11.com`'a 301 yönlendirilir (bkz. aşağıdaki SEO bölümü).

## Site URL ve SEO ayarı

SEO metadata, canonical URL, Open Graph paylaşım linkleri, `robots.txt` ve `sitemap.xml` için gerçek site adresi `NEXT_PUBLIC_SITE_URL` değişkeninden okunur ve **build sırasında dosyalara gömülür**.

Bu nedenle build alırken doğru domain'i vermek önemlidir:

```bash
NEXT_PUBLIC_SITE_URL=https://www.mscinsaat11.com npm run build
```

Değer verilmezse varsayılan olarak `https://www.mscinsaat11.com` kullanılır. Domain değişirse build'i yeni domain ile tekrar almak gerekir.

Deploy sonrası kontrol edilecek adresler:

```text
https://www.mscinsaat11.com/sitemap.xml
https://www.mscinsaat11.com/robots.txt
```

### Birden fazla domain (301 yönlendirme)

Asıl (canonical) domain **`www.mscinsaat11.com`**'dur; site sadece buraya yüklenir. Diğer domainler aynı içeriğe yönlendirilmelidir (SEO'da kopya içerik olmaması için):

| Domain                | Rol                               |
| --------------------- | --------------------------------- |
| `www.mscinsaat11.com` | **ASIL** — `out/` buraya yüklenir |
| `mscinsaat11.com.tr`  | → `www.mscinsaat11.com`'a 301     |
| `mscinsaat11.xyz`     | → `www.mscinsaat11.com`'a 301     |

Yönlendirme, hosting panelinden ("Redirects / Yönlendirme") veya belge köküne eklenen `.htaccess` ile yapılır:

```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\.mscinsaat11\.com$ [NC]
RewriteRule ^(.*)$ https://www.mscinsaat11.com/$1 [R=301,L]
```

Üç domain için de SSL (Let's Encrypt) aktif olmalıdır.

## Site içeriğini güncelleme

Sitedeki marka, menü, iletişim, SEO, sayfa metinleri, CTA etiketleri, referanslar, servisler ve proje kartları tek kaynak olarak `src/content/siteContent.ts` dosyasından yönetilir. Görünen metinleri doğrudan component veya page dosyalarına hardcoded eklemek yerine bu dosyadaki ilgili objeye ekleyip arayüzde oradan kullan.

Kart bazlı içeriklerde görsel, kartın kendi objesi içinde tutulur:

- Servis kartları: `siteContent.home.services` ve `siteContent.hizmetlerimiz.services` içindeki `image`
- Proje kartları: `siteContent.home.projectsPreview.projects` ve `siteContent.projelerimiz.gallery.projects` içindeki `image`
- Referans logoları: `siteContent.references` içindeki `imageUrl`

İçerik değişikliğinden sonra siteyi yeniden build alıp `out/` klasörünü hosting'e tekrar yüklemen gerekir.

## Fotoğraf / görsel ekleme ve değiştirme

Tüm görseller `src/content/siteContent.ts` dosyasından yönetilir. Görseller iki şekilde referans edilebilir:

1. **Yerel dosya (önerilen):** Görsel `public/` klasöründe durur, kodda başında `/` olan yolla yazılır. Örn: `public/msclogo.png` → `"/msclogo.png"`.
2. **İnternet adresi (URL):** Doğrudan bir `https://...` linki. Projedeki içerik fotoğrafları şu an geçici yer tutucu adreslerdir (`unsplash.com`, `placehold.co`) ve gerçek fotoğraflarla değiştirilmelidir.

### Kendi fotoğrafını ekleme (adım adım)

1. Fotoğrafını `public/` klasörüne koy. Düzen için bir alt klasör önerilir:
   ```text
   public/images/proje-1.jpg
   ```
2. `src/content/siteContent.ts` içinde ilgili görselin değerini bu yolla değiştir. Başında `/` olmalı, `public` yazılmaz:
   ```ts
   // Önce (yer tutucu):
   image: "https://images.unsplash.com/photo-1565008447742...",
   // Sonra (kendi fotoğrafın):
   image: "/images/proje-1.jpg",
   ```
3. Yeniden build al ve `out/` klasörünü hosting'e tekrar yükle:
   ```bash
   NEXT_PUBLIC_SITE_URL=https://www.mscinsaat11.com npm run build
   ```

### Hangi görsel nerede? (`siteContent.ts` haritası)

| Görsel                        | Alan                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| Logo / favicon / OG görseli   | `common.images.logo`, `logoWhite`, `favicon`, `ogImage` (zaten `public/` içinde)     |
| Anasayfa hero videosu         | `common.images.heroVideo` → `public/hero.mp4`                                        |
| Hakkımızda sayfası görselleri | `common.images.about*` (about, aboutHero, aboutStory, aboutSite, aboutBlueprint vb.) |
| Servis kartları               | `home.services[].image` ve `hizmetlerimiz.services[].image`                          |
| Proje kartları / galeri       | `home.projectsPreview.projects[].image` ve `projelerimiz.gallery.projects[].image`   |
| Referans / iş ortağı logoları | `references[].imageUrl`                                                              |

### İpuçları

- **Dosya adları:** Türkçe karakter ve boşluk kullanma (`proje 1.jpg` yerine `proje-1.jpg`). Küçük harf + tire en güvenlisi.
- **Boyut/ağırlık:** Statik export'ta otomatik optimizasyon yoktur. Fotoğrafları yüklemeden önce makul boyuta indir (örn. geniş kenar ~1600px, JPG/WebP) ki site hızlı açılsın.
- **Hero videosu:** `public/hero.mp4` dosyasını aynı isimle değiştirmen yeterli; kodda değişiklik gerekmez.

## Notlar

- **Görseller:** Statik export'ta sunucu tarafı görsel optimizasyonu olmadığı için `next/image` `unoptimized` modunda çalışır (`next.config.ts`). Görseller normal şekilde görünür.
- **İletişim formu:** Form, gönderilen bilgileri WhatsApp mesajı olarak hazırlayıp `wa.me` üzerinden açar. Sunucu/backend gerektirmez, statik hosting'de sorunsuz çalışır.
