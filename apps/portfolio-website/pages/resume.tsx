import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { ContentContainer } from '@/components/ContentView';
import Head from 'next/head';


export const getStaticProps: GetStaticProps = async () => {
    const resumePath = join(process.cwd(), 'data', 'resume.md');
    const resume = await readFile(resumePath, 'utf8');
    return {
        props: { resume }
    }
}

export default function Resume({
    resume
}: {
    resume: string
}) {
    return ( 
        <>
            <Head>
                <title>Resume - Daemon Tech Tools</title>
                <meta name="description" content="Resume for Josh Elias" />
            </Head>
            <ContentContainer>
                <div className="prose lg:prose-xl">
                    <ReactMarkdown>
                        {resume}
                    </ReactMarkdown>  
                </div>
            </ContentContainer>
        </>
    );
}