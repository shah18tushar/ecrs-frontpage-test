export const DriverForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">Full Name *</label>
          <input type="text" placeholder="Enter Full Name" className="input" />
        </div>
        <div>
          <label className="block font-semibold mb-1">
            Enter Mobile Number *
          </label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="input"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Enter Email *</label>
          <input type="email" placeholder="Enter Email" className="input" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Vehicle Type *</label>
          <input
            type="text"
            placeholder="Enter Your Vehicle Type"
            className="input"
          />
        </div>
        <div className="col-span-2">
          <label className="block font-semibold mb-1">
            Choose File (License) *
          </label>
          <input type="file" className="input" />
        </div>
        <div className="col-span-2">
          <label className="block font-semibold mb-1">Your Message</label>
          <textarea placeholder="Your Message" className="input h-24" />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="btn-shadow-red cursor-pointer text-xs">
          Submit Enquiry
        </button>
      </div>
    </form>
  );
};

