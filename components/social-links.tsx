import { Button } from '@/components/ui/button';
import { Github, Twitter } from 'lucide-react';
import { siMisskey } from 'simple-icons';

export default function SocialLinks() {
  return (
    <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
      <Button variant="outline" asChild className='w-full sm:w-fit min-w-0'>
        <a href="https://github.com/fjt-dev">
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </Button>
      <Button variant="outline" asChild className='w-full sm:w-fit min-w-0'>
        <a href="https://twitter.com/iQV5K">
          <Twitter className="w-5 h-5" />
          Twitter
        </a>
      </Button>
      <Button variant="outline" asChild className='w-full sm:w-fit min-w-0'>
        <a href="https://prismisskey.space/@fjtd">
          <svg viewBox="0 0 24 24" role="img" className="w-5 h-5 shrink-0">
            <path d={siMisskey.path} />
          </svg>
          Misskey
        </a>
      </Button>
    </div>
  );
}
