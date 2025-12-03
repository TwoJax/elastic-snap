import ElasticLogo from '@/assets/images/elastic-logo.png'

const Navbar = () => {
  return (
    <nav className="bg-elastic-ink">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex shrink-0 items-center">
              <img
                src={ElasticLogo}
                alt="Your Company"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.displayName = 'Navbar'

export default Navbar
