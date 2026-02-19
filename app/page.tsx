import SocialLinks from '@/components/social-links';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-6xl font-bold mb-2">fjtd.dev</h1>
          <p className="text-lg text-muted-foreground">Student | Aspiring Web Frontend Engineer</p>
        </div>
        <div className="border rounded-lg p-8">
          {/* <p className="">sample</p> */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
