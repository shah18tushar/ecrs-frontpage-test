export const StaffForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">Full Name *</label>
          <input type="text" placeholder="Enter Full Name" className="input" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Mobile Number *</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="input"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email *</label>
          <input type="email" placeholder="Enter Email" className="input" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Department *</label>
          <input
            type="text"
            placeholder="Enter Department Name"
            className="input"
          />
        </div>
        <div className="col-span-2">
          <label className="block font-semibold mb-1">Upload Resume *</label>
          <input type="file" className="input" />
        </div>
        <div className="col-span-2">
          <label className="block font-semibold mb-1">Your Message</label>
          <textarea placeholder="Your Message" className="input h-24" />
        </div>
      </div>

      <button
        type="submit"
        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 flex items-center gap-2"
      >
        <span>📨</span> Send
      </button>
    </form>
  );
};
