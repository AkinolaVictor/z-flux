import Head from 'next/head'
import React from 'react'

interface Props {}

function About(props: Props) {
    const {} = props

    return (
        <div>
            <Head>
                <title>Z-Flux || About</title>
                <meta name="description" content="The z-flux about page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/z-flux-1.png" />
            </Head>
            <div>
                about
            </div>
        </div>
    )
}

export default About
