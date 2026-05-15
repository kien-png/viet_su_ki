# Viet Su Ki So Frontend Specification

## Muc tieu

Xay dung lai toan bo frontend cho du an "Viet Su Ki So" thanh mot website React + JavaScript co nhieu route that, dua theo cac mockup trong `src/assets/images`, dong thoi tuan thu mo hinh MVC theo tung module nhu `AGENT.md` quy dinh.

## Pham vi

Frontend se bao gom cac trang va route sau:

- `/`: trang chu theo mockup `home.png`
- `/map`: trang ban do tong quan theo mockup `map.png`
- `/map/:locationSlug`: trang chi tiet dia danh theo mockup `history_map_detail.png`
- `/timeline`: trang dong thoi gian theo mockup `timeline.png`
- `/characters`: trang danh sach nhan vat theo mockup `historical_figure.png`
- `/characters/:characterSlug`: trang chi tiet nhan vat theo mockup `detail_figure.png`
- `/search`: trang tim kiem theo mockup `search.png`

Khong nam trong pham vi:

- Backend
- API that
- Auth
- CMS
- Thu vien ban do tuong tac that
- Animation nang

## Nguyen tac thiet ke

- Bam sat bo cuc, tong mau, va cap bac thong tin trong cac anh mockup co san.
- Giu phong cach bao tang lich su so: nen toi, vang dong, do tram, anh nen co khong khi co dien.
- Uu tien responsive thuc dung: desktop bam sat mockup, mobile sap xep lai theo cot doc de de doc.
- Dieu huong that bang route, khong dung mockup tinh cho cac trang detail.
- Du lieu van la mock data va phai song trong `model`.

## Kien truc

Du an se dung:

- `react`
- `react-dom`
- `react-router-dom`
- `tailwindcss` va cau hinh toi thieu de phu hop `AGENT.md`

Kien truc thu muc:

```txt
src/
  assets/
    images/
  components/
    layout/
      navbar.jsx
      footer.jsx
    ui/
      action-button.jsx
      section-shell.jsx
      info-tag.jsx
      panel-card.jsx
  modules/
    home/
      model/
      view/
      controller/
      index.js
    interactive-map/
      model/
      view/
      controller/
      index.js
    timeline/
      model/
      view/
      controller/
      index.js
    character/
      model/
      view/
      controller/
      index.js
    search/
      model/
      view/
      controller/
      index.js
  pages/
    home-page.jsx
    map-page.jsx
    map-detail-page.jsx
    timeline-page.jsx
    character-page.jsx
    character-detail-page.jsx
    search-page.jsx
  routes/
    app-router.jsx
  App.jsx
  main.jsx
  index.css
```

## Module responsibilities

### Home

- `model`: du lieu hero, featured cards cho map, timeline, nhan vat, search
- `controller`: nap du lieu hero va featured cards
- `view`: render hero, grid cards, CTA, footer khu vuc

### Interactive Map

- `model`: danh sach dia danh va service tim theo slug
- `controller`:
  - trang `/map`: nap danh sach dia danh va item mac dinh
  - trang `/map/:locationSlug`: nap chi tiet dia danh theo slug
- `view`:
  - overview map layout
  - detail panel
  - chi tiet page theo mockup

### Timeline

- `model`: cac moc lich su va hinh minh hoa
- `controller`: nap timeline items, sap thu tu hien thi
- `view`: timeline zigzag tren desktop, mot cot tren mobile

### Character

- `model`: danh sach nhan vat va chi tiet day du
- `controller`:
  - `/characters`: render cards
  - `/characters/:characterSlug`: render detail
- `view`: list cards, hero detail, timeline cuoc doi, di san va trich dan

### Search

- `model`:
  - helper normalize text
  - service hop nhat du lieu tu dia danh, nhan vat, timeline, su kien
  - bo loc theo loai
- `controller`:
  - doc query keyword tu input
  - loc ket qua
  - quan ly type filter va pagination giao dien neu can
