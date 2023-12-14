import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

export default function Social() {
    return (
        <div className="border border-black p-2">
            <h2>SOCIAL</h2>
            <div className="flex gap-2">
                <LinkedInLogoIcon className='' />
                <GitHubLogoIcon className='' />
            </div>
        </div>
    )
}
