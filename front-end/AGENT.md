# Việt Sử Kí Số - Frontend Context Rules MVC

## 1. Project Overview

### Tên dự án
**Việt Sử Kí Số**

### Mô tả
Đây là dự án **frontend ReactJS dùng JavaScript** cho website lịch sử Việt Nam tương tác. Website giúp người dùng khám phá lịch sử Việt Nam thông qua 5 phần chính:

- **Home**: Giới thiệu website.
- **Interactive Map**: Bản đồ lịch sử Việt Nam tương tác.
- **Timeline**: Các thời kỳ lịch sử Việt Nam.
- **Character**: Nhân vật lịch sử tiêu biểu.
- **Search**: Tìm kiếm thông tin lịch sử.

Website mang phong cách **bảo tàng lịch sử số**, hiện đại, trực quan, có màu sắc văn hóa Việt Nam như vàng đồng, đỏ trầm, nền tối và họa tiết trống đồng.

### Công nghệ sử dụng
- ReactJS
- JavaScript
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion cho animation nhẹ
- LeafletJS hoặc SVG Map cho bản đồ
- Vitest cho unit test nếu cần

---

## 2. Architecture Pattern - MVC

Dự án frontend phải tuân thủ mô hình **MVC** theo từng module.

MVC trong frontend được hiểu như sau:

| Thành phần | Vai trò |
|---|---|
| Model | Chứa dữ liệu mock, service xử lý dữ liệu, helper liên quan đến dữ liệu |
| View | Chứa component giao diện, chỉ nhận props và hiển thị UI |
| Controller | Chứa logic điều phối, quản lý state, xử lý sự kiện và truyền dữ liệu cho View |

Nguyên tắc chính:

- **Model** không chứa JSX.
- **View** không gọi trực tiếp data hoặc service.
- **Controller** là nơi kết nối Model và View.
- **View** chỉ nhận props và gọi callback.
- **Controller** quản lý state, event, logic tương tác.
- Dữ liệu mock hoặc service lấy dữ liệu đặt trong Model.
- Component giao diện đặt trong View.
- Logic chọn địa điểm, lọc tìm kiếm, mở modal, xử lý click đặt trong Controller.

---

## 3. File Extension Rules

Dự án dùng **ReactJS + JavaScript**, vì vậy bắt buộc dùng đuôi file như sau:

```txt
.jsx: dùng cho component React
.js: dùng cho data, service, helper, config, route export
.css: dùng cho global style nếu cần
```

Không dùng TypeScript trong dự án này.

### Được phép dùng

```txt
App.jsx
main.jsx
home-page.jsx
hero-section.view.jsx
interactive-map.controller.jsx
location.data.js
location.service.js
index.js
```

### Không được dùng

```txt
.ts
.tsx
location.model.ts
hero-section.tsx
interactive-map.controller.tsx
```

---

## 4. MVC Folder Structure

Cấu trúc thư mục bắt buộc:

```txt
src/
  assets/
    images/
    icons/

  components/
    layout/
      navbar.jsx
      footer.jsx

    ui/
      button.jsx
      card.jsx
      section-title.jsx
      tag.jsx
      modal.jsx

  modules/
    home/
      model/
        home.data.js
        home.service.js

      view/
        hero-section.view.jsx
        feature-card.view.jsx

      controller/
        home.controller.jsx

      index.js

    interactive-map/
      model/
        location.data.js
        location.service.js

      view/
        interactive-map.view.jsx
        vietnam-map.view.jsx
        location-info-panel.view.jsx
        location-event-card.view.jsx

      controller/
        interactive-map.controller.jsx

      index.js

    timeline/
      model/
        timeline.data.js
        timeline.service.js

      view/
        timeline-section.view.jsx
        timeline-card.view.jsx

      controller/
        timeline.controller.jsx

      index.js

    character/
      model/
        character.data.js
        character.service.js

      view/
        character-section.view.jsx
        character-card.view.jsx
        character-detail-modal.view.jsx

      controller/
        character.controller.jsx

      index.js

    search/
      model/
        search.data.js
        search.service.js

      view/
        search-section.view.jsx
        search-input.view.jsx
        search-result-card.view.jsx

      controller/
        search.controller.jsx

      index.js

  pages/
    home-page.jsx

  routes/
    app-router.jsx

  styles/
    globals.css

  App.jsx
  main.jsx
```

