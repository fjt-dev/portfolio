import SocialLinks from '@/components/social-links';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl w-full">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-2">fjtd.dev</h1>
          <p className="text-lg text-muted-foreground">Student | Aspiring Web Frontend Engineer</p>
        </div>
        <div className="border rounded-lg p-6 sm:p-8 inline-block min-w-0">
          {/* <p className="">sample</p> */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
