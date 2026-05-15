# Viet Su Ki So Backend

Backend API đơn giản cho dự án Việt Sử Kí Số.

## Công nghệ

- Node.js
- Express.js
- JavaScript
- SQL Server
- Prisma ORM

## Cài đặt

```bash
npm install
```

Tạo file `.env` từ `.env.example`, sau đó sửa lại `DATABASE_URL` theo SQL Server của bạn:

```env
DATABASE_URL="sqlserver://localhost:1433;database=VietSuKiSo;user=sa;password=your_password;encrypt=true;trustServerCertificate=true"
PORT=3000
```

## Tạo bảng và seed dữ liệu

Nếu database `VietSuKiSo` đã có sẵn và bạn chỉ muốn đẩy schema lên:

```bash
npm run prisma:push
npm run prisma:generate
npm run prisma:seed
```

Nếu muốn dùng migration:

```bash
npm run prisma:migrate
npm run prisma:seed
```

## Chạy server

```bash
npm run dev
```

## Test API

```txt
GET http://localhost:3000/
GET http://localhost:3000/api/locations
GET http://localhost:3000/api/locations/hue
GET http://localhost:3000/api/periods
GET http://localhost:3000/api/events
GET http://localhost:3000/api/characters
GET http://localhost:3000/api/search?q=bach
GET http://localhost:3000/api/search?q=bach&type=event
```