---

## 5. MVC Responsibilities

### 5.1 Model

Model dùng để chứa dữ liệu mock và các hàm xử lý dữ liệu.

Model bao gồm:

- Mock data.
- Service xử lý dữ liệu.
- Helper tìm kiếm, lọc, sắp xếp nếu logic liên quan trực tiếp đến dữ liệu.

Ví dụ:

```txt
modules/interactive-map/model/
  location.data.js
  location.service.js
```

`location.data.js` dùng để chứa dữ liệu mock:

```js
export const historicalLocations = [
  {
    id: 'hue',
    name: 'Huế',
    slug: 'hue',
    region: 'Miền Trung',
    province: 'Thừa Thiên Huế',
    summary: 'Kinh đô triều Nguyễn, trung tâm văn hóa cung đình Việt Nam.',
    description:
      'Huế là kinh đô của triều Nguyễn và là nơi lưu giữ nhiều di sản văn hóa quan trọng.',
    events: [
      {
        id: 'hue-1802',
        title: 'Gia Long chọn Huế làm kinh đô',
        year: '1802',
        summary: 'Vua Gia Long thống nhất đất nước và chọn Huế làm kinh đô.'
      }
    ],
    characters: ['Gia Long', 'Minh Mạng', 'Tôn Thất Thuyết', 'Hàm Nghi'],
    timeline: ['1802', '1830', '1885', '1945'],
    gallery: []
  }
];
```

`location.service.js` dùng để xử lý dữ liệu:

```js
import { historicalLocations } from './location.data';

export function getLocations() {
  return historicalLocations;
}

export function getLocationById(id) {
  return historicalLocations.find((location) => location.id === id);
}
```

---

### 5.2 View

View chỉ chịu trách nhiệm hiển thị giao diện.

View được phép:

- Nhận dữ liệu qua props.
- Hiển thị UI.
- Gọi callback từ props khi người dùng thao tác.

View không được:

- Gọi trực tiếp mock data.
- Import file `.data.js`.
- Gọi service trực tiếp.
- Chứa logic lọc/tìm kiếm phức tạp.
- Quản lý state lớn.

Ví dụ `location-info-panel.view.jsx`:

```jsx
export function LocationInfoPanelView({ location }) {
  return (
    <section className="rounded-2xl border border-amber-500/30 bg-black/40 p-6">
      <h2 className="text-2xl font-bold text-amber-300">{location.name}</h2>
      <p className="mt-3 text-sm text-stone-200">{location.summary}</p>

      <div className="mt-5">
        <h3 className="text-sm font-semibold text-amber-200">Sự kiện nổi bật</h3>

        <div className="mt-3 space-y-3">
          {location.events.map((event) => (
            <article
              key={event.id}
              className="rounded-xl border border-amber-500/20 p-4"
            >
              <p className="text-xs text-amber-300">{event.year}</p>
              <h4 className="font-semibold text-white">{event.title}</h4>
              <p className="text-sm text-stone-300">{event.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 5.3 Controller

Controller chịu trách nhiệm điều phối giữa Model và View.

Controller được phép:

- Gọi service từ Model.
- Quản lý state.
- Xử lý event.
- Tính toán dữ liệu trước khi truyền xuống View.
- Kết nối nhiều View lại với nhau.

Ví dụ `interactive-map.controller.jsx`:

```jsx
import { useMemo, useState } from 'react';
import { getLocationById, getLocations } from '../model/location.service';
import { InteractiveMapView } from '../view/interactive-map.view';

const DEFAULT_LOCATION_ID = 'hue';

