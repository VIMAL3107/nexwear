import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import OrderHistory from './pages/OrderHistory';
import Notifications from './pages/Notifications';
import OrderDetails from './pages/OrderDetails';
import TrackOrder from './pages/TrackOrder';
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';
import About from './pages/About';
import SearchResults from './pages/SearchResults';
import FAQ from './pages/FAQ';
import Returns from './pages/Returns';
import CancelOrder from './pages/CancelOrder';
import BulkOrderForm from './pages/BulkOrderForm';
import BecomePartner from './pages/BecomePartner';
import RaiseDispute from './pages/RaiseDispute';
import MyReviews from './pages/MyReviews';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SizingAssistant from './pages/SizingAssistant';
import AIStudio from './pages/AIStudio';
import MyDesigns from './pages/MyDesigns';
import SecuritySettings from './pages/SecuritySettings';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';
import DesignUpload from './pages/DesignUpload';
import TermsOfService from './pages/TermsOfService';
import ShippingPolicy from './pages/ShippingPolicy';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import ModelManagerPage from './pages/ModelManagerPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/shop" element={<MainLayout><Shop /></MainLayout>} />
        <Route path="/product/:id" element={<MainLayout><ProductDetail /></MainLayout>} />
        <Route path="/cart" element={<MainLayout><Cart /></MainLayout>} />
        <Route path="/checkout" element={<MainLayout><Checkout /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/order-history" element={<MainLayout><OrderHistory /></MainLayout>} />
        <Route path="/notifications" element={<MainLayout><Notifications /></MainLayout>} />
        <Route path="/order/:orderId" element={<MainLayout><OrderDetails /></MainLayout>} />
        <Route path="/track-order" element={<MainLayout><TrackOrder /></MainLayout>} />
        <Route path="/wishlist" element={<MainLayout><Wishlist /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/search" element={<MainLayout><SearchResults /></MainLayout>} />
        <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
        <Route path="/returns" element={<MainLayout><Returns /></MainLayout>} />
        <Route path="/cancel-order/:orderId" element={<MainLayout><CancelOrder /></MainLayout>} />
        <Route path="/bulk-orders" element={<MainLayout><BulkOrderForm /></MainLayout>} />
        <Route path="/become-partner" element={<MainLayout><BecomePartner /></MainLayout>} />
        <Route path="/dispute" element={<MainLayout><RaiseDispute /></MainLayout>} />
        <Route path="/my-reviews" element={<MainLayout><MyReviews /></MainLayout>} />
        <Route path="/forgot-password" element={<MainLayout><ForgotPassword /></MainLayout>} />
        <Route path="/reset-password" element={<MainLayout><ResetPassword /></MainLayout>} />
        <Route path="/sizing-assistant" element={<MainLayout><SizingAssistant /></MainLayout>} />
        <Route path="/ai-studio" element={<MainLayout><AIStudio /></MainLayout>} />
        <Route path="/my-designs" element={<MainLayout><MyDesigns /></MainLayout>} />
        <Route path="/security" element={<MainLayout><SecuritySettings /></MainLayout>} />
        <Route path="/payment-success" element={<MainLayout><PaymentSuccess /></MainLayout>} />
        <Route path="/payment-failure" element={<MainLayout><PaymentFailure /></MainLayout>} />
        <Route path="/design-upload" element={<MainLayout><DesignUpload /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><TermsOfService /></MainLayout>} />
        <Route path="/shipping-policy" element={<MainLayout><ShippingPolicy /></MainLayout>} />
        <Route path="/cookies" element={<MainLayout><CookiePolicy /></MainLayout>} />
        <Route path="/privacy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/model-manager" element={<MainLayout><ModelManagerPage /></MainLayout>} />
        <Route path="/admin" element={<AdminRedirect />} />
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

function AdminRedirect() {
  React.useEffect(() => {
    window.location.href = '/admin/';
  }, []);
  return null;
}

export default App;
