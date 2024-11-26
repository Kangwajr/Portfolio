import PortfolioImage from '../components/assets/images/portfolio.png';

export default function About() {
  return (
    <section className="py-20 bg-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            /> */}
             <img 
              src={PortfolioImage}
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Recent Graduate & Developer</h3>
            <p className="text-gray-300 mb-6">
              Fresh graduate with a Diploma in Information Technology (2023), passionate about creating efficient and innovative software solutions. I combine theoretical knowledge with practical coding skills to build modern web applications.
            </p>
            <div className="space-y-4 text-gray-300">
              <p>
                I specialize in full-stack development with a focus on modern web technologies. My journey in tech started with my diploma program, where I developed a strong foundation in computer science and software engineering principles.
              </p>
              <p>
                Outside of coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, and participating in developer communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}