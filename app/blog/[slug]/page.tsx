import { client } from "@/app/lib/sanity"

async function getData(slug: string) {
    const query = `
        *[_type == 'blog' && slug.current == '${slug}']{
        "currentSlug": slug.current,
            title,
            content,
            titleImage
    }[0]`

    const data = await client.fetch(query);
}
const BlogArticle = async ({params}: {params: {slug: string}}) => {
    const data = await getData(params.slug);
  return (
    <h2>{params.slug}</h2>
  )
}

export default BlogArticle