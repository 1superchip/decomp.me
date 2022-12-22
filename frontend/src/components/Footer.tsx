import Link from "next/link"

import GhostButton from "./GhostButton"
import Logotype from "./Logotype"

function Separator() {
    return <div className="hidden h-4 w-px bg-gray-6 sm:inline-block" />
}

export default function Footer() {
    return <>
        <div className="grow" />
        <footer className="mx-auto mt-16 w-full px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-6 py-10">
                <div className="flex items-center justify-center">
                    <Link href="/" >
                        <Logotype />
                    </Link>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                    <GhostButton href="/privacy">
                        Privacy policy
                    </GhostButton>
                    <Separator />
                    <GhostButton href="https://status.decomp.me">
                        Status
                    </GhostButton>
                    <Separator />
                    <GhostButton href="https://github.com/decompme/decomp.me">
                        GitHub
                    </GhostButton>
                    <Separator />
                    <GhostButton href="https://discord.gg/sutqNShRRs">
                        Chat
                    </GhostButton>
                    <Separator />
                    <GhostButton href="/credits">
                        Credits
                    </GhostButton>
                </div>
            </div>
        </footer>
    </>
}
