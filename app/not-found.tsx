'use client'

import Link from "next/link";
import Layout from "./ui/layouts/layout";

function NotFound() {

    const path = document.URL

    return (
        <>
            <Layout>
                <h1>Not Found</h1>
                <h1>{path}</h1>
                <Link href={'/'} >HomePage</Link>
            </Layout>
        </>
    );
}

export default NotFound;