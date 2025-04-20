const Header = () => (
    <header className="relative py-12 sm:py-20 mb-8 sm:mb-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent backdrop-blur-[1px]" />
        <div className="max-w-2xl mx-auto text-center px-4">
            <h1 className="font-['MedievalSharp',cursive] text-6xl sm:text-7xl md:text-8xl uppercase font-extrabold tracking-tight bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent drop-shadow-lg mb-6 sm:mb-8">
                Code of Honor
            </h1>
            <div className="space-y-4">
                <p className="font-display text-base sm:text-lg md:text-2xl text-foreground/90 max-w-xl mx-auto leading-snug font-medium tracking-tight bg-gradient-to-r from-foreground/80 to-foreground/70 bg-clip-text text-transparent">
                    Embrace timeless principles and build proactive habits for lasting growth.
                </p>
            </div>
        </div>
    </header>
)

export default Header;