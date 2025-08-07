Available round the clock for your convenience


https://www.reactbits.dev/text-animations/rotating-text
https://www.reactbits.dev/animations/pixel-transition
https://www.reactbits.dev/animations/ribbons
https://www.reactbits.dev/components/flowing-menu


in below component i want to add Car Booking Process in 5 steps , i want to take all steps into cards , in each card i want to take process and description on left and on the right i want to take image take all cards in a row an take cards width max-w-3xl or 4xl with mx-auto 




Animated button for book a ride 

<motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.2, 0.8, 0.4, 1],
          }}
          className="relative group mt-4"
        >
          {/* Button Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300 animate-pulse" />

          <Link href="#scroll">
            <button className="relative cursor-pointer px-8 py-4 rounded-lg font-semibold text-base bg-transparent border-2 border-white/20 backdrop-blur-sm hover:bg-white/70 hover:text-black hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105 hover:border-white group overflow-hidden">
              {/* Button Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />

              <span className="relative z-10 tracking-wider font-serif">
                Book a Ride
              </span>

              {/* Button Arrow */}
              <motion.span
                className="relative z-10 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                →
              </motion.span>
            </button>
          </Link>
        </motion.div>




















        {/* Premium Background with Subtle Texture */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95" />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjAiIHk9IjAiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]" />

        {/* Animated light streaks */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.15),transparent_70%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.1),transparent_70%)] animate-pulse-slow animation-delay-2000" />

        {/* Premium geometric pattern */}
        <div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMCA4MEw4MCAwTTQwIDgwTDgwIDQwTTAgNDBMNDAgMCIvPjwvc3ZnPg==")] opacity-30' />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: "0 0 8px rgba(255,255,255,0.3)",
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>