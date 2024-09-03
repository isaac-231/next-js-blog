/** @format */

import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "p3qtl1jw",
	dataset: "production",
	apiVersion: "2024-05-03",
	useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}
