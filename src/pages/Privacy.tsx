import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Privacy() {
  return (
    <div className="min-h-svh bg-background text-foreground selection:bg-primary/20 smooth-transition">
      <ThemeToggle />
      
      {/* Back button */}
      <Link to="/" className="fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          className="glass-effect border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 px-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Home</span>
        </Button>
      </Link>
      
      <main className="relative max-w-[90ch] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="glass-effect rounded-xl p-6 md:p-8 shadow-lg">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 gradient-heading">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last Updated: April 21, 2025</p>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Introduction</h2>
              <p>Welcome to the Code of Honor web application ("we," "our," or "us"), owned and operated by <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
              <p>We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Information Collection</h2>
              <p>We do not collect personally identifiable information from visitors to our website. This web application is a static site that does not use cookies, tracking technologies, or collect any personal data.</p>
              <p>Your interaction with this website remains private, and we do not store any information about your visit or usage patterns.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p>Our website is hosted on a third-party service provider. While we do not collect data, our hosting provider may maintain server logs that include information such as IP addresses, browser type, and access times. This information is used solely for maintaining the security and performance of the server infrastructure.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a>.</p>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-primary/10">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-3 items-center text-xs">
            <span>© {new Date().getFullYear()} <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}