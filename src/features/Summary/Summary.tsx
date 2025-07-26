import Image from 'next/image';

const socials = [
  {
    iconPath: '/icons/github.svg',
    name: 'Github',
    link: 'https://github.com/dffUqp',
  },
  {
    iconPath: '/icons/linkedin.svg',
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/yuriivasylchuk/',
  },
  {
    iconPath: '/icons/envelope.svg',
    name: 'Envelope',
    link: 'mailto:yuriivasylchuk.work@gmail.com',
  },
];

const Summary = () => {
  return (
    <div className="flex flex-col max-w-[450px] gap-1">
      <h1 className="text-5xl font-extrabold leading-[1]">Yurii Vasylchuk</h1>
      <p className="mt-4 text-gray-400">
        Experienced Front-End Developer with a strong foundation in React and
        TypeScript. Worked in various domains, building scalable web
        applications and delivering impactful solutions. Fluent in spoken
        English.
      </p>

      <div className="flex items-center gap-3 mt-4">
        {socials.map(social => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="duration-200 hover:opacity-70"
          >
            <Image
              width={32}
              height={32}
              src={social.iconPath}
              alt={social.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export { Summary };
