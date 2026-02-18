import { Button } from "@/components/ui/button"

export default function SocialLinks () {
  return (
    <div>
      <Button variant="outline" asChild>
        <a href="https://github.com/fjt-dev">GitHub</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="https://twitter.com/iQV5K">Twitter</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="https://prismisskey.space/@fjtd">Misskey</a>
      </Button>
    </div>
  )
}
