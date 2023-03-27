import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import "../../builder.config";

builder.init("ff7ded45402d45d8aae25b1df3ac31a0");

export async function getStaticProps({ params }: { params: any }) {
	const page = await builder
		.get("page", {
			userAttributes: {
				urlPath: "/" + (params?.page?.join("/") || ""),
			},
		})
		.toPromise();

	return {
		props: {
			page: page || null,
		},
		revalidate: 5,
	};
}

export async function getStaticPaths() {
	const pages = await builder.getAll("page", {
		fields: "data.url",
		options: { noTargeting: true },
	});

	return {
		paths: pages.map((page: any) => `${page.data?.url}`),
		fallback: true,
	};
}

export default function Page({ page }: { page: any }) {
	const router = useRouter();
	const isPreviewing = useIsPreviewing();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	if (!page && !isPreviewing) {
		return <DefaultErrorPage statusCode={404} />;
	}

	return (
		<>
			<Head>
				<title>{page?.data.title}</title>
			</Head>
			<BuilderComponent model="page" content={page} />
		</>
	);
}
