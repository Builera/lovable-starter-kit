# Hướng Dẫn Cài Đặt Project Knowledge

> Hướng dẫn từng bước để AI Lovable tự động tuân theo AI Operating System.

---

## 🎯 Mục Tiêu

Sau khi cài đặt, AI Lovable sẽ **tự động**:
- Đọc context files trước khi code
- Xuất Context Summary
- Đề xuất Plan trước khi implement
- Cập nhật memory files sau khi hoàn thành

---

## 📋 Các Bước Cài Đặt

### Bước 1: Mở Project Settings

1. Mở project của bạn trong Lovable
2. Click vào **tên project** ở góc trên bên trái
3. Chọn **"Settings"** từ menu dropdown

### Bước 2: Truy cập Project Knowledge

1. Trong Settings, tìm mục **"Knowledge"** hoặc **"Project Knowledge"**
2. Click vào để mở editor

### Bước 3: Copy Boot Instruction

1. Mở file `.lovable/boot-instruction.md` trong project
2. Copy **toàn bộ nội dung** (từ "# AI Operating System" đến hết)
3. Paste vào Project Knowledge editor

### Bước 4: Lưu Settings

1. Click **"Save"** hoặc **"Apply"**
2. Đóng Settings dialog

---

## ✅ Kiểm Tra Cài Đặt Thành Công

Sau khi cài đặt, gửi một request đơn giản như:

```
Add a console.log to the main file
```

AI sẽ phản hồi với:
1. **Context Summary** (5 dòng tóm tắt project)
2. **Plan** (danh sách file sẽ modify)
3. Sau khi implement: cập nhật CHANGELOG và memory files

Nếu AI không làm điều này, kiểm tra lại Project Knowledge đã được lưu chưa.

---

## 🔧 Troubleshooting

### AI không đọc context files

**Nguyên nhân:** Project Knowledge chưa được lưu đúng cách

**Giải pháp:**
1. Mở lại Settings → Knowledge
2. Kiểm tra nội dung đã được paste đầy đủ
3. Đảm bảo click Save

### AI đọc nhưng không output Context Summary

**Nguyên nhân:** Instruction có thể bị conflict với system prompt

**Giải pháp:** 
Thử thêm dòng này vào đầu Project Knowledge:
```
IMPORTANT: Always follow these instructions for every request.
```

### AI không cập nhật memory files

**Nguyên nhân:** AI có thể skip UPDATE step

**Giải pháp:** 
Thêm reminder vào cuối mỗi request của bạn:
```
Remember to update CHANGELOG and memory files after completing.
```

---

## 📝 Tùy Chỉnh

Bạn có thể tùy chỉnh `.lovable/boot-instruction.md` theo nhu cầu:

### Thêm Project-Specific Rules

```markdown
## Project-Specific Rules

- Always use TypeScript strict mode
- Follow the component naming convention: PascalCase
- Use Tailwind CSS for styling
```

### Thêm Forbidden Actions

```markdown
## Forbidden

- ❌ Never modify the database schema without approval
- ❌ Never use inline styles
- ❌ Never commit console.log statements
```

---

## 🔄 Cập Nhật

Khi rules thay đổi:
1. Cập nhật `.lovable/boot-instruction.md`
2. Copy lại nội dung mới vào Project Knowledge
3. Save Settings

---

## 📚 Tham Khảo

- [Lovable Project Knowledge Docs](https://docs.lovable.dev/)
- `.lovable/rules.md` - Full rules documentation
- `QUICK-REFERENCE.md` - One-page cheat sheet

---

*Setup chỉ cần làm 1 lần. Sau đó AI sẽ tự động tuân theo rules!*
