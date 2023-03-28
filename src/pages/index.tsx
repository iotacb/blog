import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import "../../builder.config";

builder.init("ff7ded45402d45d8aae25b1df3ac31a0");

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
				<title>👋🏻 Hello there!</title>
			</Head>
			<BuilderComponent model="page" content={page} />
		</>
	);
}
