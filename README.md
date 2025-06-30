# Aluminium Website

A modern, responsive website for an aluminium company showcasing products, services, and providing customer interaction features including reservations and contact forms.

## 🌟 Features

### Frontend Features
- **Responsive Design**: Modern, mobile-friendly interface
- **Product Showcase**: Display aluminium products with detailed information
- **User Authentication**: Sign up, sign in, password reset functionality
- **Reservation System**: Online booking for services
- **Contact Form**: Customer inquiry submission
- **Admin Panel**: Reservation management for administrators
- **Multi-page Navigation**: Home, Products, About, Contact pages

### Backend Features
- **User Authentication**: JWT-based authentication system
- **Database Integration**: MongoDB with Mongoose ODM
- **Email Services**: Nodemailer integration for notifications
- **API Endpoints**: RESTful API for frontend communication
- **Security**: Password hashing with bcryptjs
- **CORS Support**: Cross-origin resource sharing enabled

## 🛠️ Technology Stack

### Frontend
- **React.js** (v19.1.0) - UI framework
- **React Router DOM** (v7.6.2) - Client-side routing
- **Bootstrap** (v5.3.7) - CSS framework
- **React Icons** (v5.5.0) - Icon library
- **React Scripts** (v5.0.1) - Build tools

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v5.1.0) - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** (v8.16.0) - MongoDB ODM
- **JWT** (v9.0.2) - Authentication tokens
- **bcryptjs** (v3.0.2) - Password hashing
- **Nodemailer** (v7.0.3) - Email services
- **CORS** (v2.8.5) - Cross-origin support

## 📁 Project Structure

```
aluminium-website/
├── aluminium-auth-backend/     # Backend server
│   ├── models/                 # Database models
│   │   ├── Contact.js
│   │   ├── Reservation.js
│   │   └── User.js
│   ├── routers/               # API routes
│   │   ├── auth.js
│   │   ├── contact.js
│   │   └── reservation.js
│   ├── server.js              # Main server file
│   └── package.json
├── public/                    # Static assets
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/                       # React source code
│   ├── components/            # Reusable components
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   └── Productcard.js
│   ├── pages/                 # Page components
│   │   ├── Aboutus.js
│   │   ├── AdminReservations.js
│   │   ├── Contact.js
│   │   ├── ForgotPassword.js
│   │   ├── Home.js
│   │   ├── ProductDetails.js
│   │   ├── Products.js
│   │   ├── Reservation.js
│   │   ├── ResetPassword.js
│   │   ├── SignIn.js
│   │   └── SignUp.js
│   ├── assets/                # Images and media
│   ├── App.js                 # Main app component
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aluminium-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd aluminium-auth-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   PORT=5000
   ```

4. **Start the backend server**
   ```bash
   node server.js
   ```

The backend API will be available at `http://localhost:5000`

## 📱 Available Pages

- **Home** (`/`) - Landing page with hero section and featured content
- **Products** (`/products`) - Product catalog with filtering options
- **Product Details** (`/products/:id`) - Individual product information
- **About Us** (`/about`) - Company information and story
- **Contact** (`/contact`) - Contact form and company details
- **Reservation** (`/reservation`) - Service booking form
- **Sign In** (`/signin`) - User authentication
- **Sign Up** (`/signup`) - User registration
- **Forgot Password** (`/forgot-password`) - Password recovery
- **Admin Reservations** (`/admin-reservations`) - Reservation management (admin only)

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Password reset

### Contact
- `POST /api/contact` - Submit contact form

### Reservations
- `POST /api/reservation` - Create new reservation
- `GET /api/reservation` - Get all reservations (admin)
- `PUT /api/reservation/:id` - Update reservation status

## 🎨 Customization

### Styling
- Modify `src/App.css` for global styles
- Update Bootstrap classes in components for styling changes
- Replace images in `src/assets/` directory

### Content
- Update page content in respective component files
- Modify product data in the Products component
- Update company information in About and Contact pages

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
```
Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

### Backend Deployment
Deploy the `aluminium-auth-backend` folder to services like:
- Heroku
- Railway
- DigitalOcean
- AWS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using React.js and Node.js**
