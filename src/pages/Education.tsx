import { Award, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <Award className="text-blue-400 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-2xl font-semibold text-blue-400">Diploma in Information Technology</h3>
              <div className="flex flex-wrap gap-4 mt-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Graduated 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Evelyn Hone College School of Applied Arts And Commerce</span>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-gray-300">
                <h4 className="font-semibold text-lg">Key Areas of Study</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Software Development & Programming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Web Development & Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Database Management Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Network Administration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>System Analysis & Design</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold text-lg mt-6">Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Participated In The Hackerthon CTF 2023</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>Cisco Cnna1 certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>ZICTA Cyber Security Certification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}