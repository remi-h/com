import Image from 'next/image';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'POL LOZANO Software Development',
  description: 'Welcome to POL LOZANO Software Development',
};

export default function Home() {
  return (
    <main className="px-4 py-8 bg-gray-100">
      <h1 className='text-3xl font-bold text-gray-900'>
        POL LOZANO Software Development
      </h1>
      <div className='flex'>
        <Image src="/images/polpol.jpg" alt="POL" width={400} height={600} className='rounded-md' />

        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            With over five years of experience crafting exceptional mobile and web apps, I bring a wealth of expertise to the table, driven by a passion for creating user-centric experiences that resonate with users across diverse platforms. My unwavering commitment to quality and innovation has resulted in a portfolio of feature-rich, engaging applications that have garnered praise from clients and users alike.
          </p>

          <p className="text-gray-600 mb-6">
          My technical prowess encompasses a deep understanding of React Native, Flutter, and Java, enabling me to seamlessly navigate the complexities of modern app development. I am abreast of the latest advancements in mobile and web development, ensuring that my creations are not only cutting-edge but also built to withstand the demands of today's technology-driven world. My ability to translate intricate ideas into intuitive and delightful user interfaces has consistently yielded apps that not only captivate users but also exceed their expectations.
          </p>

          <p className="text-gray-600">
          I am not merely a craftsman of interfaces; I am an artist who breathes life into digital experiences. My dedication to crafting visually appealing and user-friendly interfaces stems from a deep understanding of human behavior and the psychology of interaction. I am passionate about creating experiences that not only look great but also seamlessly enhance the user experience, guiding users through their journeys with ease and satisfaction.
          </p>
          <div className='py-8'>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get in Touch
            </a>
          </div>
        </div>


      </div>
    </main>
  );
}
