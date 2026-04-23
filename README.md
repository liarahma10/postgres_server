# Postgres Server Portfolio Project 

Project ini adalah aplikasi fullstack yang terdiri dari:

* Backend (Node.js + Express)
* Database (PostgreSQL)
* Frontend (Client)

---

##  Cara Install

### 1. Clone Repository

```bash
git clone https://github.com/liarahma10/postgres_server.git
cd postgres_server
```

---

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Client

```bash
cd ../client
npm install
```

---

##  Konfigurasi Environment

Buat file `.env` di folder `backend/`, lalu isi:

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db_name
JWT_SECRET=your_secret_key
DATABASE_URL=postgres://user:password@localhost:5432/db_name
```

---

## ▶ Cara Menjalankan Project

### 1. Jalankan Backend

```bash
cd backend
npm start
```

---

### 2. Jalankan Frontend

```bash
cd client
npm start
```

---

##  Teknologi yang Digunakan

* Node.js
* Express.js
* PostgreSQL
* JavaScript

---

##  Catatan

* Pastikan PostgreSQL sudah berjalan
* Pastikan file `.env` sudah dibuat
* Jangan upload `.env` ke GitHub

---

##  Author

Lia Rahma Asnaini
