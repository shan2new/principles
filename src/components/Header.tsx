const Header = () => (
    <header className="relative py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-2xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/80 mb-6">
                Code of Honor
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-xl mx-auto leading-relaxed">
                Seven Habits &amp; Underlying Principles for Personal Growth
            </p>
        </div>
    </header>
)

export default Header;