import { Button } from '@/components/ui/button';
import { Github, Twitter } from 'lucide-react';
import { siMisskey } from 'simple-icons';

export default function SocialLinks() {
  return (
    <div className='flex gap-2'>
      <Button variant="outline" asChild>
        <a href="https://github.com/fjt-dev">
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href="https://twitter.com/iQV5K">
          <Twitter className="w-5 h-5" />
          Twitter
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href="https://prismisskey.space/@fjtd">
          <svg viewBox="0 0 24 24" role="img" className="w-5 h-5">
            <path d={siMisskey.path} />
          </svg>
          Misskey
        </a>
      </Button>
    </div>
  );
}
