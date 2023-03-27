import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

// Blog Title
Builder.registerComponent(
	dynamic(() => import("./src/components/Title")),
	{
		name: "BlogTitle",
		inputs: [
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "My Blog Title",
			},
		],
	}
);

// Project Card
Builder.registerComponent(
	dynamic(() => import("./src/components/ProjectCard")),
	{
		name: "ProjectCard",
		inputs: [
			{
				name: "image",
				type: "file",
				required: true,
			},
			{
				name: "title",
				type: "string",
				required: true,
				defaultValue: "Project Name",
			},
			{
				name: "description",
				type: "string",
				required: true,
				defaultValue: "Project Description",
			},
			{
				name: "link",
				type: "string",
				required: true,
				defaultValue: "https://github.com",
			},
			{
				name: "source",
				type: "string",
				required: true,
				defaultValue: "https://github.com",
			},
			{
				name: "demo",
				type: "string",
				required: true,
				defaultValue: "https://github.com",
			},
		],
	}
);

Builder.register("insertMenu", {
	name: "Comps",
	items: [
		{
			item: "BlogTitle",
			name: "Blog Title",
		},
		{
			item: "ProjectCard",
			name: "Project Card",
		},
	],
});
