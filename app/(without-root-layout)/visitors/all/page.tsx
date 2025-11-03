import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Note from "@/components/visitors/note";
import { cn } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import styles from "./visitors-all.module.css";
import LinkPrimitive from "@/components/link-primitive";
import { Suspense } from "react";
import Link from "next/link";

const ITEMS_PER_PAGE = 50;

  props: {
    searchParams: Promise<{ page?: string }>;
  }
) {
  return (
    <div className="relative">
      <div className="fixed top-8 left-8 text-gray-2 z-10 isolate flex gap-x-4">
        <LinkPrimitive
          href="/visitors"
          variant="route"
          className="rounded-full text-gray-12 px-3 shadow-md font-medium"
        >
          return to the visitor's log
        </LinkPrimitive>
        <LinkPrimitive
          href="/"
          variant="route"
          className="rounded-full text-gray-12 px-3 shadow-md font-medium"
        >
          return home
        </LinkPrimitive>
      </div>
      <Suspense fallback={<p className="text-center mt-12">Loading entries...</p>}>
        <PageContent searchParams={props.searchParams} />
      </Suspense>
    </div>
  );
}

async function PageContent({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  return (
    <Suspense key={currentPage} fallback={<p>Loading entries...</p>}>
      <EntriesList currentPage={currentPage} />
    </Suspense>
  );
}

async function EntriesList({ currentPage }: { currentPage: number }) {
  const { entries, totalPages } = await getGuestbookEntries(currentPage);

  if (!entries.length) {
    return <p>No entries found.</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "flex flex-wrap gap-x-4 gap-y-4 *:relative! *:transform-none! *:rotate-0! py-12",
          styles.container
        )}
      >
        {entries.map((entry) => (
          <Note
            key={entry.id}
            name={entry.created_by}
            content={entry.body}
            signature={entry.signature}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="flex justify-center space-x-2 mt-8 text-[black] pb-12">
      <Link
        href={`/visitors/all?page=${currentPage - 1}`}
        aria-disabled={currentPage <= 1}
        className={cn(currentPage <= 1 ? "pointer-events-none" : "")}
        tabIndex={currentPage <= 1 ? -1 : undefined}
      >
        <Button variant="outline" disabled={currentPage <= 1}>
          Previous
        </Button>
      </Link>
      <span className="py-2 px-3 bg-gray-100 rounded">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={`/visitors/all?page=${currentPage + 1}`}
        aria-disabled={currentPage >= totalPages}
        className={cn(currentPage >= totalPages ? "pointer-events-none" : "")}
        tabIndex={currentPage >= totalPages ? -1 : undefined}
      >
        <Button variant="outline" disabled={currentPage >= totalPages}>
          Next
        </Button>
      </Link>
    </div>
  );
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

async function getGuestbookEntries(page: number) {
  const offset = (page - 1) * ITEMS_PER_PAGE;
  try {
    const [entriesResult, countResult] = await Promise.all([
      sql`
        SELECT id, created_by, body, signature
        FROM guestbook
        WHERE approved = true
        ORDER BY last_modified DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `,
      sql`SELECT COUNT(*) FROM guestbook WHERE approved = true`,
    ]);

    const totalEntries = Number(countResult.rows[0].count);
    const totalPages = Math.ceil(totalEntries / ITEMS_PER_PAGE);

    return {
      entries: entriesResult.rows,
      totalPages,
    };
  } catch (error) {
    console.error("Failed to fetch guestbook entries:", error);
    throw new Error("Failed to fetch guestbook entries");
  }
}
