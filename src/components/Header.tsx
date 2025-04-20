const Header = () => (
    <header className="relative py-12 sm:py-20 mb-8 sm:mb-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.2),transparent)] backdrop-blur-lg" />
        <div className="max-w-2xl mx-auto text-center px-4">
            <div className="bg-card bg-opacity-80 backdrop-blur-sm border border-border rounded-xl p-8 relative">
                <div className="flex items-center justify-center space-x-4">
                    {/* Left flame icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary transform -rotate-12 flame" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.5 7 8 10 8 13a4 4 0 008 0c0-3-4-6-4-11zm0 14a2 2 0 110-4 2 2 0 010 4z"/>
                        <rect x="11" y="13" width="2" height="8" fill="currentColor"/>
                    </svg>
                    {/* Title */}
                    <h1 className="font-display text-6xl sm:text-7xl md:text-8xl uppercase font-extrabold tracking-tight bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent drop-shadow-lg mb-6 sm:mb-8">
                        Code of Honor
                    </h1>
                    {/* Right flame icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary transform rotate-12 flame" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.5 7 8 10 8 13a4 4 0 008 0c0-3-4-6-4-11zm0 14a2 2 0 110-4 2 2 0 010 4z"/>
                        <rect x="11" y="13" width="2" height="8" fill="currentColor"/>
                    </svg>
                </div>
                <svg className="mx-auto w-40 h-4 text-secondary-foreground my-4" fill="currentColor" viewBox="0 0 100 10">
                    <path d="M0,5 L100,5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M45,0 L50,5 L45,10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M55,0 L50,5 L55,10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="space-y-4">
                    <p className="text-secondary-foreground text-xl sm:text-2xl font-medium leading-snug">
                        Embrace timeless principles and build proactive habits for lasting growth.
                    </p>
                </div>
            </div>
        </div>
    </header>
)

export default Header;