import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-400">Lusaka, Zambia</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                kangwafackson00@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                <Github className="text-blue-400" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                <Linkedin className="text-blue-400" size={24} />
              </a>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-gray-100"
                placeholder="Mulenga Mulenga"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-gray-100"
                placeholder="mulenga.mulenga@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-gray-100"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}