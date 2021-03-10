import { useState, useEffect } from "react";
import { Box, Heading, Flex, Image } from "@chakra-ui/react"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react";
import Shell from "@/components/Shell";

export const Post = ({  title, body, image }) => {
    
    const [ imageURL, setImageURL ] = useState('');

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
          projectId: "uctcw5fw",
          dataset: "production",
        });

        setImageURL(imgBuilder.image(image));
    }, [image])



    return (
      <Shell>
        <Flex mt={24} justifyContent="flex-end" flexDirection="column">
          <Heading>{title}</Heading>
          {imageURL && <Image src={imageURL} />}
          <Box>
            <BlockContent blocks={body} />
          </Box>
        </Flex>
      </Shell>
    );
}


export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;
    
    if(!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
    const url = `https://uctcw5fw.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const post = result.result[0];

    if(!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                body: post.body,
                title: post.title,
                image: post.mainImage,
            }
        }
    }

}

export default Post;