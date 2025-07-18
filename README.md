Available round the clock for your convenience






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