export function InteractiveMapController() {
  const locations = useMemo(() => getLocations(), []);
  const [selectedLocationId, setSelectedLocationId] = useState(DEFAULT_LOCATION_ID);

  const selectedLocation = useMemo(() => {
    return getLocationById(selectedLocationId) || locations[0];
  }, [selectedLocationId, locations]);

  return (
    <InteractiveMapView
      locations={locations}
      selectedLocation={selectedLocation}
      selectedLocationId={selectedLocationId}
      onSelectLocation={setSelectedLocationId}
    />
  );
}
```

---

## 6. Module Export Rules

Mỗi module phải export Controller chính qua `index.js`.

Ví dụ:

```js
export { InteractiveMapController as InteractiveMapSection } from './controller/interactive-map.controller';
```

Ở `home-page.jsx`, chỉ import từ module index:

```jsx
import { HomeSection } from '../modules/home';
import { InteractiveMapSection } from '../modules/interactive-map';
import { TimelineSection } from '../modules/timeline';
import { CharacterSection } from '../modules/character';
import { SearchSection } from '../modules/search';

export function HomePage() {
  return (
    <>
      <HomeSection />
      <InteractiveMapSection />
      <TimelineSection />
      <CharacterSection />
      <SearchSection />
    </>
  );
}
```

Không import sâu như:

```jsx
// Không nên
import { InteractiveMapController } from '../modules/interactive-map/controller/interactive-map.controller';
```

---

## 7. Website Sections

### 7.1 Home

Chức năng:

- Giới thiệu tổng quan website.
- Hiển thị tên website, slogan và thông điệp chính.

Nội dung:

- `VIỆT SỬ KÍ SỐ`
- `Chạm để hiểu Việt Nam`
- `Lịch sử không còn nằm trong sách — mà sống trong từng cú chạm.`
- `Khám phá lịch sử Việt Nam qua bản đồ, timeline, nhân vật lịch sử và hệ thống tìm kiếm trực quan.`
- Button: `Khám phá ngay`

MVC:

- Model: chứa dữ liệu hero, danh sách feature.
- View: hiển thị hero và feature card.
- Controller: truyền dữ liệu từ model sang view.

---

### 7.2 Interactive Map

Chức năng:

- Hiển thị bản đồ Việt Nam.
- Người dùng chọn địa điểm để xem thông tin lịch sử.

Dữ liệu mẫu:

- Huế
- Điện Biên Phủ
- Bạch Đằng

MVC:

- Model: location data, location service.
- View: bản đồ, panel thông tin, card sự kiện.
- Controller: quản lý `selectedLocationId`.

---

### 7.3 Timeline

Chức năng:

- Trình bày các thời kỳ lịch sử Việt Nam theo dòng thời gian.

Các mốc:

- Văn Lang
- Âu Lạc
- Nhà Trần
- Nhà Lê
- Nhà Nguyễn
- Kháng chiến chống Pháp
- Kháng chiến chống Mỹ

MVC:

- Model: timeline data, timeline service.
- View: timeline section, timeline card.
- Controller: lấy dữ liệu timeline và truyền sang view.

---

### 7.4 Character

Chức năng:

- Giới thiệu nhân vật lịch sử tiêu biểu.

Nhân vật mẫu:

- Trần Hưng Đạo
- Võ Nguyên Giáp
- Hồ Chí Minh

MVC:

- Model: character data, character service.
- View: character grid, character card, detail modal.
- Controller: quản lý `selectedCharacter`, mở/đóng modal.

---

### 7.5 Search

Chức năng:

- Tìm kiếm thông tin lịch sử theo địa điểm, sự kiện, nhân vật hoặc thời kỳ.

MVC:

- Model: search data, search service.
- View: search input, result card.
- Controller: quản lý `searchKeyword`, gọi service lọc kết quả, truyền xuống View.

---

## 8. Coding Standards

### Ngôn ngữ

- Sử dụng ReactJS với JavaScript.
- Component React dùng đuôi `.jsx`.
- File dữ liệu, service, helper dùng đuôi `.js`.
- Không dùng TypeScript.
- Không tạo file `.ts` hoặc `.tsx`.

### Naming Conventions

- File: kebab-case.
  - `interactive-map.controller.jsx`
  - `location-info-panel.view.jsx`
  - `location.service.js`
- Component: PascalCase.
  - `InteractiveMapController`
  - `LocationInfoPanelView`
- Function/variable: camelCase.
  - `selectedLocationId`
  - `handleSelectLocation`
- Constant: UPPER_SNAKE_CASE.
  - `DEFAULT_LOCATION_ID`

### Style

- Sử dụng Tailwind CSS.
- Không dùng Styled Components.
- Không viết CSS thuần tràn lan.
- Component UI dùng class Tailwind rõ ràng.
- Với style lặp lại nhiều lần, tách thành component dùng chung.

### Comment

- Viết comment khi logic khó hiểu.
- Không comment thừa cho code đơn giản.
- Có thể viết JSDoc cho các hàm service dùng chung.

Ví dụ:

```js
/**
 * Tìm địa điểm lịch sử theo id.
 * @param {string} id
 * @returns {object | undefined}
 */
