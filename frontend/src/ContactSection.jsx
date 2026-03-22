export const ContactSection = () => (
  <section id="contact-us" className="py-32 px-12 border-t border-zinc-900">
    <div className="grid grid-cols-2">
      <h2 className="text-white text-5xl font-bold">Get in touch</h2>
      <form className="space-y-6">
        <input className="w-full bg-transparent border-b border-zinc-700 p-4 outline-none text-white" placeholder="Name" />
        <input className="w-full bg-transparent border-b border-zinc-700 p-4 outline-none text-white" placeholder="Email" />
        <button className="bg-white text-black px-12 py-4 font-bold uppercase">Send Message</button>
      </form>
    </div>
  </section>
);