import React, { type ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type ImageProps = ComponentPropsWithoutRef<"img">;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="font-medium pt-8 mb-6 fade-in" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-[18px] font-medium mt-8 mb-3" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className=" font-medium mt-8 mb-3" {...props} />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => <p className="leading-snug" {...props} />,
  ol: (props: ListProps) => (
    <ol className=" list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className=" list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  img: (props: ImageProps) => {
    if (props.title !== undefined) {
      return (
        <figure>
          <img
            className="rounded-4 border border-gray-6"
            src={props.src}
            alt={props.alt}
          />
          <figcaption className="text-sm text-gray-11 mt-1.5">
            {props.title}
          </figcaption>
        </figure>
      );
    }
    return (
      <img
        className="rounded-4 border border-gray-6"
        src={props.src}
        alt={props.alt}
      />
    );
  },
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-10 hover:text-blue-12 hover:underline underline-offset-2";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4"
      {...props}
    />
  ),
};

export function useMDXComponents(
  otherComponents: MDXComponents
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
