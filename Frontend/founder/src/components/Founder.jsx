
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"; 

const founders = [
  {
    id: 1,
    name: "Md. Mobasshir Shakil Khan",
    role: "Website Founder and Lead Developer",
    bio: "Full-stack developer with a passion for building scalable web applications and a keen eye for design.",
    img: "../../public/Mobi.jpg",
    socials: {
      github: "https://github.com/mobi2400",
      linkedin: "https://www.linkedin.com/in/md-mobasshir-shakil-khan-8ba835326/",
      twitter: "https://x.com/mobi2400",
    },
  },
  {
    id: 2,
    name: "Ayush Kumar",
    role: "Assistant Developer and Designer",
    bio: "Aspiring Full-Stack Developer with a passion for scalable web apps and clean design.",
    img: "../../public/Ayush.jpg", 
    socials: {
      github: "https://github.com/ayushkumar320",
      linkedin: "https://www.linkedin.com/in/ayushnotkumar/",
      twitter: "https://x.com/notaprocoder",
    },
  },
  
];

export default function Founder() {
  return (
    <section className="my-12 px-4 md:px-8 lg:px-16">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">
        Meet the creators
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {founders.map((f) => (
          <div
            key={f.id}
            className="rounded-2xl bg-blue-950 p-6 shadow-lg backdrop-blur-lg transition hover:scale-[1.02]"
          >
            <img
              src={f.img}
              alt={f.name}
              className="mx-auto mb-4 h-36 w-36 rounded-full object-cover ring-4 ring-orange-500/70"
            />
            <h3 className="text-center text-xl font-semibold text-white">
              {f.name}
            </h3>
            <p className="text-center text-sm text-orange-300">{f.role}</p>
            <p className="mt-4 text-center text-gray-300">{f.bio}</p>

            <div className="mt-6 flex justify-center gap-6 text-2xl text-orange-400">
              <a
                href={f.socials.github}
                aria-label={`${f.name} on GitHub`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white focus-visible:outline-none"
              >
                <FaGithub />
              </a>
              <a
                href={f.socials.linkedin}
                aria-label={`${f.name} on LinkedIn`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white focus-visible:outline-none"
              >
                <FaLinkedin />
              </a>
              <a
                href={f.socials.twitter}
                aria-label={`${f.name} on X/Twitter`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white focus-visible:outline-none"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
