
# Express JWT Authentication
Nama : Gusti Ayu Devi Anjani Putri  
NIM  : F1D022006

Project ini merupakan implementasi **Authentication menggunakan JSON Web Token (JWT)** pada Express.js.

---

## Authentication Flow (JWT)

1. User melakukan **register**
2. User melakukan **login**
3. Server mengembalikan **JWT Token**
4. Token disimpan di client
5. Token dikirim melalui header:

```
Authorization: Bearer <token>
```

6. Middleware memverifikasi token sebelum mengakses endpoint tertentu

---

## Daftar Endpoint

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

### Get Profile (Protected)

```
GET /api/auth/profile
```

### Get Cars (Protected)

```
GET /api/cars
```

### Add Cars (Admin Only)

```
POST /api/cars
```

---

## Screenshot Hasil

### Register User

![Register User](img/registerUser.png)

---

### Register Admin

![Register Admin](img/registerAdmin.png)

---

### Update Database

![Database](img/db.png)

---

### Login User

![Login User](img/loginUser.png)

---

### Login Admin

![Login Admin](img/loginAdmin.png)

---

### Get Cars Tanpa Token (Unauthorized)

![Get Cars No Token](img/getCarsNoToken.png)

---

### Get Cars Dengan Token User

![Get Cars Token User](img/getCarsTokenUser.png)

---

### Post Cars Tanpa Token (Unauthorized)

![Post Cars No Token](img/carsNoToken.png)

---

### Post Cars Dengan Token User

![Post Cars Token User](img/carsTokenUser.png)

---

### Post Cars Dengan Token Admin

![Post Cars Token Admin](img/carsTokenAdmin.png)

---

### Get Profile User dari Token

![Profile User](img/profileUser.png)

---

### Get Profile Admin dari Token

![Profile Admin](img/profileAdmin.png)

---

## Author

**F1D022006 - Gusti Ayu Devi Anjani Putri**
Teknik Informatika
Universitas Mataram