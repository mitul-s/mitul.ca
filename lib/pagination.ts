export interface PaginationLinks {
  prev?: string;
  next?: string;
}

/**
 * Computes rel=prev / rel=next hrefs for a paginated page so crawlers can
 * traverse beyond the first page. Page 1 is canonical (no ?page= param).
 */
export function getPaginationLinks(
  basePath: string,
  currentPage: number,
  totalPages: number
): PaginationLinks {
  const links: PaginationLinks = {};

  if (currentPage > 1) {
    links.prev =
      currentPage - 1 === 1 ? basePath : `${basePath}?page=${currentPage - 1}`;
  }

  if (currentPage < totalPages) {
    links.next = `${basePath}?page=${currentPage + 1}`;
  }

  return links;
}
