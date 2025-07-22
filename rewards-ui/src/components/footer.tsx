import Image from 'next/image';
import GlobeIcon from '@assets/globe.svg';
import GithubIcon from '@assets/github.svg';

export const Footer = () => (
  <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://github.com/v3rron"
      target="_blank"
      rel="noopener noreferrer"
    >
      Copyright <Image aria-hidden src={GlobeIcon} alt="Globe icon" width={16} height={16} /> 2025
    </a>
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://github.com/v3rron/rewards-stack"
      target="_blank"
      rel="noopener noreferrer"
    >
      Source <Image aria-hidden src={GithubIcon} alt="Github icon" width={16} height={16} /> Code
    </a>
  </footer>
);
