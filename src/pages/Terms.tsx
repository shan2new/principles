import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Terms() {
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
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 gradient-heading">Terms of Use</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last Updated: April 21, 2025</p>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Introduction</h2>
              <p>Welcome to the Code of Honor web application ("web app," "website," "service," or "application"), owned and operated by <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a>. By accessing or using this web application, you agree to be bound by these Terms of Use.</p>
              <p>If you disagree with any part of the terms, you may not access the website.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p>The Code of Honor web application and its original content, features, and functionality are owned by <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a> and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
              <p>The principles, concepts, and content are provided for educational and motivational purposes only.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">User License</h2>
              <p>Permission is granted to temporarily access and view the materials (information or software) on the Code of Honor website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Disclaimer</h2>
              <p>The materials on the Code of Honor website are provided on an 'as is' basis. <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a> makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Limitations</h2>
              <p>In no event shall <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a> or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Code of Honor website, even if <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a> or a <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a> authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Revisions and Errata</h2>
              <p>The materials appearing on the Code of Honor website could include technical, typographical, or photographic errors. <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a> does not warrant that any of the materials on its website are accurate, complete, or current. <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a> may make changes to the materials contained on its website at any time without notice.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p><a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a> may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Contact</h2>
              <p>If you have any questions about these Terms of Use, please contact us at <a href="https://shan2new.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shan2new.in</a>.</p>
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