- `view`: search hero, filter sidebar, result cards, pagination shell

## Du lieu mock can co

### Dia danh

- Hue
- Dien Bien Phu
- Bach Dang

Moi dia danh can co:

- `id`
- `name`
- `slug`
- `region`
- `province`
- `title`
- `summary`
- `description`
- `quote`
- `featuredImage`
- `mapImage`
- `period`
- `rulers`
- `stats`
- `timelineMoments`
- `architectureGallery`
- `figures`
- `searchTags`

### Timeline

- Van Lang
- Au Lac
- Nha Tran
- Nha Le
- Nha Nguyen
- Khang chien chong Phap
- Khang chien chong My

Moi item can co:

- `id`
- `title`
- `period`
- `summary`
- `bulletPoints`
- `image`
- `theme`

### Nhan vat

- Tran Hung Dao
- Ho Chi Minh
- Vo Nguyen Giap

Moi nhan vat can co:

- `id`
- `name`
- `slug`
- `era`
- `title`
- `summary`
- `portrait`
- `quote`
- `timeline`
- `legacy`
- `works`
- `relatedLocationSlugs`

## Dieu huong va hanh vi

- Navbar xuat hien tren tat ca trang, highlight theo route hien tai.
- Nut CTA o trang chu se dieu huong sang `/map`.
- Card o trang chu dieu huong den route lien quan.
- Card dia danh tren `/map` hoac nut chi tiet se di den `/map/:locationSlug`.
- Card nhan vat o `/characters` se di den `/characters/:characterSlug`.
- Search result se dieu huong den route phu hop:
  - dia danh -> `/map/:slug`
  - nhan vat -> `/characters/:slug`
  - thoi ky -> `/timeline`
  - su kien -> `/map/:slug` neu event gan dia danh, nguoc lai `/timeline`
- Neu slug khong hop le, controller se dua ve trang `not found` noi bo bang mot layout don gian trong page hien tai, khong can them route 404 rieng.

## Giao dien

### Tong mau

- Nen chinh: gan den, xanh den, do nau toi
- Mau nhan: vang dong
- Mau bo tro: hong dat va kem nhat cho quote, nut, chip
- Border: vang dong mo
- Chu: trang nga va xam am

### Typography

- Heading dung serif hoac stack co cam giac bien nien lich su
- Body dung sans de de doc
- Track spacing va uppercase cho nhan, label, caption

### Thanh phan dung lai

- `Navbar`
- `Footer`
- `ActionButton`
- `InfoTag`
- `PanelCard`
- `SectionShell`

### Responsive

- Desktop bam sat mockup
- Tablet giam cot va noi rong panel
- Mobile:
  - navbar co the rut gon
  - map overview doi thanh mot cot
  - detail page xep doc
  - timeline thanh mot truc doc
  - search filter chuyen thanh hang ngang hoac block ben tren

## Testing

Phan logic co test:

- `normalizeText`
- `searchHistory`
- service tim item theo slug cho dia danh va nhan vat

Phan giao dien se duoc xac minh bang:

- `npm run build`
- `npm run lint`
- chay local de kiem tra route va responsive co ban

Neu repo chua co `vitest`, se can bo sung sau khi chot ke hoach trien khai.

## Ranh gioi ky thuat

- Khong dung TypeScript
- Khong dua du lieu lon vao View
- Khong import data truc tiep trong View
- Khong them backend
- Khong dung `console.log` trong production code
- Khong can mo phong map tuong tac phuc tap; overview map co the dung anh mockup va hotspot/card dieu huong
- Khong can tao animation phuc tap; chi dung transition nhe va hover states

## Tieu chi hoan thanh

- Co day du 7 route tren
- Cac route detail hoat dong bang slug that
- MVC tach ro theo tung module
- Search tim duoc theo tieng Viet co dau va khong dau
- Build thanh cong
- Lint thanh cong
- Giao dien bam sat mockup trong `src/assets/images`
- Hoat dong tot tren desktop va mobile co ban