export function getLocationById(id) {
  return historicalLocations.find((location) => location.id === id);
}
```

---

## 9. MVC Coding Rules

### Controller rules

- Controller được dùng `useState`, `useMemo`, `useCallback`.
- Controller được gọi service từ Model.
- Controller không chứa JSX quá phức tạp.
- Nếu JSX dài, phải tách sang View.
- Controller không render giao diện chi tiết của card, modal, panel.

### View rules

- View phải nhận props.
- View không gọi service.
- View không import data trực tiếp.
- View không xử lý logic nghiệp vụ.
- View chỉ hiển thị UI và gọi callback.
- View có thể dùng `.map()` để render danh sách đã được truyền từ Controller.

### Model rules

- Model không import component React.
- Model không chứa JSX.
- Model chỉ chứa data, service, helper.
- Service phải dễ thay thế bằng API thật sau này.

---

## 10. Search Rules

Search ban đầu dùng mock data.

Yêu cầu:

- Tìm kiếm không phân biệt hoa thường.
- Hỗ trợ tiếng Việt có dấu.
- Nên hỗ trợ tìm không dấu bằng helper normalize text.
- Kết quả phân loại bằng tag:
  - Địa điểm
  - Sự kiện
  - Nhân vật
  - Thời kỳ

Ví dụ `search.service.js`:

```js
import { searchData } from './search.data';

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function searchHistory(keyword) {
  const normalizedKeyword = normalizeText(keyword.trim());

  if (!normalizedKeyword) {
    return [];
  }

  return searchData.filter((item) => {
    const searchableText = normalizeText(`${item.title} ${item.summary} ${item.type}`);
    return searchableText.includes(normalizedKeyword);
  });
}
```

---

## 11. UI Rules

### Màu sắc

- Nền chính: đen than hoặc đỏ trầm.
- Màu nhấn: vàng đồng.
- Màu phụ: nâu cổ, màu giấy cũ.
- Text: trắng ngà, vàng nhạt, xám sáng.
- Border: vàng đồng mờ.

### Hiệu ứng

- Animation nhẹ.
- Fade in đơn giản.
- Hover nhẹ cho card/button.
- Không dùng quá nhiều chuyển động.
- Không dùng hiệu ứng gây rối mắt.

### Responsive

- Mobile first nếu có thể.
- Interactive Map trên mobile phải xếp dọc.
- Timeline trên mobile nên là dạng dọc.
- Character card trên mobile hiển thị 1 cột.

---

## 12. Constraints

### Cấm

- Không sửa file `.env.example`.
- Không dùng `console.log` trong code production.
- Không hard-code dữ liệu lớn trong View.
- Không gọi service trực tiếp trong View.
- Không import data trực tiếp trong View.
- Không viết toàn bộ website trong một file.
- Không dùng animation quá nhiều.
- Không dùng CSS thuần nếu Tailwind xử lý được.
- Không tạo file `.ts`.
- Không tạo file `.tsx`.
- Không dùng TypeScript syntax như `interface`, `type`, `React.FC`.

### Ưu tiên

- Tuân thủ MVC theo từng module.
- Tách rõ Model, View, Controller.
- Dữ liệu mock nằm trong Model.
- UI nằm trong View.
- Logic nằm trong Controller hoặc service.
- Code dễ đọc, dễ mở rộng, dễ thay API thật sau này.

---

## 13. Definition of Done

Trước khi bàn giao code, Agent phải kiểm tra:

1. Project chạy được:

   ```bash
   npm run dev
   ```

2. Build không lỗi:

   ```bash
   npm run build
   ```

3. Không có lỗi JavaScript runtime trên browser console.

4. Không có lỗi ESLint nghiêm trọng nếu project có ESLint.

5. Nếu có format script, đã chạy:

   ```bash
   npm run format
   ```

6. Có đủ 5 section:

   - Home
   - Interactive Map
   - Timeline
   - Character
   - Search

7. Mỗi module tuân thủ MVC:

   - Có thư mục `model`
   - Có thư mục `view`
   - Có thư mục `controller`

8. View không import data trực tiếp.

9. Controller là nơi quản lý state.

10. Model không chứa JSX.

11. Không có file `.ts` hoặc `.tsx`.

12. Có dữ liệu mẫu cho:

    - Huế
    - Điện Biên Phủ
    - Bạch Đằng
    - Văn Lang
    - Âu Lạc
    - Nhà Trần
    - Nhà Lê
    - Nhà Nguyễn
    - Trần Hưng Đạo
    - Võ Nguyên Giáp
    - Hồ Chí Minh

13. Responsive tốt trên desktop và mobile.

---

## 14. Useful Commands

```bash
npm run dev
npm run build
npm run test
npm run format
npm run lint
```

Trước khi chạy lệnh, phải kiểm tra `package.json` để chắc chắn script tồn tại.

---

## 15. Agent Working Rules

Khi Agent nhận task:

1. Đọc file context này trước.
2. Kiểm tra cấu trúc thư mục hiện tại.
3. Nếu chưa có MVC, tạo module theo MVC.
4. Không tự ý đổi công nghệ.
5. Không tự ý thêm backend.
6. Không sửa file cấu hình nhạy cảm.
7. Không tạo file `.ts` hoặc `.tsx`.
8. Tạo code theo đúng module:
   - Model: data, service, helper.
   - View: UI.
   - Controller: state, event, logic.
9. Sau khi hoàn thành, báo rõ:
   - Đã thêm file nào.
   - Đã sửa file nào.
   - Cách chạy kiểm tra.
   - Có phần nào chưa hoàn thiện không.

---

## 16. Sample Prompt For Agent

```txt
Hãy đọc file context rules trước khi code.

Dự án là frontend ReactJS + JavaScript + Vite + Tailwind CSS cho website Việt Sử Kí Số.

Yêu cầu bắt buộc:
- Tuân thủ MVC theo từng module.
- Không dùng TypeScript.
- Không tạo file .ts hoặc .tsx.
- Component React dùng .jsx.
- Data, service, helper dùng .js.
- Mỗi module có model, view, controller.
- Model chứa mock data, service, helper.
- View chỉ hiển thị UI và nhận props.
- Controller quản lý state, xử lý event và truyền dữ liệu xuống View.
- Website gồm 5 section: Home, Interactive Map, Timeline, Character, Search.
- UI nền tối, vàng đồng, đỏ trầm, phong cách bảo tàng lịch sử số.
- Animation nhẹ, không rối mắt.
- Responsive tốt.
- Không dùng console.log.
- Không hard-code dữ liệu lớn trong View.

Hãy tạo code sạch, dễ mở rộng và chạy được bằng npm run dev.
```
