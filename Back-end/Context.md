# Việt Sử Kí Số - Backend Context Rút Gọn

## 1. Tổng quan

Dự án backend cho website **Việt Sử Kí Số**.

Backend dùng để cung cấp API dữ liệu lịch sử cho:

- Địa danh lịch sử
- Sự kiện lịch sử
- Thời kỳ lịch sử
- Nhân vật lịch sử
- Tìm kiếm thông tin

Giai đoạn này chỉ làm **backend độc lập**, chưa tích hợp frontend. Kiểm thử API bằng **Postman** hoặc **Thunder Client**.

Mục tiêu: code đơn giản, dễ hiểu, phù hợp sinh viên mới học web.

---

## 2. Công nghệ

Dùng:

- Node.js
- Express.js
- JavaScript
- SQL Server
- Prisma ORM
- dotenv
- cors
- nodemon

Không dùng:

- TypeScript
- NestJS
- JWT/Auth
- Frontend
- Docker nếu chưa cần

---

## 3. Kiến trúc

Tuân thủ MVC đơn giản:

```txt
Route       -> khai báo endpoint
Controller  -> nhận request, gọi service, trả response
Service     -> xử lý logic, gọi Prisma
Model       -> Prisma schema/database
Middleware  -> xử lý lỗi, not found
```

Nguyên tắc:

- Route không viết logic.
- Controller không query database trực tiếp.
- Service là nơi dùng Prisma.
- Không query SQL trực tiếp nếu Prisma làm được.
- Response API phải thống nhất.
- Code càng đơn giản càng tốt.

---

## 4. Cấu trúc thư mục

```txt
backend/
  prisma/
    schema.prisma
    seed.js

  src/
    config/
      prisma.js

    modules/
      locations/
        location.route.js
        location.controller.js
        location.service.js

      events/
        event.route.js
        event.controller.js
        event.service.js

      periods/
        period.route.js
        period.controller.js
        period.service.js

      characters/
        character.route.js
        character.controller.js
        character.service.js

      search/
        search.route.js
        search.controller.js
        search.service.js

    middlewares/
      error.middleware.js
      not-found.middleware.js

    utils/
      response.js

    app.js
    server.js

  .env
  .env.example
  package.json
```

---

## 5. Quy tắc file và code

- Chỉ dùng file `.js`.
- Không tạo file `.ts`, `.tsx`, `.jsx`.
- Dùng `camelCase` cho biến và hàm.
- Dùng `async/await`.
- Không dùng `console.log` trong service/controller.
- Có thể dùng `console.log` trong `server.js` để báo server chạy.
- Không viết toàn bộ logic vào một file.
- Không hard-code dữ liệu lớn trong controller.

---

## 6. Database

Dùng SQL Server + Prisma.

Trong `schema.prisma`, datasource dùng provider:

```prisma
datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
```

Ví dụ `DATABASE_URL`:

```env
DATABASE_URL="sqlserver://localhost:1433;database=VietSuKiSo;user=sa;password=your_password;encrypt=true;trustServerCertificate=true"
```

Các bảng chính:

```txt
HistoricalPeriod
HistoricalLocation
HistoricalEvent
HistoricalCharacter
CharacterEvent
CharacterTimeline
LocationImage
EventImage
CharacterImage
```

Dữ liệu mẫu bắt buộc:

```txt
Địa danh:
- Huế
- Điện Biên Phủ
- Bạch Đằng

Thời kỳ:
- Văn Lang
- Âu Lạc
- Nhà Trần
- Nhà Lê
- Nhà Nguyễn
- Kháng chiến chống Pháp
- Kháng chiến chống Mỹ

Nhân vật:
- Trần Hưng Đạo
- Võ Nguyên Giáp
- Hồ Chí Minh

Sự kiện:
- Gia Long chọn Huế làm kinh đô năm 1802
- Thất thủ kinh đô Huế năm 1885
- Trận Bạch Đằng năm 1288
- Chiến thắng Điện Biên Phủ năm 1954
```

---

## 7. API chính

Làm trước các API đọc dữ liệu:

```txt
GET /
GET /api/locations
GET /api/locations/:slug

GET /api/periods
GET /api/periods/:slug

GET /api/events
GET /api/events/:slug

GET /api/characters
GET /api/characters/:slug

GET /api/search?q=bach
GET /api/search?q=bach&type=event
```

Chưa cần làm CRUD nếu chưa yêu cầu:

```txt
POST
PUT
DELETE
```

---

## 8. Query cơ bản

Các API danh sách nên hỗ trợ:

```txt
?page=1&limit=10
?search=hue
```

Ví dụ:

```txt
GET /api/locations?page=1&limit=10&search=hue
GET /api/characters?page=1&limit=10&search=tran
GET /api/events?page=1&limit=10&search=bach
```

---

## 9. Format response

Thành công:

```json
{
  "success": true,
  "message": "Lấy dữ liệu thành công",
  "data": {}
}
```

Danh sách:

```json
{
  "success": true,
  "message": "Lấy danh sách thành công",
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 30,
    "totalPages": 3
  }
}
```

Lỗi:

```json
{
  "success": false,
  "message": "Không tìm thấy dữ liệu"
}
```

---

## 10. Search

Search cần đơn giản:

- Tìm theo `name`, `title`, `summary`, `description`.
- Không phân biệt hoa thường.
- Nên hỗ trợ tìm tiếng Việt không dấu.

Kết quả search:

```json
{
  "id": 1,
  "title": "Trận Bạch Đằng",
  "type": "event",
  "summary": "Quân dân Đại Việt đánh bại quân Nguyên Mông.",
  "slug": "tran-bach-dang-1288"
}
```

`type` gồm:

```txt
location
event
period
character
```

---

## 11. Package scripts

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:seed": "node prisma/seed.js"
  }
}
```

---

## 12. Dependencies

Cài đặt:

```bash
npm install express cors dotenv @prisma/client
npm install -D nodemon prisma
```

---

## 13. Thứ tự làm việc cho Agent

Agent làm theo thứ tự:

1. Khởi tạo backend Node.js + Express.
2. Cài dependencies.
3. Tạo cấu trúc thư mục.
4. Cấu hình Prisma.
5. Viết `schema.prisma`.
6. Chạy migration.
7. Viết seed data.
8. Tạo `app.js`, `server.js`.
9. Làm API `periods`.
10. Làm API `locations`.
11. Làm API `events`.
12. Làm API `characters`.
13. Làm API `search`.
14. Hướng dẫn test bằng Postman/Thunder Client.

---

## 14. Test API thủ công

Test các URL:

```txt
GET http://localhost:3000/
GET http://localhost:3000/api/locations
GET http://localhost:3000/api/locations/hue
GET http://localhost:3000/api/periods
GET http://localhost:3000/api/events
GET http://localhost:3000/api/characters
GET http://localhost:3000/api/search?q=bach
```

Yêu cầu:

- API trả JSON.
- Thành công có `success: true`.
- Lỗi có `success: false`.
- Slug sai trả 404.
- Search tìm được dữ liệu mẫu.

---

## 15. Ràng buộc

Cấm:

- Không dùng TypeScript.
- Không dùng NestJS.
- Không thêm frontend.
- Không thêm auth.
- Không viết code quá phức tạp.
- Không query SQL trực tiếp nếu Prisma làm được.
- Không bỏ middleware xử lý lỗi.
- Không trả response mỗi API một kiểu khác nhau.

Ưu tiên:

- Code ngắn gọn.
- Dễ đọc.
- Dễ test.
- Tách rõ route/controller/service.
- Có seed data.
- Chạy được trước rồi mới mở rộng sau.

---

## 16. Definition of Done

Hoàn thành khi:

- Chạy được `npm run dev`.
- Kết nối được SQL Server.
- Migration chạy được.
- Seed data chạy được.
- Test được các API chính.
- API trả JSON đúng format.
- Code tách rõ route, controller, service.
- Chưa tích hợp frontend.

---

## 17. Prompt cho Agent

```txt
Đọc file context backend này trước khi code.

Hãy xây dựng backend đơn giản cho dự án Việt Sử Kí Số.

Yêu cầu:
- Node.js + Express.js + JavaScript.
- Không dùng TypeScript.
- Không dùng NestJS.
- Dùng SQL Server + Prisma.
- Chưa tích hợp frontend.
- Kiểm thử API bằng Postman hoặc Thunder Client.
- Tách code theo MVC đơn giản: route, controller, service, model.
- Có API cho locations, periods, events, characters, search.
- Có seed data mẫu.
- API response thống nhất: success, message, data.
- Code đơn giản, dễ hiểu cho sinh viên mới học web.
- Sau khi code xong, hướng dẫn cách chạy migration, seed và test API.
```
