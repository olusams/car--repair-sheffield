const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-light">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Page Not Found</h2>
      <p className="text-secondary-600 mb-8">The page you're looking for doesn't exist.</p>
      <a 
        href="/#/" 
        className="btn-primary"
      >
        Go Home
      </a>
    </div>
  </div>
);

export default NotFoundPage; 